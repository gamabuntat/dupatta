import type { AnyFuntion } from '@/AnyFuntion';
import { identity } from '@/identity';

export class Maybe {
    constructor(private $value: unknown) {}

    get isNothing() {
        return this.$value === null || this.$value === undefined;
    }

    get isJust() {
        return !this.isNothing;
    }

    inspect() {
        return this.isNothing ? 'Nothing' : `Just(${this.$value})`;
    }

    // ----- Pointed Maybe
    static of(x: unknown) {
        return new Maybe(x);
    }

    // ----- Functor Maybe
    map(fn: any) {
        return this.isNothing ? this : Maybe.of(fn(this.$value));
    }

    // ----- Applicative Maybe
    ap(f: Maybe) {
        return this.isNothing ? this : f.map(this.$value);
    }

    // ----- Monad Maybe
    chain(fn: AnyFuntion) {
        return this.map(fn).join();
    }

    join() {
        return this.isNothing ? this : this.$value;
    }

    // ----- Traversable Maybe
    sequence(of: AnyFuntion) {
        return this.traverse(of, identity);
    }

    traverse(of: AnyFuntion, fn: any) {
        return this.isNothing ? of(this) : fn(this.$value).map(Maybe.of);
    }
}
