import { CSSProperties } from "react";
import {
  css,
  FlattenSimpleInterpolation,
} from "styled-components";

export interface checkGridAreaNoCss_v1 {
  <T extends { gridArea?: CSSProperties["gridArea"] }>(
    props: T
  ): FlattenSimpleInterpolation | undefined;
}

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
