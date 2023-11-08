import type { Maybe, Nothing as NothingType } from './types';
export declare const Just: <A>(x: A) => Maybe<A>;
export declare const Nothing: <A>(x: A) => NothingType;
export declare const maybeOf: <A>(x: A) => Maybe<A>;
