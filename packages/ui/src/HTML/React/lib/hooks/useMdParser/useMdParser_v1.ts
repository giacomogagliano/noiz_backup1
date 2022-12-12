import {
  useEffect,
  useState,
  Fragment,
  createElement,
  ReactElement,
  JSXElementConstructor,
  SetStateAction,
  Dispatch,
} from "react";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import { unified } from "unified";

export interface IuseMdParser_v1 {
  (a: string): ReactElement<
    any,
    string | JSXElementConstructor<any>
  > | null;
}

const foo =
  (
    text: string,
    setContent: Dispatch<
      SetStateAction<ReactElement<
        any,
        string | JSXElementConstructor<any>
      > | null>
    >
  ) =>
  () => {
    unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeReact, {
        createElement,
        Fragment,
        components: {},
      })
      .process(text)
      .then(file => {
        const Element = file.result;
        const Component = Element;
        setContent(Component);
      });
  };

export const useMdParser_v1: IuseMdParser_v1 = function (
  text
) {
  const [Content, setContent] = useState(
    Fragment as unknown as () => ReactElement<
      any,
      string | JSXElementConstructor<any>
    > | null
  );

  useEffect(foo(text, setContent), [text]);

  return Content;
};
