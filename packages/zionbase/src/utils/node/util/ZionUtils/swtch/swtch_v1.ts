import { swtch2 } from "./swtch2";
import { swtch3 } from "./swtch3";
import { swtch4 } from "./swtch4";
import { swtch5 } from "./swtch5";

export interface Iswtch_v1 {
  <A extends T[], O extends any[], T>(arr: A, opt: O, test: A[0]): O[0];
  <A extends T[], O extends any[], T>(arr: A, opt: O, test: A[1]): O[1];
  <A extends T[], O extends any[], T>(arr: A, opt: O, test: A[2]): O[2];
  <A extends T[], O extends any[], T>(arr: A, opt: O, test: A[3]): O[3];
  <A extends T[], O extends any[], T>(arr: A, opt: O, test: A[4]): O[4];
}

/**
 * Usage:
 * ```ts
 * const arr2: ["1", "2", "asdf"] = ["1", "2", "asdf"];
 * const opt2: ["opt1", () => void, 10] = ["opt1", () => console.log(), 10];
 *
 * const res = swtch_v1(arr2, opt2, "1");
 * ```
 * @param arr
 * @param opt
 * @param test
 * @returns
 */
export const swtch_v1: Iswtch_v1 = function (arr, opt, test) {
  if (arr.length === 2) return swtch2(arr, opt, test);
  if (arr.length === 3) return swtch3(arr, opt, test);
  if (arr.length === 4) return swtch4(arr, opt, test);
  if (arr.length === 5) return swtch5(arr, opt, test);
};
