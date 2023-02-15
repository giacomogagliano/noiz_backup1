import React from "react";
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

const LinuxCommandComponent = styled.div`
  #linux-command-container {
    ${LinuxCommandContainer}
  }
  #linux-command {
    ${LinuxCommandCss}
  }
`;

export const LinuxCommand = () => (
  <LinuxCommandComponent>
    <div id="linux-command-container">
      <div id="linux-command">curl -L https://zion.sh | bash</div>
    </div>
  </LinuxCommandComponent>
);
