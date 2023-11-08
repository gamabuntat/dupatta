import type { IfF } from '../../utilityTypes';

export type Maybe<A> = {
  isNothing: () => boolean;
  isJust: () => boolean;
  map: <B>(fn: (a: A) => B) => Maybe<B>;
  ap: (f: Maybe<Parameters<IfF<A>>[0]>) => Maybe<ReturnType<IfF<A>>>;
  join: () => A;
  chain: <B>(fn: (a: A) => B) => B;
};

export type Nothing = Maybe<any>;
