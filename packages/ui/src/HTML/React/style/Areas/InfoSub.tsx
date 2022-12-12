import styled from "styled-components";

type InfoSubStyle = {
  css?: utility.ZionCss<
    "display" | "gridTemplateRows" | "width" | "zIndex",
    true
  >;
};

export const InfoSub = styled.div<InfoSubStyle>`
  display: grid;
  grid-template-rows: 30% 70%;
  width: 100%;
  height: 100%;
  z-index: 2;
  p {
    margin: 0;
  }
`;
