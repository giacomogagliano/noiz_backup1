import {
  useEffect,
  useState,
  Fragment,
  createElement,
  Dispatch,
} from "react";
// import rehypeHighlight from "rehype-highlight";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";
// import dockerfile from "highlight.js/lib/languages/dockerfile";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
// import { visit } from "unist-util-visit";

type ProcessorTypes =
  | "html-react"
  | "md-react"
  | "md-string";

class Processor {
  type: ProcessorTypes = "html-react";
  text: string;
  setContent: setContent;
  constructor(props: {
    text: string;
    setContent: setContent;
  }) {
    const { text, setContent } = props;
    this.text = text;
    this.setContent = setContent;
    this.html_react = () => {
      unified()
        .use(rehypeParse, { fragment: true })
        .use(rehypeReact, {
          createElement,
          Fragment,
          components: {},
        })
        .process(this.text)
        .then(file => {
          const Element = file.result;
          const Component = Element;
          this.setContent(Component);
        });
    };
    this.md_react = () => {
      // let substitution: string;
      unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(() => {
          return tree => {
            // visit(tree, "html", pre => {});
            console.log(tree);

            return tree;
          };
        })
        // .use(rehypeHighlight, {
        //   languages: { dockerfile },
        // })
        .use(rehypeReact, {
          createElement,
          Fragment,
          components: {},
        })
        .process(this.text)
        .then(file => {
          const Element = file.result;
          const Component = Element;
          this.setContent(Component);
        });
    };
    this.md_string = () => {
      unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .data("settings", { fragment: true })
        // .use(rehypeHighlight, {
        //   languages: { dockerfile },
        // })
        .use(rehypeStringify)
        .process(this.text)
        .then(file =>
          setContent(file.value as unknown as string)
        );
    };
  }
  html_react;
  md_react;
  md_string;
}

const makeProcessor = (
  text: string,
  setContent: setContent,
  type: ProcessorTypes
): (() => void) => {
  const processor = new Processor({ text, setContent });
  const { html_react, md_react, md_string } = processor;
  let res: () => void;
  switch (type) {
    case "html-react":
      res = html_react;
      break;

    case "md-react":
      res = md_react;
      break;

    case "md-string":
      res = md_string;
      break;

    default:
      res = html_react;
      break;
  }
  return res;
};

export interface IuseMdParser_v2 {
  (text: string, type: "md-react"): JSX.Element;
  (text: string, type: "md-string"): string;
  (text: string, type: ProcessorTypes): Content;
}

type setContent = Dispatch<Content>;
type Content = JSX.Element | string;

export const useMdParser_v2: IuseMdParser_v2 = function (
  text,
  type
): any {
  const [Content, setContent] = useState<Content>(
    Fragment as unknown as Content
  );

  useEffect(makeProcessor(text, setContent, type), [text]);
  return Content;
};
