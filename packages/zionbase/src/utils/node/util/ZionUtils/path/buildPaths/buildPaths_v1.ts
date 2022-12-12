import { ZionUtils } from "../..";

export interface IbuildPaths_v1 {
  (this: ZionUtils, path: string, array: string[]): any[];
}

export const buildPaths_v1: IbuildPaths_v1 = function (
  path: string,
  array: string[]
) {
  const res = array.map(item =>
    this.buildPathTuple.bind(this)([path, item], item)
  );
  return res;
};
