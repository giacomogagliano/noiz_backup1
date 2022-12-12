import { CSSProperties } from "react";
import { css } from "styled-components";

export const checkGridAreaNoCss_v1 = <
  T extends { gridArea?: CSSProperties["gridArea"] }
>(
  props: T
) => {
  if (!props.gridArea) return;
  return css`
    grid-area: ${props.gridArea};
  `;
};
