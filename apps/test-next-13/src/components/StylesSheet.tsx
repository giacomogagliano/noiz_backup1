"use client";

import styled, { css } from "styled-components";

export const SectionHero = css`
  padding-top: 0px;
  padding-bottom: 100px;
  background-image: url(assets/hero-bg_1.jpg),
    linear-gradient(180deg, #e1583b, #4d2d47 40%, #20122d 74%);
  background-position: 50% 0%, 0px 0px;
`;

export const TextSpan = css`
  background-image: linear-gradient(86deg, #f86339, #fdc945);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const TextSpan2 = css`
  box-decoration-break: clone;
`;
export const Paragraph = css`
  color: black;
  text-align: center;
  @media screen and (max-width: 479px) {
    font-size: 20px;
    line-height: 26px;
  }
`;
export const ParagraphTextLeft = css`
  text-align: left;
  position: relative;
  z-index: 1;
  margin-bottom: 10px;
  text-align: left;
`;
export const TextWhite = css`
  color: #fff;
  opacity: 1;
`;
export const TextSmall = css`
  font-size: 18px;
  line-height: 22px;
`;
export const TextMuted = css`
  opacity: 0.5;
`;
export const TextHero = css`
  margin-bottom: 20px;
  font-weight: 400;
  opacity: 0.5;
`;
export const TextCenter = css`
  text-align: center;
`;

export const Image18 = css`
  display: block;
  margin-top: 60px;
  margin-right: auto;
  margin-left: auto;
`;

export const Body = styled.body`
  ////////GLOBAL////////////////////////////////////////////////
  audio,
  canvas,
  progress,
  video {
    display: inline-block;
    vertical-align: baseline;
  }
  * {
    box-sizing: border-box;
  }
  margin: 0;
  min-height: 100%;
  background-color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Inter", "Roboto",
    "Helvetica Neue", "Segoe UI", "Arial", "Noto Sans", sans-serif !important;
  color: #1d1d1f;
  font-size: 22px;
  line-height: 28px;
  @media screen and (max-width: 479px) {
    padding-bottom: 40px;
    font-size: 20px;
    line-height: 26px;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
    color: #fff;
  }
  h2 {
    font-size: 32px;
    line-height: 36px;
    margin-top: 20px;
  }
  p {
    /* transform: translate3d(0px, 14px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    opacity: 1;
    transform-style: preserve-3d; */
  }

  img {
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    border: 0;
  }
`;

export const FromTop = styled.div<{ top?: string; transition?: string }>`
  position: fixed;
  top: ${props => props.top};
  transition: top 0.5s;
  z-index: 1;
  width: 100%;
`;

export const ContentWrapper = css`
  overflow: hidden;
  flex-wrap: wrap;
  filter: blur(0px);
`;
export const Section = css`
  position: relative;
  overflow: hidden;
  margin-bottom: 0px;
  padding-top: 100px;
  padding-bottom: 100px;
  @media screen and (max-width: 479px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;
export const Dark = css`
  background-color: #f8f9fc;
`;
export const Container = css`
  position: relative;
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  max-width: 940px;
  @media screen and (max-width: 479px) {
    max-width: none;
  }
  @media screen and (max-width: 991px) {
    max-width: 728px;
  }
`;

export const BigHeading = css`
  margin-bottom: 40px;
  font-size: 70px;
  line-height: 86px;
  font-weight: 600;
  text-align: center;
  @media screen and (max-width: 479px) {
    font-size: 48px;
    line-height: 48px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 70px;
    line-height: 70px;
  }
`;
export const WlayoutGrid = css`
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
  grid-row-gap: 16px;
  grid-column-gap: 16px;
  @media screen and (max-width: 767px) {
    display: block;
  }
`;

export const SubHeading = css`
  margin-bottom: 70px;
  color: #9f9fa5;
  font-size: 40px;
  line-height: 50px;
  @media screen and (max-width: 479px) {
    margin-bottom: 70px;
    font-size: 30px;
    line-height: 36px;
  }
`;

export const Grid5 = css`
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  grid-template-areas: "Area Area-2";
  -ms-grid-rows: auto;
  grid-template-rows: auto;
  @media screen and (max-width: 991px) {
    justify-items: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    grid-template-areas:
      "Area Area"
      "Area-3 Area-3";
    -ms-grid-rows: auto auto;
    grid-template-rows: auto auto;
  }
`;

export const FullPageComponent = styled.div`
  #content-wrapper {
    ${ContentWrapper}
  }
`;

///////////////////
///////////////////
///////////////////
///////////////////CARD
///////////////////
///////////////////
///////////////////

export const FeatureHeader = css`
  display: flex;
  margin-bottom: 0px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 991px) {
    top: -80px;
  }
`;
export const FeatureHeading = css`
  color: #0082c9;
  display: block;
  margin-top: 0px;
  margin-right: 20px;
  margin-bottom: 40px;
  font-size: 24px;
  line-height: 29px;
  font-weight: 600;
  @media screen and (max-width: 479px) {
    margin-right: 30px;
    margin-bottom: 30px;
    font-size: 20px;
    line-height: 26px;
  }
`;
export const FeatureIcon = css`
  width: 100%;
  max-width: 120px;
  border-radius: 22%;
  box-shadow: 3px 3px 20px 0 rgb(0 0 0 / 20%);
  transform: translate(0px, -70%);
  box-shadow: 3px 3px 20px 0 rgb(46 120 230 / 47%);
  @media screen and (max-width: 479px) {
    max-width: 80px;
    margin-right: -10px;
    margin-left: -20px;
    transform: translate(0px, -80%);
  }
`;
export const FeatureContent = css`
  display: flex;
  overflow: hidden;
  margin-right: -51px;
  margin-bottom: -1px;
  margin-left: -50px;
  padding-left: 50px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  flex: 1;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  @media screen and (max-width: 479px) {
    margin-right: -31px;
    margin-bottom: -43px;
    margin-left: -30px;
    padding-left: 30px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }
`;
export const Column12 = css`
  @media screen and (max-width: 479px) {
    padding-right: 0px;
    padding-left: 0px;
  }
`;
export const WColumn = css`
  position: relative;
  float: left;
  width: 100%;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (max-width: 767px) {
    width: 100%;
    left: auto;
    right: auto;
  }
  @media screen and (max-width: 479px) {
    width: 100%;
  }
`;
export const WColumn10 = css`
  width: 83.33333333%;
`;
export const WColumn2 = css`
  width: 16.66666667%;
`;
export const FeatureImage = css`
  position: static;
  width: 100%;
  max-width: 500px;
  margin-top: 40px;
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 6px;
  box-shadow: 1px 1px 30px 0 rgb(0 0 0 / 15%);
  @media screen and (max-width: 479px) {
    margin-top: 40px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;
export const StyledCard = styled.div`
  display: flex;
  overflow: visible;
  padding-top: 50px;
  padding-right: 50px;
  padding-left: 50px;
  flex-direction: column;
  border-style: solid;
  border-width: 1px;
  border-color: #e9ebee;
  border-radius: 40px;
  background-color: #fff;
  box-shadow: 1px 1px 60px 0 rgb(0 0 0 / 15%);
  @media screen and (max-width: 479px) {
    margin-bottom: 0px;
    padding: 40px 30px;
    border-radius: 30px;
  }
  @media screen and (max-width: 991px) {
    max-width: 600px;
  }
  #container {
  }
  #feature-header {
    ${FeatureHeader}
  }
  #feature-heading {
    ${FeatureHeading}
  }
  #feature-icon {
    ${FeatureIcon}
  }
  #feature-content {
    ${FeatureContent}
  }
  .column-12 {
    ${Column12}
  }
  .w-col {
    ${WColumn}
  }
  .w-col-10 {
    ${WColumn10}
  }
  #text-area-card {
    ${Column12}
    ${WColumn}
    ${WColumn10}
  }
  #space-area-card {
    ${WColumn}
    ${WColumn2}
  }
  .w-col-2 {
    ${WColumn2}
  }
  #feature-image {
    ${FeatureImage}
  }
  #paragraph-card {
    ${Paragraph}
    ${ParagraphTextLeft}
  }
`;

const browser = css`
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  width: 95vw;
  max-width: 1200px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  border-style: solid;
  border-width: 2px;
  border-color: hsla(0, 0%, 100%, 0.25);
  border-radius: 7px;
  outline-color: hsla(0, 0%, 100%, 0.25);
  outline-offset: 0px;
  outline-style: none;
  outline-width: 2px;
`;
const floating = css`
  animation: floating 5s infinite ease-in-out;

  @keyframes floating {
    0%,
    100% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 10px);
    }
  }
`;
const browsern = css`
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  height: 52px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: hsla(0, 0%, 100%, 0.3);
  @media screen and (max-width: 479px) {
    height: 40px;
  }
`;
const browsernavleft = css`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100px;
  padding-left: 20px;
  grid-column-gap: 9px;
  grid-row-gap: 9px;
  @media screen and (max-width: 479px) {
    padding-left: 10px;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
  }
`;
const systemCircleButton = css`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: hsla(0, 0%, 100%, 0.47);
  @media screen and (max-width: 479px) {
    width: 10px;
    height: 10px px;
  }
`;
const scb = css`
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
`;
const browsernt = css`
  transform: translate3d(0px, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
`;
const browserNavCenter = css`
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  width: 500px;
  height: 30px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 479px) {
    width: 320px;
    height: 24px;
  }
`;
const navbarRight = css`
  width: 100px;
  height: 20px;
`;

const browserContent = css`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 15px;
  padding-top: 25px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  @media screen and (max-width: 479px) {
    margin-bottom: 5px;
    padding-top: 10px;
  }
`;
const heroimage = css`
  width: 90vw;
  height: 60.82vw;
  max-height: 742px;
  max-width: 1100px;
  margin-right: auto;
  margin-bottom: 60px;
  margin-left: auto;
  background-image: url(../images/Group-1600.png);
  background-position: 50% 0%;
  background-size: cover;
`;
const herofloating = css`
  @media screen and (max-width: 479px) {
    margin-bottom: 20px;
  }
`;
const dnone = css`
  display: none;
`;
const browsernavbar = css`
  display: flex;
  height: 52px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: hsla(0, 0%, 100%, 0.3);
  @media screen and (max-width: 479px) {
    height: 40px;
  }
`;

export const BrowserComponent = styled.div`
  #browser {
    ${browser}
    ${floating}
  }
  #browsern {
    ${browsern}
    ${browsernavbar}
  }

  #browser-navbar-left {
    ${browsernavleft}
    #scb {
      ${systemCircleButton}
      ${scb}
    }
  }
  #browsercenter {
    ${browsernt}
    ${browserNavCenter}
  }
  #browser-navbar-right {
    ${navbarRight}
  }
  #browser-content {
    ${browserContent}
  }
  #hero-image-flo-dnon {
    ${heroimage}
    ${herofloating}
    ${dnone}
  }
`;
const IconContainer = css`
  width: 70px;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const AutoplayVideo = css`
  display: block;
  margin: auto;
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 10px;
  filter: brightness(0.9);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
`;

const AutoplayVideoContainer = css`
  position: relative;
  display: block;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const VideoBoxComponent = styled.div`
  display: grid;
  place-items: center;

  video {
    ${AutoplayVideo}
  }
  img {
    ${IconContainer}
  }
  a {
    ${AutoplayVideoContainer}
  }
`;

const HeaderStickyContainer = styled.div`
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
`;
/* top: ${props => (props.isNavbarVisible ? "0" : "-80px")}; */
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

type gradientButtonType = {
  triggerButtonToTop: string;
  triggerButtonTransform: string;
};
const gradientButton = css<gradientButtonType>`
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
type HeaderComponentType = {
  trigger1: string;
  triggerButtonToTop: string;
  triggerButtonTransform: string;
};
export const HeaderComponent = styled.div<HeaderComponentType>`
  #header {
    ${HeaderCss}
  }
  #hero {
    ${Hero}
  }
  #paragraph-header {
    ${TextWhite}
    ${TextCenter}
    ${TextHero}
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

// const HeroText = () => (
//   <h1 id="trigger-1">
//     Goodbye, big tech.
//     <br />
//     Welcome, <span id="text-span">your data at your own home.</span>
//     <span id="text-span"></span>
//     <span id="text-span"></span>
//   </h1>
// );

const LinuxCommandContainer = css`
  padding: 16px 20px;
  border-radius: 8px;
  background-color: hsla(0, 0%, 100%, 0.2);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  margin-bottom: 20px;
`;
const LinuxCommandCss = css`
  font-family: Inconsolata, monospace;
  color: #fff;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  @media screen and (max-width: 479px) {
    font-size: 16px;
  }
`;

export const LinuxCommandComponent = styled.div`
  #linux-command-container {
    ${LinuxCommandContainer}
  }
  #linux-command {
    ${LinuxCommandCss}
  }
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

export const NavbarComponent = styled.div<CssProps>`
  background-color: ${props => (props.bgcolor ? props.bgcolor : "none")};
  width: 100%;
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
  #action-btn {
    ${HeaderLink}
    ${HeaderLinkPrimary}
  }
  #github-stars {
    ${GitHubStars}
  }
`;
export type CssProps = {
  bgcolor?: string;
  buttonBgColor?: string;
  color?: string;
};
