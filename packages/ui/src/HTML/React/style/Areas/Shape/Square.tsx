import styled, { css } from "styled-components";
import { Shape } from "../../../style/Areas/Shape";

const SquareSmall = css`
  grid-column: span 4;
  grid-row: span 4;
`;

const SquareMid = css`
  grid-column: span 8;
  grid-row: span 8;
`;

const SquareBig = css``;

export const Square = styled(Shape)`
  ${props => props.small && SquareSmall}
  ${props => props.mid && SquareMid}
  ${props => props.big && SquareBig}
`;
