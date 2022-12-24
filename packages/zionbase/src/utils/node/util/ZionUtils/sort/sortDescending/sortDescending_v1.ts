export interface IsortDescending_v1 {
  <T extends []>(a: T, b: T, index: number):
    | number
    | undefined;
}

/**
 *
 * @param a
 * @param b
 * @param index
 * @returns
 */
export const sortDescending_v1: IsortDescending_v1 =
  function sortDescending<T extends any[]>(
    a: T,
    b: T,
    index: number
  ): number | undefined {
    if (
      typeof a[index] !== "number" &&
      typeof b[index] !== "number"
    ) {
      return;
    }
    return b[index] - a[index];
  };
