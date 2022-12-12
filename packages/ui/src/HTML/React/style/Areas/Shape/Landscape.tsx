import styled, { css } from "styled-components";
import { Shape } from "../Shape";

const landscapeSmall = css`
  grid-column: span 4;
  grid-row: span 2;
`;

const landscapeMid = css`
  grid-column: span 8;
  grid-row: span 5;
`;

const landscapeBig = css``;

export const Landscape = styled(Shape)`
  ${props => props.small && landscapeSmall}
  ${props => props.mid && landscapeMid}
  ${props => props.big && landscapeBig}
`;
