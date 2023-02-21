"use client";
import { css } from "styled-components";

export const transition = css``;

export const textBigSubStateA = css`
  opacity: 1;
  transform: translateY(0);
  transition: transform 400ms ease-in-out, opacity 400ms ease-out;
`;
export const textBigSubStateB = css`
  opacity: 0;
  transform: translateY(40px);
  transition: transform 400ms ease-in-out, opacity 400ms ease-out;
`;
