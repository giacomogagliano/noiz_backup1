import styled, { keyframes } from "styled-components";

export type LoadingWavesAreaProps = {
  display: boolean;
};

const LoadingAnimation = keyframes`
  0% {height:5px;transform:translateY(0px);background:#9b59b6;}
  25% {height:30px;transform:translateY(15px);background:#3498db;}
  50% {height:5px;transform:translateY(0px);background:#9b59b6;}
  100% {height:5px;transform:translateY(0px);background:#9b59b6;}
`;

export const LoadingWavesArea = styled.div<LoadingWavesAreaProps>`
  display: ${props => (props.display ? "block" : "none")};
  position: relative;
  right: 4.5px;
  place-self: center;
  span {
    display: block;
    bottom: 0px;
    width: 9px;
    height: 5px;
    background: #9b59b6;
    position: absolute;
    place-self: center;
    animation: ${LoadingAnimation} 1.5s infinite
      ease-in-out;
    animation-delay: 0.2s;
  }
  span:nth-child(2) {
    left: 11px;
    animation-delay: 0.3s;
  }
  span:nth-child(3) {
    left: 22px;
    animation-delay: 0.4s;
  }
  span:nth-child(4) {
    left: -11px;
    animation-delay: 0.1s;
  }
  span:nth-child(5) {
    left: -22px;
    animation-delay: 0s;
  }
`;
