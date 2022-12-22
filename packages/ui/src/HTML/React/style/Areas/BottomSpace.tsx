import styled from "styled-components";
import { StyledDefault } from "../../lib/types/utility";
import { CssStyled, ZionCss } from "../../lib/utility";

type BottomSpaceStyle = {
  css?: StyledDefault<
    ZionCss<
      undefined,
      true,
      | "textAlign"
      | "zIndex"
      | "display"
      | "gridTemplateRows"
      | "placeItems"
      | "margin"
      | "gridArea"
    > &
      CssStyled
  >;
};

export const BottomSpace = styled.div<BottomSpaceStyle>`
  text-align: center;
  z-index: 2;
  display: grid;
  grid-template-rows: 2rem auto 5rem;
  place-items: center;
  margin: 0;
`;
