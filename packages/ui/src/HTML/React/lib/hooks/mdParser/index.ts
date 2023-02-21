import matter from "gray-matter";
import { VFile } from "vfile";

///// EXPORT
export { mdParser_v1 } from "./mdParser_v1";
export { mdParser_v2 as mdParser } from "./mdParser_v2";
//////

export interface ImdParser {
  (
    matterResult: matter.GrayMatterFile<string>
  ): Promise<VFile>;
}
