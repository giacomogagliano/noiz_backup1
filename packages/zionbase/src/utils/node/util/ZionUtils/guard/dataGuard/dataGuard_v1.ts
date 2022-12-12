export interface IdataGuard_v1 {
  <T>(data: T, err: string): NonNullable<T>;
}

/**
 * This utility function returns the datas as a non
 * nullable. Use this when you have a variable which can
 * have a value of type `T|undefined` and you wish to have
 * only `T`, excluding undefined.
 * @param data
 * @param err
 * @returns
 */
export const dataGuard_v1: IdataGuard_v1 = function <T>(
  data: T,
  err: string
) {
  if (!data) throw new Error(err);
  return data;
};
