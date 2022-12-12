import { createElement, Fragment } from "react";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import remarkGfm from "remark-gfm";
import { unified } from "unified";
import dockerfile from "highlight.js/lib/languages/dockerfile";
import { visit } from "unist-util-visit";
import matter from "gray-matter";

export async function mdParser_v2(
  matterResult: matter.GrayMatterFile<string>
) {
  return await unified()
    .use(remarkParse)
    .use(() => {
      return tree => {
        visit(tree, "html", pre => {
          console.log(pre.value);
        });
        // console.log(tree);

        return tree;
      };
    })
    .use(remarkGfm)
    .use(remarkRehype)
    // TODO do a little research about this value.
    .data("settings", { fragment: true })
    // TODO create an argument to set this value (coding
    // language target for the <code> html element)
    .use(rehypeHighlight, { languages: { dockerfile } })
    .use(rehypeReact, {
      createElement,
      Fragment,
      // components: {},
    })
    .use(rehypeStringify)
    .use(() => {
      return (tree: any) => {
        visit(tree, undefined, pre => {
          // console.log(
          //   pre.type,
          //   pre.tagName,
          //   pre.properties
          // );
        });
      };
    })
    .process(matterResult.content);
  // .then(file => console.log(file.result));
}
