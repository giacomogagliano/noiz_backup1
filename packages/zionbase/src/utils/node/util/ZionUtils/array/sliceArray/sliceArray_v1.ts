export interface IsliceArray_v1 {
  <T>(size: number, array: T): T[][] | string;
}

/**
 *
 * @param size : ;
 * @param array
 * @returns
 */
export const sliceArray_v1: IsliceArray_v1 = function sliceArray<T>(
  size: number,
  array: T
): T[][] | string {
  if (typeof size === "number" && Array.isArray(array)) {
    var s: number = size;
    var arrayOfArrays: T[][] = [];
    for (var i = 0; i < array.length; i += s) {
      arrayOfArrays.push(array.slice(i, i + s));
    }
    return arrayOfArrays;
  } else {
    let res: string;
    typeof size !== "number"
      ? (res = "size is not a number")
      : (res = "The second argument shall be an array");
    return res;
  }
};
