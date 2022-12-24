import React from "react";
import { VFile } from "../../../../../../../node_modules/vfile";
import { parseISO, format } from "date-fns";
import { Fragment } from "ethers/lib/utils";
import { GrayMatterFile } from "gray-matter";
import styled from "styled-components";
import { ProcessorTypes } from "../../lib/hooks";
import { Processor } from "../../lib/hooks";
import { JSXElementConstructor } from "react";
import { ReactElement, ReactNode } from "react";

enum layouts {
  main = "main",
}
enum styles {
  defaultStyle = "defaultStyle",
}
type layoutTypes = keyof typeof layouts;
type styleTypes = keyof typeof styles;

interface Article {
  title?: string;
  date?: string;
}
type Content = JSX.Element | string;

interface ProcessorArgs {
  text: string;
  type: ProcessorTypes;
}
class ProcessorArgs {}

export interface Md_v2Props
  extends BaseNoizProps<layoutTypes, styleTypes>,
    Article {
  contentHtml?: string;
  contentString: string;
  matterResult?: GrayMatterFile<string>;
  html_react?: boolean;
  md_react?: boolean;
  md_string?: boolean;
  md_raw_react?: boolean;
  article?: boolean;
}

export class Md_v2Props extends BaseNoizProps<
  layoutTypes,
  styleTypes
> {}

export interface Md_v2State<
  T extends GrayMatterFile<string>["data"]
> extends BaseNoizState<Md_v2Props> {
  Content: Content;
  data: T;
  Element: () => JSX.Element;
  processorArgs: ProcessorArgs;
}
export class Md_v2State<
  T extends GrayMatterFile<string>["data"]
> extends BaseNoizState<Md_v2Props> {}

export interface Md_v2<
  T extends GrayMatterFile<string>["data"]
> extends BaseNoiz<
    layoutTypes,
    styleTypes,
    Md_v2Props,
    Md_v2State<T>
  > {
  Processor: typeof Processor;
  makeProcessor(
    text: string,
    type: ProcessorTypes
  ): () => Promise<
    | (VFile & {
        result: ReactElement<
          unknown,
          string | JSXElementConstructor<any>
        >;
      })
    | VFile
  >;
}

export class Md_v2<
  T extends GrayMatterFile<string>["data"]
> extends BaseNoiz<
  layoutTypes,
  styleTypes,
  Md_v2Props,
  Md_v2State<T>
> {
  ERR1 = "No data array was given";
  ERR2 = "No content string was given";

  ProcessorArgs = ProcessorArgs;
  Processor = Processor;

  constructor(props: Md_v2Props) {
    super(props);

    let state = new Md_v2State<T>();
    state.Content = Fragment as unknown as Content;
    state.Element = () => <p>load it</p>;
    let procArgs = new ProcessorArgs();
    procArgs.text = this.props.contentString;
    procArgs.type = this.checkType(procArgs.type);
    state.processorArgs = procArgs;
    this.state = state;
  }

  setContent = (Content: Content) =>
    this.setState({ Content: Content });

  setElement = (Element: () => JSX.Element) =>
    this.setState({ Element: Element });

  setData = (data: T) => this.setState({ data });

  checkType(type: ProcessorTypes): ProcessorTypes {
    type = "html-react";
    if (this.props.html_react) type = "html-react";
    if (this.props.md_raw_react) type = "md-raw-react";
    if (this.props.md_react) type = "md-react";
    if (this.props.md_string) type = "md-string";
    return type;
  }

  makeParser(type: ProcessorTypes, processor: Processor) {
    const cond1 = type === "html-react";
    const cond2 = type === "md-raw-react";
    const cond3 = type === "md-react";
    const cond4 = type === "md-string";
    if (cond1) return processor.html_react();
    if (cond2) return processor.md_raw_react();
    if (cond3) return processor.md_react();
    if (cond4) return processor.md_string();
    return processor.md_react();
  }

  makeElementAndSet = (
    e:
      | VFile
      | (VFile & {
          result: ReactElement<
            unknown,
            string | JSXElementConstructor<any>
          >;
        })
  ) => this.setElement(() => <>{e.result as ReactNode}</>);

  componentDidMount(): void {
    const text = this.state.processorArgs.text;
    const type = this.state.processorArgs.type;
    const processor = new this.Processor({ text, type });
    this.setData(processor.data as T);
    console.log(processor.data);

    const parser = this.makeParser(type, processor);
    parser.then(e => {
      let result = e.result;
      let Element = () => <>{result}</>;
      if (this.props.md_string) {
        result = e.value;
        Element = () => (
          <div
            dangerouslySetInnerHTML={{
              __html: result as string,
            }}
          ></div>
        );
      }
      return this.setElement(Element);
    });
  }

  Date(props: { dateString: string }) {
    const date = parseISO(props.dateString);
    return (
      <time dateTime={props.dateString}>
        {format(date, "LLLL d, yyyy")}
      </time>
    );
  }

  Element = () => {
    let Element: () => JSX.Element = this.state.Element;
    return <Element></Element>;
  };

  Empty = (props: Md_v2Props) => (
    <div className={props.className} id="md-content">
      {props.children}
    </div>
  );

  Article = (props: Article & Md_v2Props) => {
    return (
      <article className={props.className}>
        <h1 id="headingXl">
          {props.matterResult?.data.title}
        </h1>
        {props.children}
      </article>
    );
  };

  chooseLayout() {
    if (this.props.article) return this.StyledArticle;
    return this.Empty;
  }

  StyledArticle = styled(this.Article)`
    #headingXl {
      font-size: 2rem;
      line-height: 1.3;
      font-weight: 800;
      letter-spacing: -0.05rem;
      margin: 1rem 0;
    }

    time {
      color: #666;
    }
  `;

  main = (props: Md_v2Props) => {
    return <h1>{props.children}</h1>;
  };

  layouts = [
    new this.Layout({
      name: layouts.main,
      component: this.main,
    }),
  ];

  defaultStyle = styled(this.Html)`
    img {
      width: 100vw;
    }
  `;

  styledlayouts = [
    new this.Style({
      name: styles.defaultStyle,
      style: this.defaultStyle,
    }),
  ];

  render() {
    let Element = this.Element;
    let Component = this.chooseLayout();
    return (
      <Component {...this.props}>
        <Element></Element>
      </Component>
    );
  }
}
