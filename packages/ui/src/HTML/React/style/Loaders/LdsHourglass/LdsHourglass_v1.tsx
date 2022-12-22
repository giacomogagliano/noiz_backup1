import styled from "styled-components";
import { BooleanDisplay } from "../../../lib/global";

export const LdsHourglass_v1 = styled.div<BooleanDisplay>`
  display: ${props => (props.display ? "block" : "none")};
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: 32px solid currentColor;
  border-color: currentColor #ffee00 currentColor #ffee00;
  animation: lds-hourglass 1.2s infinite;

  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(
        0.55,
        0.055,
        0.675,
        0.19
      );
    }
    50% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(
        0.215,
        0.61,
        0.355,
        1
      );
    }
    100% {
      transform: rotate(540deg);
    }
  }
`;
