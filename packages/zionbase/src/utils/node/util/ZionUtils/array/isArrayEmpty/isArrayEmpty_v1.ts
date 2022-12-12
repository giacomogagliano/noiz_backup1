export interface IisArrayEmpty_v1 {
  (a: any): any;
}

/**
 *
 * @param array
 * @returns
 */
export const isArrayEmpty_v1: IisArrayEmpty_v1 = function isArrayEmpty(
  array: any[]
): boolean {
  if (array.length !== 0) return false;
  else return true;
};
