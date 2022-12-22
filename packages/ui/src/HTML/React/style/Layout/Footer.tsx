import styled from "styled-components";
import { BasicLayoutProps } from "../../lib/global";
import { StyledDefault } from "../../lib/types/utility";

export type FooterProps = StyledDefault<BasicLayoutProps>;

export const Footer = styled.footer<FooterProps>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: "freccias Frecciad home cuore account";
  text-align: center;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: black;
  border-top: 1px solid white;
  color: white;
  place-items: center;
`;
