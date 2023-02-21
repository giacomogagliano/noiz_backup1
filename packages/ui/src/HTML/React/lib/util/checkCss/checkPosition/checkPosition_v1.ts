import { CSSProperties } from "react";
import {
  css,
  FlattenSimpleInterpolation,
} from "styled-components";

export interface checkPosition_v1 {
  <
    T extends {
      css_?: { position?: CSSProperties["position"] };
    }
  >(
    props: T
  ): FlattenSimpleInterpolation | undefined;
}

export const checkPosition_v1 = <
  T extends {
    css_?: { position?: CSSProperties["position"] };
  }
>(
  props: T
) => {
  if (!props.css_) return;
  if (!props.css_.position) return;
  return css`
    z-index: ${props.css_.position};
  `;
};
