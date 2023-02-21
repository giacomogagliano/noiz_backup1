import styled, { DefaultTheme } from "styled-components";
import { StyledComponent as SC } from "styled-components";

export interface IA {}
interface Props {}

export const A: A = styled.a<Props>``;

export type A = SC<"a", DefaultTheme, Props, never>;
