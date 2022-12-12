import path from "path";
import { readFileSync } from "fs";

export interface IreadAndParse_v1 {
  (_postsDirectory: string, id: string): string;
}

export const readAndParse_v1: IreadAndParse_v1 = function (
  _postsDirectory: string,
  id: string
) {
  const fullPath = path.join(_postsDirectory, `${id}.md`);
  const fileContents = readFileSync(fullPath, "utf8");
  return fileContents;
};
