import styled from "styled-components";

type BottomSpaceStyle = {
  css?: StyledDefault<
    utility.ZionCss<
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
      utility.CssStyled
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
