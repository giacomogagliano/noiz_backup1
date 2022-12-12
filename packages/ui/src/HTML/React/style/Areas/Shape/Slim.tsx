import styled, { css } from "styled-components";
import { Shape } from "../../../style/Areas/Shape";

const SlimSmall = css`
  grid-column: span 4;
  grid-row: span 1;
`;

const SlimMid = css`
  grid-column: span 8;
  grid-row: span 2;
`;

const SlimBig = css``;

export const Slim = styled(Shape)`
  ${props => props.small && SlimSmall}
  ${props => props.mid && SlimMid}
  ${props => props.big && SlimBig}
`;
