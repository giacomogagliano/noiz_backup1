import { css } from "styled-components";
import { checkPropsAndSetDefault } from "../checkPropsAndSetDefault";

// function checkGridTemplateColumns<
//   T extends {
//     css_: { gridTemplateColumns?: string; gridTemplateRows?: string };
//   }
// >(props: T) {
//   if (!props.css_.gridTemplateColumns) return;
//   return css`
//     grid-template-columns: ${props.css_.gridTemplateColumns};
//   `;
// }

export function checkGridTemplate_v1<
  T extends {
    css_: {
      gridTemplateColumns?: string;
      gridTemplateRows?: string;
    };
  }
>(type: "columns" | "rows", props: T) {
  let result;
  switch (type) {
    case "columns":
      result = checkPropsAndSetDefault(
        props,
        "gridTemplateColumns",
        css`
          grid-template-columns: ${props.css_
            .gridTemplateColumns};
        `
      );
      break;

    case "rows":
      result = checkPropsAndSetDefault(
        props,
        "gridTemplateRows",
        css``
      );
      break;

    default:
      break;
  }
  return result;
}
