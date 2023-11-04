import type { AnyFuntion } from '@/AnyFuntion';
export declare class Maybe {
    private $value;
    constructor($value: unknown);
    get isNothing(): boolean;
    get isJust(): boolean;
    inspect(): string;
    static of(x: unknown): Maybe;
    map(fn: any): Maybe;
    ap(f: Maybe): Maybe;
    chain(fn: AnyFuntion): unknown;
    join(): unknown;
    sequence(of: AnyFuntion): any;
    traverse(of: AnyFuntion, fn: any): any;
}
