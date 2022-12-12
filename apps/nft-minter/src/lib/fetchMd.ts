import matter from "gray-matter";
import { mdParser } from "./mdParser";

export async function fetchMd(props: { src: string }) {
  const { src } = props;
  const response = await fetch(src);
  const stringedFetchedMDcontent = await response.text();
  const matterResult = matter(stringedFetchedMDcontent);
  const contentHtml = await mdParser(matterResult);
  return contentHtml.toString();
}
