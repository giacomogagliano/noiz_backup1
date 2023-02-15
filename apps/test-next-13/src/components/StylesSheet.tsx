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
    transform: translate3d(0px, 14px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    opacity: 1;
    transform-style: preserve-3d;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    border: 0;
  }

  //////////
  //////////
  //////////
  //////////
  //////////
  //////////
  //////////
  //////////
  //////////
  //////////
  //////////
  //////////
  //////////
  /* .section.hero {
  padding-top: 0px;
  padding-bottom: 100px;
  background-image: url(assets/hero-bg_1.jpg);
  background-image: url(assets/hero-bg_1.jpg),
    linear-gradient(180deg, #e1583b, #4d2d47 40%, #20122d 74%);
  background-position: 50% 0%, 0px 0px;
} */

  /* .text-span {
  background-image: linear-gradient(86deg, #f86339, #fdc945);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  .text-span-2 {
    box-decoration-break: clone;
  }
} */

  /* .paragraph {
  color: black;
  text-align: center;
  @media screen and (max-width: 479px) {
    font-size: 20px;
    line-height: 26px;
  }
  .text-left {
    text-align: left;
    position: relative;
    z-index: 1;
    margin-bottom: 10px;
    text-align: left;
    .text-white {
      color: #fff;
    }
  }
} */

  /* .text-center {
  text-align: center;
  .text-white.text-hero {
    margin-bottom: 20px;
    font-weight: 400;
    opacity: 0.5;
    .text-muted {
      opacity: 0.5;
    }
    &.text-small {
      font-size: 18px;
      line-height: 22px;
    }
  }
} */

  /* .sub-heading.text-center.mb-80 {
  margin-bottom: 80px;
  font-family: Inter, sans-serif;
  font-weight: 600;
}
.image-18 {
  display: block;
  margin-top: 60px;
  margin-right: auto;
  margin-left: auto;
} */
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
  /* #content-wrapper {
    ${ContentWrapper}
  } */
  /* #container {
    ${Container}
  } */
  /* #section {
    ${Section}
  } */
  /* #Dark {
    ${Dark}
  } */
  /* #big-heading {
    ${BigHeading}
  } */
  /* #why {
    ${Section}
    ${Dark}
  } */
  /* #image- {
    ${Image18}
  } */
  /* #text-span- {
    ${TextSpan2}
  } */
  /* #grid-card {
    ${WlayoutGrid}
    ${Grid5}
  } */
  /* #SubsHeading {
    ${SubHeading}
  } */
`;

export const Area = styled.div`
  ${Section}
  ${Dark}
#container-why {
    ${Container}
    #big-heading-why {
      ${BigHeading}
    }
    #paragraph-why {
      ${Paragraph}
    }
    #image- {
      ${Image18}
    }
  }
`;
