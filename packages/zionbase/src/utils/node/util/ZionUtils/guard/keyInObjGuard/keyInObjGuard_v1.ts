import { dataGuard } from "../dataGuard";

export interface IkeyInObjGuard_v1 {
  <T, K extends keyof T>(data: T, key: K): NonNullable<
    Required<Pick<T, K>> & Exclude<T, K>
  >;
}
export const keyInObjGuard_v1: IkeyInObjGuard_v1 =
  function (obj, key) {
    const ERR = `value in ${key.toString()} is undefined`;
    dataGuard(obj[key], ERR);
    return obj as Required<Pick<typeof obj, typeof key>> &
      Exclude<typeof obj, typeof key>;
  };

// type und = { name?: string };
// const u: und = { name: "" };

// const a = keyInObjGuard_v1(u, "name");
// const b = a.name;
