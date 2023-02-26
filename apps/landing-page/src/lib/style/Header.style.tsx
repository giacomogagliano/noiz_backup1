"use client";
import styled, { css } from "styled-components";

export const Hero = css`
  padding-top: 0px;
  padding-bottom: 100px;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(180deg, #e1583b, #4d2d47 40%, #20122d 74%),
    url("assets/serverHero-1.jpeg");
  background-attachment: fixed;
  /* resize: initial; */
  /* background-position: 0px 0px, -145px 0px; */
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: overlay;
  @media screen and (min-width: 667px) {
    /* background-position-x: 0px 0px; */
  }
`;
export const TextSmall = css`
  font-size: 18px;
  line-height: 22px;
`;

export const TextSpan = css`
  background-image: linear-gradient(180deg, #20122d, #4d2d47 40%, #e1583b 74%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: invert(1);
`;
export const TextColorGreen = css`
  background-image: linear-gradient(180deg, #20122d, #4d2d47 40%, #e1583b 74%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: invert(1);
`;

export const TextHero = css`
  margin-bottom: 20px;
  font-weight: 400;
  opacity: 0.5;
  filter: invert(1);
`;

export const TextCenter = css`
  text-align: center;
`;

export const TextWhite = css`
  color: #fff;
  opacity: 1;
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
export const TextMuted = css`
  opacity: 0.5;
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
const Heading = css`
  margin-bottom: 40px;
  font-size: 90px;
  line-height: 96px;
  font-weight: 600;
  text-align: center;
  color: white;
`;
const HeadingHero = css`
  position: relative;
  max-width: 1000px;
  transform: translateY(40px);
  opacity: 0;
  margin-right: 1.6rem;
  margin-left: 1.6rem;
  font-size: 70px;
  line-height: 86px;
  @media screen and (max-width: 479px) {
    font-size: 50px;
    line-height: 54px;
  }
`;
export const HeroTextStyle = styled.div`
  ${Heading}
  ${HeadingHero}
`;

const buttonHero = css`
  color: black;
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
const linkBlock = css`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
type gradientButtonType = {
  opacity?: string;
  transform?: string;
  colo?: string;
};
const gradientButton = css<gradientButtonType>`
  transform: translateY(40px);
  opacity: 0;
  display: grid;
  padding: 10px 20px;
  justify-content: space-around;
  color: ${props => props.colo};
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  border-radius: 4px;
  background-image: linear-gradient(190deg, #8584ff, #5351fb);
  box-shadow: 0 1px 15px 0 #e2e3e4;
  opacity: ${props => props.opacity};
  transition: all cubic-bezier(0.46, 0.35, 0.59, 0.85) 500ms;
  transform: translateY(${props => props.transform});
  text-decoration: none;
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

export const GradientButtonStyle = styled.div<gradientButtonType>`
  ${gradientButton}
  ${linkBlock}
  ${buttonHero}

  /* #button-effect {
  } */

  #button-text {
    ${buttonText}
  }
`;
