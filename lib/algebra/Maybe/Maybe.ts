import type { Maybe, Nothing as NothingType } from './types';

import type { F } from '../../utilityTypes';

export const Just = <A>(x: A): Maybe<A> => ({
  isNothing: () => false,
  isJust: () => true,
  map: fn => Just(fn(x)),
  ap: f => f.map(x as F),
  join: () => x,
  chain: fn => Just(fn(x)).join(),
});

export const Nothing = <A>(x: A): NothingType => ({
  isNothing: () => true,
  isJust: () => false,
  map: _fn => Nothing(x),
  ap: _f => Nothing(x),
  join: () => Nothing(x),
  chain: _fn => Nothing(x).join(),
});

export const maybeOf = <A>(x: A): Maybe<A> =>
  x === undefined || x === null ? Nothing(x) : Just(x);
