"use client";

import React from "react";
import styled, { css } from "styled-components";
import { Browser } from "./Browser";
import { LinuxCommand } from "./LinuxCommand";
import { Navbar } from "./Navbar";
import {
  TextCenter,
  TextHero,
  TextMuted,
  TextSmall,
  TextSpan,
  TextWhite,
} from "./StylesSheet";

const HeaderStickyContainer = styled.div<{ isNavbarVisible: boolean }>`
  margin: 0;
  background-color: red;
  /* position: fixed; */
  width: 100%;
  /* left: 0%;
  top: 0%;
  right: 0%;
  bottom: auto;
  z-index: 9999;
  margin-top: 0px;
  margin-bottom: 0px;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: hsla(0, 0%, 100%, 0.72);
  backdrop-filter: saturate(184%) blur(20px);
  transform-style: preserve-3d;
  transition: opacity 100ms ease-in-out, top 300ms ease-in-out;
  position: fixed; */
  /* top: ${props => (props.isNavbarVisible ? "0" : "-80px")}; */
`;
const Hero = css`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(assets/hero-bg_1.jpg);
  background-attachment: fixed;
  background-position: 50% 0%;
  background-size: cover;
`;
const HeaderCss = css`
  display: flex;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
  padding-right: 20px;
  padding-left: 20px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    padding-right: 0px;
    padding-left: 0px;
  }
  @media screen and (max-width: 479px) {
    padding-right: 0px;
    padding-left: 0px;
    align-items: center;
  }
`;
const Heading = css`
  margin-bottom: 40px;
  font-size: 90px;
  line-height: 96px;
  font-weight: 600;
  text-align: center;
`;
const HeadingHero = css<{ trigger1: string }>`
  position: relative;
  right: ${props => props.trigger1};
  transition: right 1s;
  max-width: 1000px;
  margin-right: 1.6rem;
  margin-left: 1.6rem;
  font-size: 70px;
  line-height: 86px;
  @media screen and (max-width: 479px) {
    font-size: 50px;
    line-height: 54px;
  }
`;

const gradientButton = css<{
  triggerButtonToTop: string;
  triggerButtonTransform: string;
}>`
  display: grid;
  padding: 10px 20px;
  justify-content: space-around;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  border-radius: 4px;
  background-image: linear-gradient(190deg, #8584ff, #5351fb);
  box-shadow: 0 1px 15px 0 #e2e3e4;
  opacity: ${props => props.triggerButtonToTop};
  transition: opacity 500ms, transform 500ms;
  transform: translateY(${props => props.triggerButtonTransform});
  text-decoration: none;
`;
const linkBlock = css`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
const buttonHero = css`
  margin-top: 40px;
  margin-bottom: 40px;
  padding-top: 12px;
  padding-bottom: 15px;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  border-radius: 8px;
  background-color: #fff;
  background-image: none;
  box-shadow: 0 1px 15px 0 rgb(0 0 0 / 68%);
  @media screen and (max-width: 479px) {
    display: flex;
    margin-top: 10px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 991px) {
    display: block;
  }
`;
const buttonText = css`
  display: inline-block;
  padding-right: 60px;
  color: #1d1d1f;
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-decoration: none;
  text-transform: uppercase;
  @media screen and (max-width: 479px) {
    padding-right: 0px;
    font-size: 14px;
    line-height: 22px;
  }
`;

const HeaderComponent = styled.div<{
  trigger1: string;
  isNavbarVisible: boolean;
  triggerButtonToTop: string;
  triggerButtonTransform: string;
}>`
  #header {
    ${HeaderCss}
  }
  #header-sticky-container {
    ${HeaderStickyContainer}
  }
  #hero {
    ${Hero}
  }
  #trigger-1 {
    ${Heading}
    ${HeadingHero}
  }
  #button-effect {
    ${gradientButton}
    ${linkBlock}
    ${buttonHero}
  }
  #paragraph-header {
    ${TextWhite}
    ${TextCenter}
    ${TextHero}
  }
  #button-text {
    ${buttonText}
  }
  #text-span {
    ${TextSpan}
  }
  #header-last-line {
    ${TextCenter}
    ${TextWhite}
    ${TextHero}
    ${TextMuted}
    ${TextSmall}
  }
`;

export const Header = ({
  trigger1,
  isNavbarVisible,
  triggerButtonToTop,
  triggerButtonTransform,
}) => (
  <>
    {/* <Navbar></Navbar> */}
    {/* <HeaderStickyContainer isNavbarVisible={isNavbarVisible}>
      ciao <br />
      ciao
    </HeaderStickyContainer> */}
    <div id="header">
      <Navbar></Navbar>
    </div>
    <HeaderComponent
      trigger1={trigger1}
      isNavbarVisible={isNavbarVisible}
      triggerButtonToTop={triggerButtonToTop}
      triggerButtonTransform={triggerButtonTransform}
    >
      <div id="hero">
        <div>
          <Browser></Browser>
        </div>
        <h1 id="trigger-1">
          Goodbye, big tech.
          <br />
          Welcome, <span id="text-span">your data at your own home.</span>
          <span id="text-span"></span>
          <span id="text-span"></span>
        </h1>
        <p id="paragraph-header">
          Zion is an OS for running a personal mini computer in your home.
          Self-host open source apps Bitcoin node, and more.
          <br></br>
          <br></br>
          Get the convenience of cloud, without giving up your data.
        </p>
        <a id="button-effect">
          <div id="button-text">INSTALL ON MINI PC</div>
          <img src="assets/long-arrow.svg" loading="lazy" alt=""></img>
        </a>
        <p id="header-last-line">Or install on any Ubuntu or Debian system:</p>
        <LinuxCommand></LinuxCommand>
      </div>
    </HeaderComponent>
  </>
);
