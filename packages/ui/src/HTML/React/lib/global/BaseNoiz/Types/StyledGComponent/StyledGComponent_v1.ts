import {
  DefaultTheme,
  StyledComponent,
} from "styled-components";

export type StyledGComponent_v1<P> = StyledComponent<
  GComponent<P>,
  DefaultTheme,
  {},
  never
>;
