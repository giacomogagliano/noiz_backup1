import { createElement, Fragment } from "react";
// import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import remarkGfm from "remark-gfm";
import { unified } from "unified";
// import dockerfile from "highlight.js/lib/languages/dockerfile";
// import { visit } from "unist-util-visit";
import matter from "gray-matter";

// TODO #165 @giacomogagliano delete file

export async function mdParser_v3(
  matterResult: matter.GrayMatterFile<string>
) {
  return await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .data("settings", { fragment: true })
    // .use(rehypeHighlight, { languages: { dockerfile } })
    .use(rehypeReact, {
      createElement,
      Fragment,
      components: {},
    })
    .use(rehypeStringify)
    .use(() => {
      // return (tree: any) => {
      //   visit(tree, "element", pre => {
      //     console.log(pre.tagName);
      //   });
      // };
    })
    .process(matterResult.content);
}
