import React, { HTMLAttributeAnchorTarget } from "react";
import styled, { css } from "styled-components";

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

const HeaderLogo = css`
  height: 30px;
  margin-top: 18px;
  margin-bottom: 18px;
`;

const HeaderStickyLink = css`
  color: #1d1d1f;
`;

const DXsNone = css`
  @media screen and (max-width: 479px) {
    display: none;
  }
`;

const HeaderStickyLinkP = css`
  background-color: #5351fb;
  color: #fff;
`;

const HeaderLinkPrimary = css`
  padding: 7px 20px;
  border-radius: 16px;
  background-color: #fff;
  color: #1d1d1f;
  @media screen and (max-width: 479px) {
    padding: 5px 16px;
  }
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

const HtmlHeader2 = css`
  a {
    cursor: pointer;
  }
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const LinkNav = css`
  ${HeaderLink}
  ${HeaderStickyLink}
`;

const NavbarComponent = styled.div`
  #div-block-18 {
    ${DivBlock18}
  }
  #div-block-19 {
    ${DivBlock19}
  }
  a {
    background-color: transparent;
    text-decoration: underline;
  }
  #header-logo {
    ${HeaderLogo}
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
  #install-now {
    ${HeaderLink}
    ${HeaderLinkPrimary}
    ${HeaderStickyLinkP}
  }
  #github-stars {
    ${GitHubStars}
  }
`;

export const Navbar = () => (
  <NavbarComponent>
    <div id="div-block-18">
      <img
        src="assets/gotek-write.svg"
        loading="lazy"
        alt=""
        id="header-logo"
      />
      <div id="div-block-19">
        <a href="" id="link-nav-hidden">
          <div>Apple Store</div>
        </a>
        <a
          href="https://community.getumbrel.com/"
          target="_blank"
          id="link-nav-hidden"
        >
          <div>Community</div>
        </a>
        <a href="" target="_blank" id="link-nav">
          <div>We are Hiring!</div>
        </a>
        <a href="#start" id="install-now">
          <div>Install Now</div>
        </a>
        <div id="github-link-nav">
          <a href="https://github.com/getumbrel/umbrel" target="_blank">
            <img
              id="github-stars"
              alt="Star Umbrel on GitHub"
              src="https://img.shields.io/github/stars/getumbrel/umbrel?label=Star&style=social"
            ></img>
          </a>
        </div>
      </div>
    </div>
  </NavbarComponent>
);
