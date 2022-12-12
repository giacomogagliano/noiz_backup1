import dockerfile from "highlight.js/lib/languages/dockerfile";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { Iprocessor } from "../Processor_v2";

export const md_string_v2: Iprocessor = text => () =>
  unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .data("settings", { fragment: true })
    .use(rehypeHighlight, {
      languages: { dockerfile },
    })
    .use(rehypeStringify)
    .process(text);
