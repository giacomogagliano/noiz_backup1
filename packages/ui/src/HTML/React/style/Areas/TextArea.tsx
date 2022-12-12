import styled, { css } from "styled-components";
import { checkCss } from "../../lib/util/checkCss";

export type TextAreaStyle = StyledDefault<
  utility.GCssStyled<
    | "display"
    | "margin"
    | "placeContent"
    | "placeItems"
    | "gridArea"
  > & {
    gridArea?: string;
    filled?: boolean;
    smaller?: boolean;
  }
>;

// export const TextArea = styled.div<TextAreaStyle>`
//   background-color: grey;
//   grid-area: ${props => props.gridArea};
// `;

const filledTextArea = css`
  height: 100%;
`;

const smallerTextArea = css`
  height: 60%;
`;

export const TextArea_v1 = styled.div<TextAreaStyle>`
  width: 100%;
  background-color: ${props => props.theme.palette.grey};
  display: ${props =>
    props.css_
      ? props.css_.display
        ? props.css_.display
        : "inline-flex"
      : "inline-flex"};
  ${props => checkCss("placeContent", props)}
  ${props => checkCss("placeItems", props)}
  ${props => checkCss("gridArea", props)}
  p {
    margin: 0 0.3rem 0 0;
  }
`;

export const TextArea = styled.div<TextAreaStyle>`
  width: 100%;
  height: 60%;
  display: ${props =>
    props.css_
      ? props.css_.display
        ? props.css_.display
        : "inline-flex"
      : "inline-flex"};
  background-color: ${props => props.theme.palette.grey};
  ${props => props.smaller && smallerTextArea}
  ${props => props.filled && filledTextArea}
  ${props => checkCss("placeContent", props)}
  ${props => checkCss("placeItems", props)}
  ${props => checkCss("gridArea", props)}
  p {
    margin: 0 0.3rem 0 0;
  }
`;
