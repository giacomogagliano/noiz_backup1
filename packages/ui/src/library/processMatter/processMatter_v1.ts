import matter, { GrayMatterFile } from "gray-matter";

export interface IprocessMatter_v1 {
  (mdFileContent: string): GrayMatterFile<string>;
}

export const processMatter_v1: IprocessMatter_v1 =
  function (mdFileContent) {
    return matter(mdFileContent);
  };
