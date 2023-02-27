"use client";
import styled, { css } from "styled-components";
import { classe } from "@zionstate/ui/classes";
export const LogodiZion = classe.Icon;
type CssProps = {
  bgcolor?: string;
  buttonBgColor?: string;
  color?: string;
  stickyColor?: string;
};
const HeaderLinkPrimary = css<CssProps>`
  padding: 7px 20px;
  border-radius: 16px;
  background-color: ${props =>
    props.buttonBgColor ? props.buttonBgColor : "#fff"};
  color: ${props => (props.color ? props.color : "#1d1d1f")};
  @media screen and (max-width: 479px) {
    padding: 5px 16px;
  }
`;
const HeaderStickyLink = css<CssProps>`
  color: ${props => (props.stickyColor ? props.stickyColor : "#fff")};
`;
const HeaderLink = css`
  position: relative;
  margin-right: 9px;
  margin-left: 9px;
  text-decoration: none;
  margin-top: 0px;
  color: #fff;
  font-size: 17px;
  line-height: 20px;
  font-weight: 400;
  @media screen and (max-width: 479px) {
    font-size: 14px;
  }
  @media screen and (max-width: 479px) {
    margin-right: 0px;
    margin-left: 14px;
  }
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;
const DXsNone = css`
  @media screen and (max-width: 479px) {
    display: none;
  }
`;
const LinkNav = css`
  ${HeaderLink}
  ${HeaderStickyLink}
`;
const HtmlHeader2 = css`
  a {
    cursor: pointer;
  }
  @media screen and (max-width: 640px) {
    display: none;
  }
`;
const HeaderLogo = css`
  height: auto;
  margin-top: auto;
  margin-bottom: auto;
`;
const DivBlock18 = css`
  display: flex;
  width: 100%;
  max-width: 990px;
  justify-content: space-between;
`;
const GitHubStars = css`
  width: 84px;
  height: auto;
`;
const DivBlock19 = css`
  display: flex;
  align-items: center;
`;
export const NavbarComponent = styled.div<CssProps>`
  background-color: ${props => (props.bgcolor ? props.bgcolor : "none")};
  width: 100%;
  #div-block-18 {
    ${DivBlock18}
  }
  #div-block-19 {
    ${DivBlock19}
  }
  #header-logo {
    ${HeaderLogo}
    svg {
      width: 50px;
      height: 50px;
      fill: white;
    }
  }
  a {
    background-color: transparent;
    text-decoration: underline;
  }
  #github-link-nav {
    ${HtmlHeader2}
  }
  #link-nav {
    ${LinkNav}
  }
  #link-nav-hidden {
    ${LinkNav}
    ${DXsNone}
  }
  #action-btn {
    ${HeaderLink}
    ${HeaderLinkPrimary}
  }
  #github-stars {
    ${GitHubStars}
  }
`;
