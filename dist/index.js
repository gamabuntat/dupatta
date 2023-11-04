// src/identity.ts
var identity = (x) => x;

// src/Maybe.ts
var Maybe = class _Maybe {
  constructor($value) {
    this.$value = $value;
  }
  get isNothing() {
    return this.$value === null || this.$value === void 0;
  }
  get isJust() {
    return !this.isNothing;
  }
  inspect() {
    return this.isNothing ? "Nothing" : `Just(${this.$value})`;
  }
  // ----- Pointed Maybe
  static of(x) {
    return new _Maybe(x);
  }
  // ----- Functor Maybe
  map(fn) {
    return this.isNothing ? this : _Maybe.of(fn(this.$value));
  }
  // ----- Applicative Maybe
  ap(f) {
    return this.isNothing ? this : f.map(this.$value);
  }
  // ----- Monad Maybe
  chain(fn) {
    return this.map(fn).join();
  }
  join() {
    return this.isNothing ? this : this.$value;
  }
  // ----- Traversable Maybe
  sequence(of) {
    return this.traverse(of, identity);
  }
  traverse(of, fn) {
    return this.isNothing ? of(this) : fn(this.$value).map(_Maybe.of);
  }
};
export {
  Maybe,
  identity
};
