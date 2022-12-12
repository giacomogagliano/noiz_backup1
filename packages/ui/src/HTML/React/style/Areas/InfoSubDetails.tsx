import styled from "styled-components";

type InfoSubDetailsStyle = {
  css?: utility.ZionCss<
    "display" | "height" | "gridTemplateColumns",
    true
  >;
};

export const InfoSubDetails = styled.div<InfoSubDetailsStyle>`
  display: grid;
  height: 100%;
  grid-template-columns: 30% 70%;
`;
