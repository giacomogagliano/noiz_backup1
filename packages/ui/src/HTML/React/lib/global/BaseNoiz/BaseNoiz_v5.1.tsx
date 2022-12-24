import { styles } from "../../../style/common/CommonStyles";
import { Component } from "react";
import styled from "styled-components";
import { ReactNode } from "react";
import { ComponentDecorator } from "./ComponentDecorator";
import { Layout } from "./Layout";
import { Style } from "./Style";

interface Child<CT, LT> {
  name: CT;
  Component: () => JSX.Element;
  layout: LT;
  JsxPath: JSX.Element;
  filled?: boolean;
  stroked?: boolean;
  secondary?: boolean;
}

class Child<CT, LT> {
  constructor(
    name: CT,
    Component: () => JSX.Element = () => <></>,
    layout: LT,
    JsxPath: JSX.Element = <path></path>
  ) {
    this.name = name;
    this.Component = Component;
    this.layout = layout;
    this.JsxPath = JsxPath;
  }
}

////// PROPS
//////
export interface BaseNoiz_v5Props<L = string, S = string>
  extends DefaultProps<L, S> {}
export class BaseNoiz_v5Props<L, S> {}
////// STATE
//////
export interface BaseNoiz_v5State<P> {
  layout: GComponent<P>;
  style: StyledGComponent<P>;
  children?: ReactNode;
}
export class BaseNoiz_v5State<P> {}
////// CLASS
//////
export interface BaseNoiz_v5<
  LT = string,
  SLT = string,
  P extends BaseNoiz_v5Props<LT, SLT> = {},
  S extends BaseNoiz_v5State<P> = BaseNoiz_v5State<P>,
  L extends BaseNoizLayout<LT, P> = BaseNoizLayout<LT, P>,
  SL extends Style<SLT, P> = Style<SLT, P>,
  CT extends string = string
> extends Component<P, S> {}
export class BaseNoiz_v5<
  LT = string,
  SLT = string,
  P extends BaseNoiz_v5Props<LT, SLT> = {},
  S extends BaseNoiz_v5State<P> = BaseNoiz_v5State<P>,
  L extends Layout<LT, P> = Layout<LT, P>,
  SL extends Style<SLT, P> = Style<SLT, P>,
  CT extends string = string
> extends Component<P, S> {
  static styles = styles;

  ComponentDecorator = ComponentDecorator<LT, SLT, P>;

  Layout = Layout<LT, P>;

  Style = Style<SLT, P>;

  layouts: L[] = [];

  styledlayouts: SL[] = [];

  #Html: GComponent<P> = (props: P): JSX.Element => (
    <div className={props.className}>
      {props.children ? props.children : "BaseNoiz"}
    </div>
  );
  get Html(): GComponent<P> {
    return this.#Html;
  }
  set Html(Html: GComponent<P>) {
    this.#Html = Html;
  }

  #StyledHtml: StyledGComponent<P> = styled(this.Html)``;
  get StyledHtml() {
    return this.#StyledHtml;
  }
  set StyledHtml(style: StyledGComponent<P>) {
    this.#StyledHtml = style;
  }

  constructor(props: P) {
    super(props);
    let state = new BaseNoiz_v5State<S>();
    state.layout = () => <>layout</>;
    state.style = styled(state.layout)``;
    state.children = <p>child</p>;
    this.state = state as unknown as Readonly<S>;
    this.debugLog("ctor", this.styledlayouts[0]);
  }

  setLayout(Layout: GComponent<P>) {
    this.setState({ layout: Layout });
  }

  setChildren = (children: ReactNode) =>
    this.setState({ children });

  filterLayout(layout: L) {
    const setLayout = this.setLayout.bind(this);
    if (this.props.layout === layout.name) {
      setLayout(layout.component);
    }
  }
  /**
   * function which chooses the layout of the Component that
   * will be rendered
   */
  chooseLayout(): GComponent<P> {
    if (this.layouts) {
      this.layouts.forEach(this.filterLayout.bind(this));
    }
    return this.Html;
  }

  setStyle(Style: StyledGComponent<P>) {
    const currentLayout = this.state.layout;
    const decorator = new this.ComponentDecorator(
      currentLayout
    );

    const decorate = decorator.decorate.bind(decorator);
    const DecoStyle = decorate(currentLayout).with(Style);
    this.setState({ style: DecoStyle });
  }

  filterStyle(style: SL) {
    if (this.props.style === style.name) {
      this.setStyle(style.style);
    }
  }
  /**
   * function which chooses the layout of the Component that
   * will be rendered
   */
  chooseStyle(): StyledGComponent<P> {
    const slLength = this.styledlayouts.length;
    const filter = this.filterStyle;
    this.debugLog("chooseStyle", this.styledlayouts);
    if (!slLength) this.setStyle(this.#StyledHtml);
    else this.styledlayouts.forEach(filter.bind(this));
    return this.StyledHtml;
  }

  Child = Child;
  children: Child<CT, LT>[] = [];

  chooseChild() {
    let Style: StyledGComponent<P> = this.state.style;
    let El:
      | ((p: P) => JSX.Element)
      | ((p: P) => S["style"]) = () => <div>ciao</div>;
    this.children.forEach(child => {
      if (this.props[child.name as keyof P] === true) {
        const Ello: () => S["style"] = () => Style;
        El = Ello;
      }
    });
    this.setChildren(El as unknown as ReactNode);
  }

  render(): ReactNode {
    let Layout: GComponent<P> = this.state.layout;
    let Style = this.state.style;
    Layout = Style;
    return (
      <Layout {...this.props}>
        {this.props.children}
      </Layout>
    );
  }

  didMount(): void {}

  componentDidMount(): void {
    this.debugLog("componentDidMount", this.styledlayouts);

    this.chooseLayout();
    this.chooseChild();
    this.didMount();
  }

  debug = false;
  debugState = false;
  debugUpdate = false;
  debugLog = (...args: any[]) => {
    this.debug && console.log(...args);
  };

  didUpdate = (
    prevProps: Readonly<P>,
    prevState: Readonly<S>,
    snapshot?: any
  ) => {
    this.debugUpdate &&
      console.log(
        "previous props",
        prevState,
        prevProps,
        snapshot
      );
  };

  componentDidUpdate(
    prevProps: Readonly<P>,
    prevState: Readonly<S>,
    snapshot?: any
  ): void {
    this.debugState &&
      console.log("current state", this.state);
    this.debugLog(
      "componentDidUpdate",
      this.styledlayouts
    );
    if (this.layouts.length === 0) return;
    const cond = prevState.layout !== this.state.layout;
    cond && this.chooseStyle();
    ////// NON CANCELLLARE
    this.didUpdate(prevProps, prevState, snapshot);
  }
  lob = this.debugLog("reload", this.styledlayouts[0]);
}
