"use client";
import styled, { css } from "styled-components";

const LinuxCommandContainer = css`
  padding: 16px 20px;
  border-radius: 8px;
  background-color: hsla(0, 0%, 100%, 0.2);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  margin-bottom: 20px;
`;
const LinuxCommandCss = css`
  font-family: Inconsolata, monospace;
  color: #fff;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  @media screen and (max-width: 479px) {
    font-size: 16px;
  }
`;

export const LinuxCommandComponent = styled.div`
  #linux-command-container {
    ${LinuxCommandContainer}
  }
  #linux-command {
    ${LinuxCommandCss}
  }
`;
