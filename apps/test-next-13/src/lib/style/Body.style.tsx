"use client";
import styled, { css } from "styled-components";

const video = css`
  display: inline-block;
  vertical-align: baseline;
`;
const body = css`
  margin: 0;
  min-height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Inter", "Roboto",
    "Helvetica Neue", "Segoe UI", "Arial", "Noto Sans", sans-serif !important;
  color: #1d1d1f;
  font-size: 22px;
  line-height: 28px;
  @media screen and (max-width: 479px) {
    padding-bottom: 40px;
    font-size: 20px;
    line-height: 26px;
  }
`;

const h1 = css`
  font-size: 2em;
  margin: 0.67em 0;
  color: #fff;
`;
const h2 = css`
  font-size: 32px;
  line-height: 36px;
  margin-top: 20px;
`;
const p = css``;

const img = css`
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  border: 0;
`;

export const Body = styled.body`
  audio,
  canvas,
  progress,
  video {
    ${video}
  }
  * {
    box-sizing: border-box;
  }
  ${body}
  h1 {
    ${h1}
  }
  h2 {
    ${h2}
  }
  p {
  }

  img {
    ${img}
  }
`;
