import { join } from "path";

export interface IjoinPaths_v1 {
  (...paths: string[]): string;
}

export const joinPaths_v1: IjoinPaths_v1 = function (...paths: string[]) {
  return join(...paths);
};
