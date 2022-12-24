import { createGlobalStyle } from "styled-components";

// TODO #142 @ariannatnl @giacomogagliano capire a cosa serve
export const NftMinterGlobalStyle = createGlobalStyle`
  body {
    font-family: 'Epilogue', sans-serif;
    background: ${props => props.theme.body};
    color: ${props => props.theme.textColor};
    border-color: ${props => props.theme.borderColor};
    transition: .3s ease;
    margin:0;
    box-sizing: border-box;
    width: 100%;
    position:fixed;
  }
  * {
    margin: 0;
    padding: 0;
  }
  #cazzo {
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  z-index: 10;
    &:after {
      content: " ";
      display: block;
      border-radius: 50%;
      width: 100vw;
      height: 100vh;
      margin: 8px;
      box-sizing: border-box;
      border: 32px solid #fff;
      border-color: #fff transparent #fff transparent;
      animation: lds-hourglass 1.2s infinite;
    }
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
        transform: rotate(900deg);
        animation-timing-function: cubic-bezier(
          0.215,
          0.61,
          0.355,
          1
        );
      }
      100% {
        transform: rotate(1800deg);
      }
    }
  }
  Button{
    background: ${props => props.theme.body};
    border-color: ${props => props.theme.borderColor};
    color: ${props => props.theme.textColor};
  }
  img{
    border-color: ${props => props.theme.borderColor};
  }
`;
