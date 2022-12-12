import { VFile } from "../../../../../../../../../node_modules/vfile";
import { Dispatch, JSXElementConstructor } from "react";
import { ReactElement } from "react";
import { html_react } from "./html_react";
import { md_react } from "./md_react";
import { md_string } from "./md_string";
import { md_raw_react } from "./md_raw_react";

export interface Iprocessor {
  (text: string): () => Promise<
    | (VFile & {
        result: ReactElement<
          unknown,
          string | JSXElementConstructor<any>
        >;
      })
    | VFile
  >;
}
export type ProcessorTypes_v2 =
  | "html-react"
  | "md-react"
  | "md-string"
  | "md-raw-react";

export interface IProcessor_v2 {
  type: ProcessorTypes_v2;
  text: string;
  html_react: ReturnType<Iprocessor>;
  md_react: ReturnType<Iprocessor>;
  md_string: ReturnType<Iprocessor>;
  md_raw_react: ReturnType<Iprocessor>;
}

export interface Processor_v2 {
  type: ProcessorTypes_v2;
  text: string;
  html_react: ReturnType<Iprocessor>;
  md_react: ReturnType<Iprocessor>;
  md_string: ReturnType<Iprocessor>;
  md_raw_react: ReturnType<Iprocessor>;
}

export type setContent_v2 = Dispatch<Content_v2>;
export type Content_v2 = JSX.Element | string;

export class Processor_v2 implements IProcessor_v2 {
  constructor(props: {
    text: string;
    type: ProcessorTypes_v2;
  }) {
    const { text, type } = props;
    this.text = text;
    this.type = type;
    this.html_react = html_react(text);
    this.md_react = md_react(text);
    this.md_string = md_string(text);
    this.md_raw_react = md_raw_react(text);
  }
}

export type Processor_v2Ctor = {
  new (props: {
    text: string;
    type: ProcessorTypes_v2;
  }): Processor_v2;
};

export const Processor_v2Ctor: Processor_v2Ctor =
  Processor_v2;
