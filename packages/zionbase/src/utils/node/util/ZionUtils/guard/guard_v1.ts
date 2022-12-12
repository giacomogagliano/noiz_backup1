import { makeErrGuard } from "./makeErrGuard";
import { dataGuard } from "./dataGuard";
import { optionGuard } from "./optionGuard";
import { keyInObjGuard } from "./keyInObjGuard";

/**
 * Overload interface fot the guard function.
 */
export interface Iguard_v1 {
  // makeErrGuard
  <T>(data: T): NonNullable<T>;
  // dataGuard
  <T>(data: T, err: string): NonNullable<T>;
  // optionGuard
  <T, O, Out extends {}>(data: T, options: [O, Out][]): [
    T,
    NonNullable<Out>
  ];
  // keyInObjGuard
  <T, O, Key extends keyof T>(obj: T, key: Key): Required<
    Pick<T, Key>
  > &
    Exclude<T, Key>;
  //////// MERGED
  <T, O, Out extends {}, Key extends keyof T>(
    data: T,
    errOption?: string | [O, Out][] | Key
  ):
    | [T, NonNullable<Out>]
    | NonNullable<T>
    | (Required<Pick<T, Key>> & Exclude<T, Key>);
}

/**
 * this function is meant to be an extensible guard function
 * which can be use to create guard closures:
 * - boolean without error
 * - boolean with error
 * - evaluate some conditions and return the provided output
 * @param data
 * @param errOption
 * @returns
 */
// @ts-expect-error
export const guard_v1: Iguard_v1 = function <
  T,
  O,
  Out extends {},
  Key extends keyof T
>(
  data: T,
  errOption?: string | [O, Out][] | Key
):
  | [T, NonNullable<Out>]
  | NonNullable<T>
  | (Required<Pick<T, Key>> & Exclude<T, Key>) {
  if (!errOption) return makeErrGuard(data);
  if (typeof errOption === "string")
    return dataGuard(data, errOption);
  if (Array.isArray(errOption))
    return optionGuard(data, errOption);
  // TODO sistemare ts error
  // @ts-expect-error
  if (errOption in data)
    return keyInObjGuard(data, errOption);
  if (!data) throw new Error("no data");
  return data;
};

// const opt1: ["ciao", 10] = ["ciao", 10];
// const opt2: ["mia0", 11] = ["mia0", 11];

// const res = optionGuard("ciao", [opt1, opt2]);

// interface Ifoo {
//   <A extends string, B extends number, C extends string, D extends number>(
//     a: [[A, B], [C, D]]
//   ): [[A, C], [B, D]];
// }
// const foo: Ifoo = function (a) {
//   let stringarr: string[] = a.map(e => e[0]);
//   let numarr: number[] = a.map(e => e[1]);
//   return [stringarr, numarr];
// };

// const arrfoo: [typeof opt1, typeof opt2] = [opt1, opt2];
// const foores = foo(arrfoo);
