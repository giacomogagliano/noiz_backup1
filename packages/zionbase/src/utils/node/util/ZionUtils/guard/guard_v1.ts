import { makeErrGuard } from "./makeErrGuard";
import { dataGuard } from "./dataGuard";
import { optionGuard } from "./optionGuard";
import { keyInObjGuard } from "./keyInObjGuard";

/**
 * Overload interface fot the guard function.
 */
export interface guard_v1 {
  // <T extends Object, O, Key extends keyof T>(obj: T, key: Key): Required<
  //   Pick<T, Key>
  // > &
  //   Exclude<T, Key>;
  // makeErrGuard
  <
    T extends Object | undefined | null,
    O,
    Out extends {},
    Key extends keyof T
  >(
    data: T
  ): NonNullable<T>;
  // dataGuard
  <
    T extends string | undefined | null,
    O,
    Out extends {},
    Key extends keyof T
  >(
    data: T,
    error: string
  ): NonNullable<T>;
  // optionGuard
  <
    T extends Object | undefined | null,
    O,
    Out extends {},
    Key extends keyof T
  >(
    data: T,
    options: [O, Out][]
  ): [T, NonNullable<Out>];
  // keyInObjGuard
  <
    T extends Object | undefined | null,
    O,
    Out extends {},
    Key extends keyof T
  >(
    data: T,
    key: Key
  ):
    | NonNullable<T>
    | NonNullable<
        Required<Pick<T, Key>> & Exclude<T, Key>
      >;
  //////// MERGED
  <
    T extends Object | undefined | null,
    O,
    Out extends {},
    Key extends keyof T
  >(
    data: T,
    errOrOptionOrKey?: string | [O, Out][] | Key
  ):
    | [T, NonNullable<Out>]
    | NonNullable<T>
    | NonNullable<
        Required<Pick<T, Key>> & Exclude<T, Key>
      >;
}

/**
 * this function is meant to be an extensible guard function
 * which can be use to create guard closures:
 * - boolean without error
 * - boolean with error
 * - evaluate some conditions and return the provided output
 * @param data
 * @param errOrOptionOrKey
 * @returns
 */
// FIXME #229 @giacomogagliano fix the interface
export const guard_v1: guard_v1 = function <
  T extends
    | Object
    | string
    | number
    | boolean
    | undefined
    | null,
  O extends unknown,
  Out extends {},
  Key extends keyof T
>(
  data: T,
  errOrOptionOrKey?: string | [O, Out][] | Key
):
  | [T, NonNullable<Out>]
  | NonNullable<T>
  | NonNullable<Required<Pick<T, Key>> & Exclude<T, Key>> {
  // data
  const variable = data as string | number | boolean;
  const object = data as Object;
  // errOrOptionOrKey
  const errorMess = errOrOptionOrKey as string;
  // HACK make a map version
  const options = errOrOptionOrKey as [O, Out][];
  const key = errOrOptionOrKey as Key;
  const noErrOrOptOrKey =
    errOrOptionOrKey === undefined ||
    errOrOptionOrKey === null;
  if (noErrOrOptOrKey) {
    const result = makeErrGuard(variable);
    return result as NonNullable<T>;
  } else {
    const isOption = Array.isArray(errOrOptionOrKey);
    if (isOption) {
      const result = optionGuard<T, O, Out>(data, options);
      return result;
    } else {
      console.log("string");
      const isString =
        typeof errOrOptionOrKey === "string";
      if (isString) {
        const isObj = typeof data === "object";
        if (isObj) {
          const hasKey = Object.getOwnPropertyNames(
            data
          ).includes(errOrOptionOrKey);
          if (hasKey) {
            const result = keyInObjGuard(object as T, key);
            return result;
          } else {
            const result = dataGuard(data as T, errorMess);
            return result;
          }
        } else {
          const result = dataGuard(data as T, errorMess);
          return result;
        }
      }
    }
  }
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
