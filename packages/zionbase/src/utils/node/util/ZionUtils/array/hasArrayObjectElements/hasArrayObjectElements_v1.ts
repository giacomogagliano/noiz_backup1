import { IZionUtils } from "../..";

export interface IhasArrayObjectElements_v1 {
  (this: IZionUtils, array: object[]): boolean | string;
}

/**
 *  checks if the array contains at least one element which
 *  is of type object
 * @param array
 * @returns
 */
export const hasArrayObjectElements_v1: IhasArrayObjectElements_v1 =
  function hasArrayObjectElements(
    this: IZionUtils,
    array: object[]
  ): boolean | string {
    if (this.isArrayEmpty(array)) {
      return "Array is Empty";
    }
    let result: boolean[] = [];
    array.forEach(element => {
      if (typeof element === "object") result.push(true);
      if (typeof element !== "object") result.push(false);
    });
    if (!result.includes(true)) return false;
    else return true;
  };
