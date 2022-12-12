import { ComponentClass } from "react";
import styled, { css } from "styled-components";
import { StyledDefault } from "../../lib/types/utility";
import { BooleanizeUnions } from "../../lib/utility";
import {
  NavInput,
  NavInputProps,
  NavInputState,
} from "./NavInput";

export type Direction = BooleanizeUnions<
  "horizontal" | "vertical"
>;

export type NavBarType = BooleanizeUnions<
  "icon" | "text" | "key-value"
>;

enum layouts {
  main = "main",
  tropical = "tropical",
}
type layoutTypes = keyof typeof layouts;

enum styles {
  defaultStyle = "defaultStyle",
  borderOnTop = "borderOnTop",
}
type styleTypes = keyof typeof styles;

export interface NavBar_v4Props
  extends Direction,
    NavBarType,
    BaseNoizProps<layoutTypes, styleTypes> {
  inputs?: NavInputProps[];
  layout?: layoutTypes;
  styles?: styleTypes;
}
export class NavBar_v4Props extends BaseNoizProps<
  layoutTypes,
  styleTypes
> {}

export interface NavBar_v4State
  extends BaseNoizState<NavBar_v4Props> {
  inputs: NavInputProps[];
  Inputs: JSX.Element;
}
export class NavBar_v4State extends BaseNoizState<NavBar_v4Props> {}

class NavBarLayout extends BaseNoizLayout<
  layoutTypes,
  NavBar_v4Props
> {}
const main = new NavBarLayout();
main.name = layouts.main;
main.component = (props: NavBar_v4Props) => {
  return (
    <nav className={props.className}>
      {props.children}asd
    </nav>
  );
};

const tropical = new NavBarLayout();
tropical.name = layouts.tropical;
tropical.component = (props: NavBar_v4Props) => {
  return (
    <nav className={props.className}>
      <p>tropical</p>
      {props.children}
    </nav>
  );
};

class NavBar_v4StyledLayout extends BaseNoizStyledLayout<
  styleTypes,
  NavBar_v4Props
> {}

export interface NavBar_v4
  extends BaseNoiz<
    layoutTypes,
    styleTypes,
    NavBar_v4Props,
    NavBar_v4State
  > {
  NavInput: ComponentClass<
    StyledDefault<{
      inputId: string;
      inputName: string;
      IconComponent?: () => JSX.Element;
      value?: string;
      checked?: boolean;
      iconInput?: boolean;
      keyValueInput?: boolean;
      textInput?: boolean;
    }>,
    NavInputState
  >;
}
export class NavBar_v4 extends BaseNoiz<
  layoutTypes,
  styleTypes,
  NavBar_v4Props,
  NavBar_v4State
> {
  constructor(props: NavBar_v4Props) {
    super(props);
    let state = new NavBar_v4State();
    if (this.props.inputs)
      state.inputs = this.props.inputs;
    state.Inputs = <></>;
    state.layout = () => <></>;
    state.style = styled(this.Html)``;
    this.state = state;
  }

  main = (props: NavBar_v4Props) => {
    return (
      <nav className={props.className}>
        {props.children}
      </nav>
    );
  };

  tropical = (props: NavBar_v4Props) => {
    return (
      <nav className={props.className}>
        <p>tropical</p>
        {props.children}
      </nav>
    );
  };

  layouts = [
    new this.Layout({
      name: layouts.main,
      component: this.main,
    }),
    new this.Layout({
      name: layouts.tropical,
      component: this.tropical,
    }),
  ];

  BorderOnTop = styled(this.Html)`
    display: grid;
    grid-auto-flow: ${props => {
      if (props.horizontal === true) {
        return "column";
      }
      if (props.vertical === true) {
        return "row";
      }
      return "column";
    }};
    input {
      display: none;
    }
    label {
      cursor: pointer;
      background-color: #7c808316;
      border-top: 0.05rem solid
        ${props => props.theme.primary.borderColor};
      font-size: 70%;
      display: grid;
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      place-content: center;
      &:hover {
        background-color: #b0b3b520;
      }
      div {
        display: ${props => {
          if (props.text === true) return "grid";
          if (props.icon === true) return "grid";
          if (props["key-value"] === true) return "inline";
        }};
        place-items: center;
        p {
          display: inline;
        }
        p:first-child {
          margin-right: 0.3rem;
        }
      }
      ${props =>
        props.icon === true &&
        css`
          div {
            display: grid;
            place-items: center;
          }
        `}
    }
    input:checked + label {
      border-top: 0.1rem solid
        ${props => props.theme.primary.borderColor};
      border-bottom: 2px solid
        ${props => props.theme.secondary.borderColor};
      background-color: ${props =>
        props.theme.primary.backgroundColor};
    }
  `;

  defaultStyle = styled(this.Html)``;

  styledlayouts: NavBar_v4StyledLayout[] = [
    new NavBar_v4StyledLayout({
      name: "borderOnTop",
      style: this.BorderOnTop,
    }),
    new NavBar_v4StyledLayout({
      name: styles.defaultStyle,
      style: this.defaultStyle,
    }),
  ];

  // @ts-expect-error // TODO @giacomogagliano sistemare
  NavInput: ComponentClass<
    StyledDefault<{
      inputId: string;
      inputName: string;
      IconComponent?: () => JSX.Element;
      value?: string;
      checked?: boolean;
      iconInput?: boolean;
      keyValueInput?: boolean;
      textInput?: boolean;
    }>,
    NavInputState
  > = NavInput;

  defineType(data: NavInputProps) {
    if (this.props.text) data.layout = "text";
    if (this.props.icon) data.layout = "icon";
    if (this.props["key-value"]) data.layout = "key-value";
    else data.layout = "text";
    return data;
  }

  mapNavInputs = (data: NavInputProps, idx: number) => {
    data = this.defineType(data);
    return <NavInput {...data} key={idx} />;
  };

  mappedNavInputs = (inputs: NavInputProps[]) => (
    <>{inputs.map(this.mapNavInputs)}</>
  );

  checkInputs() {
    const inputs = this.state.inputs;
    if (!inputs)
      if (!this.props.children) return <>nothing</>;
      else {
        return <></>;
      }
    else return this.mappedNavInputs(inputs);
  }

  setInput = (Inputs: JSX.Element) =>
    this.setState({ Inputs });

  didMount() {
    const Inputs = this.checkInputs();
    this.setInput(Inputs);
  }

  render() {
    let Layout: GComponent<NavBar_v4Props> =
      this.state.layout;
    let Style = this.state.style;
    Layout = Style;
    return (
      <Layout {...this.props}>
        {this.props.children}
      </Layout>
    );
  }
}
