import { styles } from "../../../style/common/CommonStyles";
import { Component } from "react";
import styled from "styled-components";
import { ReactNode } from "react";
import { ComponentDecorator } from "./ComponentDecorator";
import { Layout } from "./Layout";
import { Style } from "./Style";
import {
  DefaultProps_v1,
  StyledGComponent_v1,
} from "./Types";
import { GComponent_v1 } from "./Types";
import { BaseProps_v1 } from "./Types";

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
export interface BaseNoiz_v4Props<L = string, S = string>
  extends DefaultProps<L, S> {}
export class BaseNoiz_v4Props<L, S> {}
////// STATE
//////
export interface BaseNoiz_v4State<P> {
  layout: GComponent<P>;
  style: StyledGComponent<P>;
}
export class BaseNoiz_v4State<P> {}
////// CLASS
//////
export interface BaseNoiz_v4<
  LT = string,
  SLT = string,
  P extends BaseNoiz_v4Props<LT, SLT> = {},
  S extends BaseNoiz_v4State<P> = BaseNoiz_v4State<P>,
  L extends BaseNoizLayout<LT, P> = BaseNoizLayout<LT, P>,
  SL extends Style<SLT, P> = Style<SLT, P>,
  CT extends string = string
> extends Component<P, S> {}
export class BaseNoiz_v4<
  LT = string,
  SLT = string,
  P extends BaseNoiz_v4Props<LT, SLT> = {},
  S extends BaseNoiz_v4State<P> = BaseNoiz_v4State<P>,
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
    this.debugLog("ctor", this.styledlayouts[0]);
  }

  setLayout(Layout: GComponent<P>) {
    this.setState({ layout: Layout });
  }

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
    let El: () => JSX.Element = () => <div>ciao</div>;
    this.children.forEach(child => {
      // TODO #7 @giacomogagliano chooseChild ts
      // capire come fare per permettere a ts di sapere
      // quali saranno i nomi dei child che ricevera. Nel
      // caso del layout e style usiamo un membro che può
      // essere un unione di valori, in questo caso dobbiamo
      // usare un membro per child di tipo boolean, che deve
      // essere aggiunto alla lista delle props
      // @ts-expect-error
      if (this.props[child.name] === true)
        // @ts-expect-error
        El = () => <Style>{child.JsxPath}</Style>;
    });
    return El;
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

declare global {
  ////// LAYOUT
  var BaseNoizLayout: typeof Layout;
  type BaseNoizLayout<L, P> = Layout<L, P>;
  ////// STYLE
  var BaseNoizStyledLayout: typeof Style;
  type BaseNoizStyledLayout<S, P> = Style<S, P>;
  ////// PROPS
  /**
   * This class is meant to be an help with creating
   * arguments for components. It represents the shape of
   * the props that the component will receive but at the
   * same time it is class which generates objects suite to
   * be passed as spread operators to components like this:
   * ```ts
   * class ComponentProps extends BaseNoizPros {}
   * const builtProps = new ComponentProps()
   * props.name = "name"
   * ... later on in the component
   * {
   * ...
   * return <Component {...builtProps} />
   * }
   * ```
   */
  var BaseNoizProps: typeof BaseNoiz_v4Props;
  /**
   * Usage:
   * ```tsx
   *
   *
   * import {
   *   BaseNoiz,
   *   BaseNoizProps,
   * } from "../../HTML/React/lib/global";
   *
   *
   * interface NuProps extends BaseNoizProps {
   *   name: string;
   * }
   * class NuProps extends BaseNoizProps {}
   *
   * interface NuState extends BaseNoizState {}
   * class NuState extends BaseNoizeState {}
   *
   * interface Nu extends BaseNoiz<
   *   NuProps,
   *   NuState
   * > {}
   * class Nu extends BaseNoiz<
   *   NuProps,
   *   NuState
   * > {}
   *
   * const child1 = new NuProps();
   * child1.name = "1"
   * child2.children = <div>I'm child 1</div>
   *
   * const child2 = new NuProps();
   * child2.name = "2"
   * child2.children = ["ciao2", "asdas"]
   *
   * const child3 = new NuProps();
   * child3.name = "3"
   * child3.children = ["ciao3", "asdas"]
   *
   * const child4 = new NuProps();
   * child4.name = "4"
   * child4.children = ["ciao4", "asdas"]
   *
   * const props = new NuProps();
   * props.name = "ciao"
   * props.datas = [child1, child2, child3, child4]
   *
   * export default function index() {
   *   return <Nu {...props}>cioooo</Nu>;
   * }
   * ```
   */
  type BaseNoizProps<LT, SLT> = BaseNoiz_v4Props<LT, SLT>;
  ////// STATE
  /**
   * This class contains 2 members:
   * - layout: it represents the layout which is rendered
   * - style: representse the style to be applied to the
   *   chosen layout.
   *   it shall be extended when creating a new class in the
   *   Noiz protocol.
   * Usage:
   * ```tsx
   * // earlier we defined the props and we pass it as generic
   * // to the State class
   * class ComponenState extends BaseNoizState<ComponentProps> {}
   * ```
   */
  var BaseNoizState: typeof BaseNoiz_v4State;
  type BaseNoizState<P> = BaseNoiz_v4State<P>;
  ////// CLASS
  /**
   * BaseNoiz class is meant to gather all the common
   * actions which are done on a class.
   * The concept is base on a class being able to render
   * several layouts which can be styled with several styles.
   * In order to achieve this the class has 2 built in
   * classes: `Layout` and `Style`, with which we create
   * instances of layouts and styles that we place in the
   * corresponding arrays:
   * - layouts
   * - styledlayouts
   *
   * The class performs a check against the props when the
   * component is built and sets the layout in the state.
   * In the `componentShouldUpdate` we perform a check
   * agains changements happened on the layout and we run
   * the `chooseStyle` method.
   * Here under a minimal working code to use this class.
   * Usage:
   * ```tsx
   * enum layouts {
   *   main = "main",
   *   test = "test",
   * }
   * type layoutTypes = keyof typeof layouts;
   * type test = typeof layouts;
   *
   * enum styles {
   *   normal = "normal",
   *   redback = "redback",
   * }
   * type styleTypes = keyof typeof styles;
   *
   * export interface BaseTestProps
   *   extends BaseNoizProps<layoutTypes, styleTypes> {}
   * export class BaseTestProps extends BaseNoizProps<
   *   layoutTypes,
   *   styleTypes
   * > {}
   *
   * export interface BaseTestState
   *   extends BaseNoizState<BaseTestProps> {}
   * export class BaseTestState extends BaseNoizState<BaseTestProps> {}
   *
   * export interface BaseTest
   *   extends BaseNoiz<
   *     layoutTypes,
   *     styleTypes,
   *     BaseTestProps,
   *     BaseTestState
   *   > {}
   * export class BaseTest extends BaseNoiz<
   *   layoutTypes,
   *   styleTypes,
   *   BaseTestProps,
   *   BaseTestState
   * > {
   *   main = (p: BaseTestProps) => (
   *     <div className={p.className}>test it</div>
   *   );
   *
   *   test = (p: BaseTestProps) => (
   *     <p className={p.className}>test</p>
   *   );
   *
   *   layouts = [
   *     new this.Layout({
   *       name: layouts.main,
   *       component: this.main,
   *     }),
   *     new this.Layout({
   *       name: layouts.test,
   *       component: this.test,
   *     }),
   *   ];
   *
   *   bold = styled(this.Html)`
   *     font-weight: bold;
   *   `;
   *
   *   redBack = styled(this.Html)`
   *     background-color: red;
   *   `;
   *
   *   styledlayouts = [
   *     new this.Style({
   *       name: styles.normal,
   *       style: this.bold,
   *     }),
   *     new this.Style({
   *       name: styles.redback,
   *       style: this.redBack,
   *     }),
   *   ];
   *
   *   constructor(p: BaseTestProps) {
   *     super(p);
   *     this.state = {
   *       layout: p => (
   *         <div className={p.className}>bloom</div>
   *       ),
   *       style: styled(this.main)``,
   *     };
   *   }
   * }
   * ```
   */
  var BaseNoiz: typeof BaseNoiz_v4;
  type BaseNoiz<
    LT extends string,
    SLT extends string,
    P extends DefaultProps<LT, SLT>,
    S extends BaseNoiz_v4State<P>,
    L extends Layout<LT, P> = Layout<LT, P>,
    SL extends Style<SLT, P> = Style<SLT, P>,
    CT extends string = string
  > = BaseNoiz_v4<LT, SLT, P, S, L, SL>;
  //
  type BaseProps<T> = BaseProps_v1<T>;
  type DefaultProps<LT, SLT> = DefaultProps_v1<LT, SLT>;
  //
  type GComponent<T> = GComponent_v1<T>;
  type StyledGComponent<T> = StyledGComponent_v1<T>;
}

globalThis.BaseNoiz = BaseNoiz_v4;
globalThis.BaseNoizProps = BaseNoiz_v4Props;
globalThis.BaseNoizState = BaseNoiz_v4State;
globalThis.BaseNoizLayout = Layout;
globalThis.BaseNoizStyledLayout = Style;
