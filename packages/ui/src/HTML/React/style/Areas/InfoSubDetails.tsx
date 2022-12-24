import styled from "styled-components";
import { ZionCss } from "../../lib/utility";

type InfoSubDetailsStyle = {
  css?: ZionCss<
    // FIX ts error
    // @ts-ignore
    "display" | "height" | "gridTemplateColumns",
    true
  >;
};

export const InfoSubDetails = styled.div<InfoSubDetailsStyle>`
  display: grid;
  height: 100%;
  grid-template-columns: 30% 70%;
`;
