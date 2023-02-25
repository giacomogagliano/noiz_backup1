import { CSSProperties } from "react";
import {
  css,
  FlattenSimpleInterpolation,
} from "styled-components";

export interface checkBackgroundColor_v1 {
  <
    T extends {
      css_?: {
        backgroundColor?: CSSProperties["backgroundColor"];
      };
    }
  >(
    props: T
  ): FlattenSimpleInterpolation;
}

export const checkBackgroundColor_v1 = <
  T extends {
    css_?: {
      backgroundColor?: CSSProperties["backgroundColor"];
    };
  }
>(
  props: T
) => {
  return css`
    background-color: ${props.css_?.backgroundColor};
  `;
};
