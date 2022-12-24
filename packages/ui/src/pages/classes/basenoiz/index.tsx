import React from "react";
import styled from "styled-components";
import { BaseNoizProps } from "../../../HTML/React/lib/global";

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
  extends BaseNoizProps<layoutTypes, styleTypes> {}
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

/**
 * @dev to be able to use a style which overrides the styles
 * which are stored in the class, one **must** not call any
 * style in the props in the `styled` component as this will
 * cause a bug which makes the class rende the basenoiz component.
 * This means that calling the `styled` class and passing
 * any other previous stored style will cause the final
 * style to be as the newly styled component while the
 * content will render wrongly.
 * @returns
 */
export default function index() {
  return (
    <>
      <BaseTest layout="main" style="redback"></BaseTest>
      <StyledBaseTest layout="main"></StyledBaseTest>
      <StyledBaseTest layout="main" style="redback">
        <p>this one has an error in rendering:</p>
        <p>
          it renders correctly the children passed to it
        </p>
        <p>
          {" "}
          while it bugs as it received a props with a
          layout
        </p>
        <p>
          {" "}
          and it doesn't render it. The expected behaviour
        </p>
        <p>
          {" "}
          should be of it not taking in account the passed
          props
        </p>
      </StyledBaseTest>
    </>
  );
}
