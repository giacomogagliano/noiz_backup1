import styled, { css } from "styled-components";
import { Shape } from "../../../style/Areas/Shape";

const resourceSmall = css`
  grid-column: span 4;
  grid-row: span 7;
`;

const resourceMid = css`
  grid-column: span 8;
  grid-row: span 14;
`;

const resourceBig = css``;

export const Resource = styled(Shape)`
  ${props => props.small && resourceSmall}
  ${props => props.mid && resourceMid}
  ${props => props.big && resourceBig}
`;
