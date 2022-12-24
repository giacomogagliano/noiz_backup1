import React from "react";
import styled from "styled-components";
import "../../../../HTML";

enum layouts {
  main = "main",
  test = "test",
}
type layoutTypes = keyof typeof layouts;
type test = typeof layouts;

enum styles {
  defaultStyle = "defaultStyle",
  bold = "bold",
  redback = "redback",
}
type styleTypes = keyof typeof styles;

export interface BaseTestProps
  extends BaseNoizProps<layoutTypes, styleTypes> {
  child?: boolean;
}
export class BaseTestProps extends BaseNoizProps<
  layoutTypes,
  styleTypes
> {}

export interface BaseTestState
  extends BaseNoizState<BaseTestProps> {}
export class BaseTestState extends BaseNoizState<BaseTestProps> {}

export interface BaseTest
  extends BaseNoiz<
    layoutTypes,
    styleTypes,
    BaseTestProps,
    BaseTestState
  > {}
export class BaseTest extends BaseNoiz<
  layoutTypes,
  styleTypes,
  BaseTestProps,
  BaseTestState
> {
  static defaultProps: BaseTestProps = {
    layout: layouts.main,
    style: styles.defaultStyle,
  };

  main = (p: BaseTestProps) => (
    <div className={p.className}>main</div>
  );

  test = (p: BaseTestProps) => (
    <p className={p.className}>test</p>
  );

  layouts = [
    new this.Layout({
      name: layouts.main,
      component: this.main,
    }),
    new this.Layout({
      name: layouts.test,
      component: this.test,
    }),
  ];

  defaultStyle = styled(this.Html)``;

  bold = styled(this.Html)`
    font-weight: bold;
  `;

  redBack = styled(this.Html)`
    background-color: red;
  `;

  children = [
    new this.Child(
      "child",
      () => <div>ola chico</div>,
      "main" as const,
      <form></form>
    ),
  ];

  styledlayouts = [
    new this.Style({
      name: styles.defaultStyle,
      style: this.defaultStyle,
    }),
    new this.Style({
      name: styles.bold,
      style: this.bold,
    }),
    new this.Style({
      name: styles.redback,
      style: this.redBack,
    }),
  ];
  constructor(p: BaseTestProps) {
    super(p);
    let state = new BaseTestState();
    state.layout = () => <></>;
    state.style = styled(this.Html)``;
    this.state = state;
  }
}

const StyledBaseTest = styled(BaseTest)`
  background-color: green;
  p {
    text-align: center;
  }
`;

export default function index() {
  return (
    <>
      <BaseTest
        layout="main"
        style="redback"
        child
      ></BaseTest>
    </>
  );
}
