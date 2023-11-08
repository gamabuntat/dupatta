// lib/algebra/Maybe/Maybe.ts
var Just = (x) => ({
  isNothing: () => false,
  isJust: () => true,
  map: (fn) => Just(fn(x)),
  ap: (f) => f.map(x),
  join: () => x,
  chain: (fn) => Just(fn(x)).join()
});
var Nothing = (x) => ({
  isNothing: () => false,
  isJust: () => true,
  map: (_fn) => Nothing(x),
  ap: (_f) => Nothing(x),
  join: () => Nothing(x),
  chain: (_fn) => Nothing(x).join()
});
var maybeOf = (x) => x === void 0 || x === null ? Nothing(x) : Just(x);

// lib/algebra/Maybe/index.ts
var Maybe = maybeOf;

// lib/map.ts
var map = (fn, f) => f.map(fn);

// lib/identity.ts
var identity = (x) => x;
export {
  Just,
  Maybe,
  Nothing,
  identity,
  map
};
