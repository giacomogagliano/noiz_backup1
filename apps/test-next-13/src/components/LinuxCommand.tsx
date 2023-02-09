import React from "react";
import styled from "styled-components";

const LinuxCommandComponent = styled.div`
  .linux-command-container {
    padding: 16px 20px;
    border-radius: 8px;
    background-color: hsla(0, 0%, 100%, 0.2);

    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
  }
  .linux-command {
    font-family: Inconsolata, monospace;
    color: #fff;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    @media screen and (max-width: 479px) {
      font-size: 16px;
    }
  }
`;

export const LinuxCommand = () => (
  <LinuxCommandComponent>
    <div className="linux-command-container">
      <div className="linux-command">curl -L https://umbrel.sh | bash</div>
    </div>
  </LinuxCommandComponent>
);
