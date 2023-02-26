import {
  css,
  CSSProperties,
  FlattenSimpleInterpolation,
} from "styled-components";
import { checkPropsAndSetDefault } from "../checkPropsAndSetDefault";

export interface checkPlaceContent_v2 {
  <
    T extends {
      css_: {
        placeContent?: CSSProperties["placeContent"];
      };
    }
  >(
    props: T
  ): FlattenSimpleInterpolation | undefined;
}

export const checkPlaceContent_v2 = <
  T extends {
    css_: { placeContent?: CSSProperties["placeContent"] };
  }
>(
  props: T
) => {
  if (!props.css_) return;
  if (!props.css_.placeContent) return;
  let result;
  // const result1 = css`
  //   place-content: ${props.css_.placeContent};
  // `;

  if (props)
    result = checkPropsAndSetDefault(
      props,
      "placeItems",
      css`
        place-content: ${props.css_.placeContent};
      `
    );
  return result;
};
