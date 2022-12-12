import {
  createElement,
  Fragment,
  JSXElementConstructor,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";

export function useProcessor(text: string) {
  const [Content, setContent] = useState(
    Fragment as unknown as () => ReactElement<
      any,
      string | JSXElementConstructor<any>
    >
  );

  useEffect(() => {
    unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeReact, { createElement, Fragment })
      .process(text)
      .then((file) => {
        setContent(file.result);
      });
  }, [text]);

  return Content;
}
