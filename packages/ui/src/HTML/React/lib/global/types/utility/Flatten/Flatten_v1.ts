/**
 * Flattens an intersection.
 * Usage:
 * ```ts
 * type A = {name:string};
 * type B = {surname:string};
 * type Flat = Flatten<A & B>;
 * ```
 */
export type Flatten_v1<T> = { [k in keyof T]: T[k] };
