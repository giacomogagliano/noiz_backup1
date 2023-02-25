"use client";
import styled, { css } from "styled-components";

export const ContentWrapper = css`
  overflow: hidden;
  flex-wrap: wrap;
  filter: blur(0px);
`;
export const FullPageComponent = styled.div`
  #content-wrapper {
    ${ContentWrapper}
  }
`;
