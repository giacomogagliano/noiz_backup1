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
  background-image: url(assets/hero-bg_1.jpg),
    linear-gradient(180deg, #e1583b, #4d2d47 40%, #20122d 74%);
  background-attachment: fixed;
  background-position: 50% 0%, 0px 0px;
  background-size: cover;
`;
export const TextSmall = css`
  font-size: 18px;
  line-height: 22px;
`;

export const TextSpan = css`
  background-image: linear-gradient(86deg, #f86339, #fdc945);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const TextHero = css`
  margin-bottom: 20px;
  font-weight: 400;
  opacity: 0.5;
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
