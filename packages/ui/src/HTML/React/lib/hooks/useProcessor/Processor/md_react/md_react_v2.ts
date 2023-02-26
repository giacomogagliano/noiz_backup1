import { createElement, Fragment } from "react";
// import rehypeHighlight from "rehype-highlight";
import dockerfile from "highlight.js/lib/languages/dockerfile";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypeReact from "rehype-react";
import { Iprocessor } from "../Processor_v2";

// export const md_react_v2: Imd_react_v2 = function () {};

export const md_react_v2: Iprocessor =
  (text: string) => () =>
    unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      // .use(rehypeHighlight, {
      //   languages: { dockerfile },
      // })
      .use(rehypeReact, {
        createElement,
        Fragment,
        components: {},
      })
      .process(text);
