import React from "react";
import styled, { css } from "styled-components";
import { FlattenSimpleInterpolation } from "styled-components";
import { Icon } from "../Icon";

enum layouts {
  main = "main",
}
enum styles {
  defaultStyle = "defaultStyle",
}
type layoutTypes = keyof typeof layouts;
type styleTypes = keyof typeof styles;

export interface Badge_v2Props
  extends BaseNoizProps<layoutTypes, styleTypes> {
  size?: "small" | "mid" | "big";
}
export class Badge_v2Props extends BaseNoizProps<
  layoutTypes,
  styleTypes
> {}

export interface Badge_v2State
  extends BaseNoizState<Badge_v2Props> {}
export class Badge_v2State extends BaseNoizState<Badge_v2Props> {}

export interface Badge_v2
  extends BaseNoiz<
    layoutTypes,
    styleTypes,
    Badge_v2Props,
    Badge_v2State
  > {
  width: number;
  height: number;
  ratio: number;
  defaultSize: FlattenSimpleInterpolation;
  smallSize: FlattenSimpleInterpolation;
  calculateSize(
    ratio: number,
    height: number
  ): FlattenSimpleInterpolation;
  checkSize(
    props?: Badge_v2Props
  ): FlattenSimpleInterpolation | undefined;
}

export class Badge_v2 extends BaseNoiz<
  layoutTypes,
  styleTypes,
  Badge_v2Props,
  Badge_v2State
> {
  static defaultProps: Badge_v2Props = {
    layout: layouts.main,
    style: styles.defaultStyle,
    size: "big",
  };

  width = 20;
  height = 6;
  ratio = this.width / this.height;
  smallSize = this.calculateSize(this.ratio, 3);
  midSize = this.calculateSize(this.ratio, 4);
  bigSize = this.calculateSize(this.ratio, 5);

  constructor(props: Badge_v2Props) {
    super(props);
    const state = new Badge_v2State();
    state.layout = () => <></>;
    state.style = styled(this.Html)``;
    this.state = state;
  }

  defaultSize = css`
    width: 100%;
    height: 100%;
  `;

  calculateSize(ratio: number, height: number) {
    const width = height * ratio;
    return css`
      width: ${width.toString()}rem;
      height: ${height.toString()}rem;
    `;
  }

  checkSize = (props?: Badge_v2Props) => {
    if (!props) return;
    if (!props.size) return this.defaultSize;
    if (props.size === "small") return this.smallSize;
    if (props.size === "mid") return this.midSize;
    if (props.size === "big") return this.bigSize;
  };

  main = (props: Badge_v2Props) => {
    return (
      <div className={props.className}>
        <div id="logo">
          <div id="badge-circle">
            <Icon logoZion></Icon>
          </div>
        </div>
        <div id="badge-infos">
          <p>ZION 2</p>
          <h3>SILVER</h3>
        </div>
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
    display: grid;
    ${props => this.checkSize(props)}
    grid-template-columns: 10% 23% 57% 10%;
    grid-template-rows: 10% 80% 10%;
    grid-template-areas:
      ". . . ."
      ". logo infos ."
      ". . . .";
    box-sizing: border-box;
    border: 1px solid ${props => props.theme.borderColor};
    background-color: #e5e5e5;
    border-radius: 4px;
    place-items: center;
    #logo {
      grid-area: logo;
      width: 100%;
      height: 100%;
      #badge-circle {
        border-radius: 100%;

        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        border: 2px solid
          ${props => props.theme.palette.grey};
        background-color: darkgrey;
        box-sizing: border-box;
      }
    }
    #badge-infos {
      grid-area: infos;
      text-align: center;
      color: ${props => props.theme.palette.grey};
      h3 {
        margin: 0;
      }
    }
  `;

  styledlayouts = [
    new this.Style({
      name: styles.defaultStyle,
      style: this.defaultStyle,
    }),
  ];
}
