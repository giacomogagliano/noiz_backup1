"use client";

import { css } from "styled-components";
import { filled } from "./fillable";

export const circleGridBorder = css`
  border-radius: 100%;
  ${filled}
  display: grid;
  place-items: center;
  border: 2px solid ${props => props.theme.palette.grey};
  background-color: darkgrey;
  box-sizing: border-box;
`;
