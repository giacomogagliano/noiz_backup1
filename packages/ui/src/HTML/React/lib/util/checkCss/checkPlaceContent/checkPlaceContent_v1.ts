import { CSSProperties } from "react";
import { css } from "styled-components";

export const checkPlaceContent_v1 = <
  T extends {
    css_?: {
      placeContent?: CSSProperties["placeContent"];
    };
  }
>(
  props: T
) => {
  if (!props.css_) return;
  if (!props.css_.placeContent) return;
  return css`
    place-content: ${props.css_.placeContent};
  `;
};
