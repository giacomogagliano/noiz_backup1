export interface Imodulo_v1 {
  (a: number, b: number): number;
}

/**
 *
 * @param a
 * @param b
 * @returns
 */
export const modulo_v1: Imodulo_v1 = function modulo(
  a: number,
  b: number
): number {
  return a % b;
};
