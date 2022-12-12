import path from "path";
import { readFileSync } from "fs";

export function readAndParseFiles(_postsDirectory: string, id: string) {
  const fullPath = path.join(_postsDirectory, `${id}.md`);
  const fileContents = readFileSync(fullPath, "utf8");
  return fileContents;
}
