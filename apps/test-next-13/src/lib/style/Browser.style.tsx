"use client";
import styled, { css } from "styled-components";

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
const browsernt = css`
  transform: translate3d(0px, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
`;
const scb = css`
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
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
