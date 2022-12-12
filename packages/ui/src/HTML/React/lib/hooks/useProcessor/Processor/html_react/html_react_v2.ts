import { Fragment, createElement } from "react";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import { unified } from "unified";
import { Iprocessor } from "../Processor_v2";

export const html_react_v2: Iprocessor = text => () => {
  return unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeReact, {
      createElement,
      Fragment,
      components: {},
    })
    .process(text);
};
