import { ZionUtils } from "../..";

export interface IbuildPathTuple_v1 {
  (this: ZionUtils, paths: string[], text: string): [string, string];
}

export const buildPathTuple_v1: IbuildPathTuple_v1 = function (
  paths: string[],
  text: string
) {
  let res: [string, string] = [this.joinPaths(...paths), text];
  return res;
};
