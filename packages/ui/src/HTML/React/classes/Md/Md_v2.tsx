import ReactDOM from "react-dom/client";
import { VFile } from "../../../../../../../node_modules/vfile";
import { parseISO, format } from "date-fns";
import { Fragment } from "ethers/lib/utils";
import { GrayMatterFile } from "gray-matter";
import styled from "styled-components";
import { ProcessorTypes } from "../../lib/hooks";
import { Processor } from "../../lib/hooks";
import { JSXElementConstructor } from "react";
import { ReactElement, ReactNode } from "react";
import { Chart } from "../Chart";
import { dataGuard } from "@zionstate/zionbase/utils";

type RgbaString = string;

export interface MdTokenomicGreyMatterData {
  title: string;
  date: string;
  chart: {
    id: number;
    label: string;
    labels: [string, number][];
  }[];
}

export interface Labels {
  color: RgbaString;
}
export class Labels {
  constructor(public color: string) {}
}

export interface Legend {
  display: boolean;
  labels: Labels;
}
export class Legend {
  constructor(
    public display: boolean,
    public labels: Labels
  ) {}
}

export interface Title {
  display: boolean;
}
export class Title {
  constructor(public display: boolean) {}
}

export interface Plugins {
  title: Title;
  legend: Legend;
}
export class Plugins {
  constructor(
    public title: Title,
    public legend: Legend
  ) {}
}

export interface Options {
  responsive: boolean;
  maintainAspectRatio: boolean;
  plugins: Plugins;
}
export class Options implements Options {
  constructor(
    public responsive: boolean,
    public maintainAspectRatio: boolean,
    public plugins: Plugins
  ) {}
}

export interface Dataset {
  label: string;
  data: number[];
  backgroundColor: RgbaString[];
  borderColor: RgbaString[];
  borderWidth: number;
}
export class Dataset {
  constructor(
    public label: string,
    public data: number[],
    public backgroundColor: RgbaString[],
    public borderColor: RgbaString[],
    public borderWidth: number
  ) {}
}

export interface Data {
  labels: string[];
  datasets: Dataset[];
}
export class Data {
  constructor(
    public labels: string[],
    public datasets: Dataset[]
  ) {}
}

export interface Chart_T<Div = {}> {
  div?: Div;
  data: Data;
  options: Options;
}

export class Chart_<Div> {
  constructor(
    public data: Data,
    public options: Options,
    public div?: Div
  ) {}
}

const color1 = "rgba(23, 58, 51, 1)";
const color2 = "rgba(52, 131, 115, 1)";
const color3 = "rgba(21, 191, 157, 1)";
const color4 = "rgba(106, 178, 248, 1)";
const color5 = "rgba(78, 68, 191, 1)";
const bkgColor = [color1, color2, color3, color4, color5];
const borCol = bkgColor;
const borWidth = 1;

const labels = [
  "Promozione",
  "Investors",
  "Programmazione",
  "Artisti",
  "Stampa",
];

const chart2title = "Tokenomics";
const data2_1: number[] = [];
const dataset2 = new Dataset(
  chart2title,
  data2_1,
  bkgColor,
  borCol,
  borWidth
);
const datasets2 = [dataset2];
const data2 = new Data(labels, datasets2);

type value =
  | VFile
  | (VFile & {
      result: ReactElement<
        unknown,
        string | JSXElementConstructor<any>
      >;
    });

interface makeElementAndSet {
  (value: value): void;
}

interface parserHandler {
  (value: value): void | PromiseLike<void>;
}

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
  T extends MdTokenomicGreyMatterData
> extends BaseNoizState<Md_v2Props> {
  Content: Content;
  data: T;
  Element: () => JSX.Element;
  processorArgs: ProcessorArgs;
}
export class Md_v2State<
  T extends MdTokenomicGreyMatterData
> extends BaseNoizState<Md_v2Props> {}

export interface Md_v2<T extends MdTokenomicGreyMatterData>
  extends BaseNoiz<
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
  T extends MdTokenomicGreyMatterData
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
    state.layout = () => <div>cavolo</div>;
    state.style = styled(state.layout)``;
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

  makeElementAndSet: makeElementAndSet = e =>
    this.setElement(() => <>{e.result as ReactNode}</>);

  handle_md_string = (e: value) => {
    const result = e.value;
    const Element = () => (
      <div
        dangerouslySetInnerHTML={{
          __html: result as string,
        }}
      ></div>
    );
    return Element;
  };

  handle_md_rawReact = () => {
    if (this.props.md_raw_react) {
      const cond = true;
      if (cond) {
        this.state.data.chart.forEach(chart => {
          const id = chart.id;
          const domeNode = window.document.getElementById(
            `chart-${id}`
          );
          const root = ReactDOM.createRoot(domeNode!);
          let labels: string[] = [];
          let data: number[] = [];
          chart.labels.forEach(l => {
            labels.push(l[0]);
            data.push(l[1]);
          });
          const dataset = dataGuard(data2.datasets[0], "");
          data2.labels = labels;
          dataset.data = data;
          root.render(
            <Chart
              chartJs={{ type: "doughnut", data: data2 }}
            ></Chart>
          );
        });
      }
    }
  };

  handleParsedData: parserHandler = e => {
    let result = e.result;
    let Element = () => <>{result}</>;
    if (this.props.md_string)
      Element = this.handle_md_string(e);
    return this.setElement(Element);
  };

  didMount(): void {
    const text = this.state.processorArgs.text;
    const type = this.state.processorArgs.type;
    const processor = new this.Processor({ text, type });

    this.setData(processor.data as T);

    const parser = this.makeParser(type, processor);
    parser.then(this.handleParsedData);
  }

  didUpdate: (
    prevProps: Readonly<Md_v2Props>,
    prevState: Readonly<Md_v2State<T>>,
    snapshot?: any
  ) => void = (_, s, __) => {
    const prevElement = s.Element;
    const currElement = this.state.Element;
    const cond = prevElement !== currElement;
    if (cond) this.handle_md_rawReact();
  };

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

  // chooseLayout() {
  //   const cond = this.props.article !== undefined;
  //   if (cond) return this.StyledArticle;
  //   else return this.Empty;
  // }

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
    return (
      <div className={props.className}>
        {props.children}
      </div>
    );
  };

  layouts = [
    new this.Layout({
      name: layouts.main,
      component: this.main,
    }),
  ];

  defaultStyle = styled(this.Html)`
    margin: 1rem;
    > *:not(:last-child) {
      margin-bottom: 0.5rem;
    }
    /* img {
      width: 100vw;
    } */
    blockquote {
      padding: 0.3rem;
      > *:not(:last-child) {
        margin-bottom: 0.3rem;
      }
      border-radius: 0.3rem 0 0 0.3rem;
      background-color: ${props =>
        props.theme.palette_ryb.red_purple
          .setSaturation(4)
          .setBrightness(20).value};
      border-left: 1rem solid
        ${props =>
          props.theme.palette_ryb.red_purple
            .setBrightness(30)
            .setSaturation(10).value};
    }
    pre {
      padding: 1rem;
      background-color: ${props =>
        props.theme.palette_ryb.red_purple
          .setSaturation(2)
          .setBrightness(45).value};
      width: max-content;
      border-top: 0.5rem solid
        ${props =>
          props.theme.palette_ryb.red_purple
            .setSaturation(22)
            .setBrightness(45).value};
      border-radius: 0.3rem;
      code {
        margin: 0.3rem;
        font-family: "Courier New", Courier, monospace;
        * {
          font-family: "Courier New", Courier, monospace;
        }
      }
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
    let Style = this.state.style;
    return (
      <Style {...this.props}>
        <Element></Element>
      </Style>
    );
  }
}
