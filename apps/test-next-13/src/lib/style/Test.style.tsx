"use client";

import styled, { css } from "styled-components";

export const transition400 = css`
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 10px;
  transition: 400ms;
`;

export const Test = styled.div`
  ${transition400}
`;

export const stateA = css`
  background-color: yellow;
`;

export const stateB = css`
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
`;
