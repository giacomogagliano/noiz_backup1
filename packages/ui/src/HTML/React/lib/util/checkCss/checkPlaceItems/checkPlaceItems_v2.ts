import { css, CSSProperties } from "styled-components";
import { checkPropsAndSetDefault } from "../checkPropsAndSetDefault";

export const checkPlaceItems_v2 = <
  T extends {
    css_: { placeItems?: CSSProperties["placeItems"] };
  }
>(
  props: T
) => {
  if (!props.css_) return;
  if (!props.css_.placeItems) return;
  let result;
  if (props)
    result = checkPropsAndSetDefault(
      props,
      "placeItems",
      css`
        place-items: ${props.css_.placeItems};
      `
    );
  return result;
};
