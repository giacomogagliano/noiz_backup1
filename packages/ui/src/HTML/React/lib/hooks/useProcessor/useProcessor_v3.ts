import {
  useEffect,
  useState,
  Fragment,
  // Dispatch,
} from "react";
import { Processor, ProcessorTypes } from "./Processor";
import { Iprocessor } from "./Processor/Processor_v2";

const makeProcessor = (
  text: string,
  type: ProcessorTypes
): ReturnType<Iprocessor> => {
  switch (type) {
    case "html-react":
      return new Processor({ text, type }).html_react;

    case "md-react":
      return new Processor({ text, type }).md_react;

    case "md-string":
      return new Processor({ text, type }).md_string;

    case "md-raw-react":
      return new Processor({ text, type }).md_raw_react;

    default:
      return new Processor({ text, type }).md_react;
  }
};

export interface useProcessor_v3 {
  (text: string, type: "html-react"): JSX.Element;
  (text: string, type: "md-react"): JSX.Element;
  (text: string, type: "md-raw-react"): JSX.Element;
  (text: string, type: "md-string"): string;
  (text: string, type: ProcessorTypes): Content;
}

// type setContent = Dispatch<Content>;
type Content = JSX.Element | string;

export const useProcessor_v3: useProcessor_v3 = function (
  text,
  type
): any {
  const [Content, setContent] = useState<Content>(
    Fragment as unknown as Content
  );

  useEffect(() => {
    makeProcessor(text, type)().then(e => {
      // string
      if (type === "md-string") {
        const string = e.value as string;
        setContent(string);
      }
      if (
        type === "html-react" ||
        type === "md-react" ||
        type === "md-raw-react"
      ) {
        const Element = e.result as JSX.Element;
        setContent(Element);
      }
    });
  }, [text]);
  return Content;
};
