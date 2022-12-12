import { CSSProperties } from "react";
import { css } from "styled-components";

export const checkGridAreaWithCss__v1 = <
  T extends {
    css_: { gridArea?: CSSProperties["gridArea"] };
  }
>(
  props: T
) => {
  if (!props.css_.gridArea) return;
  return css`
    grid-area: ${props.css_.gridArea};
  `;
};
