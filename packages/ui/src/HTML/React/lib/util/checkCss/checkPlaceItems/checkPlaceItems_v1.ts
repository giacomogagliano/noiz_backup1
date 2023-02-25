import { CSSProperties } from "react";
import {
  css,
  FlattenSimpleInterpolation,
} from "styled-components";

export interface checkPlaceItems_v1 {
  <
    T extends {
      css_?: { placeItems?: CSSProperties["placeItems"] };
    }
  >(
    props: T
  ): FlattenSimpleInterpolation | undefined;
}

export const checkPlaceItems_v1 = <
  T extends {
    css_?: { placeItems?: CSSProperties["placeItems"] };
  }
>(
  props: T
) => {
  if (!props.css_) return;
  if (!props.css_.placeItems) return;
  return css`
    place-items: ${props.css_.placeItems};
  `;
};
