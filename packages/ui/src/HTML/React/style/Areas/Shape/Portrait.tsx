import styled, { css } from "styled-components";
import { Shape } from "../../../style/Areas/Shape";

const portraitSmall = css`
  grid-column: span 4;
  grid-row: span 7;
`;

const portraitMid = css`
  grid-column: span 8;
  grid-row: span 14;
`;

const portraitBig = css``;

export const Portrait = styled(Shape)`
  ${props => props.small && portraitSmall}
  ${props => props.mid && portraitMid}
  ${props => props.big && portraitBig}
`;
