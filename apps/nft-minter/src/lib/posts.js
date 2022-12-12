import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
// TODO check it this library can be useful (it seems like
// somthing that can help with graph traversing.)
import { visit } from "unist-util-visit";
import rehypeStringify from "rehype-stringify";
import dockerfile from "highlight.js/lib/languages/dockerfile";
import { readAndParseFiles } from "./readAndParseFiles";
import { mdParser } from "./mdParser";

const postsDirectory = path.join(process.cwd(), "posts");
const simplepost = path.join(postsDirectory, "simple-post.md");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    // which is defined in the `.md` file in this way:
    // ---
    // title: "Costruire un immagine"
    // date: "2020-06-16"
    // ---
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  var { contentHtml, matterResult } = await getAllPosts(id, postsDirectory);

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    // sending the page configuration datas in a data object
    // down to the component which will consume it.
    ...matterResult.data,
  };
}

async function getAllPosts(id, _postsDirectory) {
  const fileContents = readAndParseFiles(_postsDirectory, id);

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await mdParser(matterResult);

  let contentHtml = processedContent.toString();
  return { contentHtml, matterResult };
}
