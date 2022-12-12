import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import { unified } from "unified";
import dockerfile from "highlight.js/lib/languages/dockerfile";
// import { visit } from "unist-util-visit";
import matter from "gray-matter";

export async function mdParser_v1(
  matterResult: matter.GrayMatterFile<string>
) {
  return await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    // TODO do a little research about this value.
    .data("settings", { fragment: true })
    // TODO create an argument to set this value (coding
    // language target for the <code> html element)
    .use(rehypeHighlight, { languages: { dockerfile } })
    .use(rehypeStringify)
    // log the html created by the script
    .use(() => {
      // return tree => {
      //   visit(tree, "element", pre => {
      //     // console.log(pre.tagName);
      //   });
      // };
    })
    .process(matterResult.content);
}
