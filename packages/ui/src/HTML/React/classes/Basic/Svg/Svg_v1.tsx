import React from "react";
import styled from "styled-components";

enum layouts {
  Svg24 = "Svg24",
  Svg51 = "Svg51",
}
enum styles {
  defaultStyle = "defaultStyle",
}

type layoutTypes = keyof typeof layouts;
type styleTypes = keyof typeof styles;

export interface Svg_v1Props
  extends BaseNoizProps<layoutTypes, styleTypes> {
  filled?: boolean;
  stroked?: boolean;
  secondary?: boolean;
}
export class Svg_v1Props extends BaseNoizProps<
  layoutTypes,
  styleTypes
> {}

export interface Svg_v1State
  extends BaseNoizState<Svg_v1Props> {}
export class Svg_v1State {}

export interface Svg_v1
  extends BaseNoiz<
    layoutTypes,
    styleTypes,
    Svg_v1Props,
    Svg_v1State
  > {}
export class Svg_v1 extends BaseNoiz<
  layoutTypes,
  styleTypes,
  Svg_v1Props,
  Svg_v1State
> {
  Svg24 = (props: Svg_v1Props) => (
    <svg
      className={props.className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      {props.children}
    </svg>
  );

  Svg51 = (props: Svg_v1Props) => (
    <svg
      className={props.className}
      width="51"
      height="51"
      viewBox="0 0 51 51"
      fill="none"
    >
      {props.children}
    </svg>
  );

  layouts = [
    new this.Layout({
      name: layouts.Svg24,
      component: this.Svg24,
    }),
    new this.Layout({
      name: layouts.Svg51,
      component: this.Svg51,
    }),
  ];

  defaultStyle = styled(this.Html)`
    // #10 aggiungere qui
    path {
      fill: ${props => {
        console.log(
          props.filled
            ? props.secondary
              ? props.theme.secondary.borderColor
              : props.theme.primary.borderColor
            : ""
        );
        return props.filled
          ? props.secondary
            ? props.theme.secondary.borderColor
            : props.theme.primary.borderColor
          : "";
      }};
      stroke: ${props =>
        props.stroked
          ? props.theme.primary.borderColor
          : ""};
    }
    circle {
      fill: ${props =>
        props.filled
          ? props.secondary
            ? props.theme.secondary.borderColor
            : props.theme.primary.borderColor
          : ""};
      stroke: ${props =>
        props.stroked
          ? props.theme.primary.borderColor
          : ""};
    }
  `;

  styledlayouts = [
    new this.Style({
      name: styles.defaultStyle,
      style: this.defaultStyle,
    }),
  ];

  constructor(props: Svg_v1Props) {
    super(props);
    this.state = {
      layout: () => <>prova</>,
      style: styled(this.Html)``,
    };
  }
}
