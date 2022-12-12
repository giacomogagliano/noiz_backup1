export const Flatten_v1 = "Flatten_v1";

/**
 * util type which lets flatten types which are incapsulated
 * inside other types.
 */
export type Flatten<T> = T extends any[] ? T[number] : T;

/**
 * util type which flattens arrays
 */
export type Flatten2<Type> = Type extends Array<infer Item>
  ? Item
  : Type;
