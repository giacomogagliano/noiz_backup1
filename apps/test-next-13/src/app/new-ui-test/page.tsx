"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Div } from "@zionstate/ui/style";

const Body = styled.body`
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  font-family: Inter, sans-serif;
  color: #1d1d1f;
  font-size: 22px;
  line-height: 28px;
  margin: 0;
  min-height: 100%;
  display: block;
  margin: 0;
  min-height: 100%;
  background-color: #fff;
  font-family: Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #333;
  font-family: -apple-system, BlinkMacSystemFont, "Inter", "Roboto",
    "Helvetica Neue", "Segoe UI", "Arial", "Noto Sans", sans-serif !important;
  color: #1d1d1f;
  font-size: 22px;
  line-height: 28px;
  @media screen and (max-width: 479px) {
    font-size: 20px;
    line-height: 26px;
  }
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  .section {
    position: relative;
    overflow: hidden;
    margin-bottom: 0px;
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .hero {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    min-height: 100vh;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    background-image: url(../images/hero-bg.jpg);
    background-position: 50% 0%;
    background-size: cover;
  }
  .section.hero {
    padding-top: 0px;
    padding-bottom: 100px;
    background-image: url(../images/hero-bg_1.jpg),
      -webkit-gradient(linear, left top, left bottom, from(#e1583b), color-stop(40%, #4d2d47), color-stop(74%, #20122d));
    background-image: url(../images/hero-bg_1.jpg),
      linear-gradient(180deg, #e1583b, #4d2d47 40%, #20122d 74%);
    background-position: 50% 0%, 0px 0px;
  }
  .container {
    position: relative;
    width: 90vw;
    max-width: 1100px;
  }
  .container.hero-container2 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .div-block-18 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    max-width: 990px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    img {
      max-width: 100%;
      vertical-align: middle;
      display: inline-block;
      border: 0;
    }
    .header-logo {
      height: 30px;
      margin-top: 18px;
      margin-bottom: 18px;
    }
    .div-block-19 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      grid-column-gap: 16px;
      grid-row-gap: 16px;
    }
    a {
      background-color: transparent;
      text-decoration: underline;
    }
    .w-inline-block {
      max-width: 100%;
      display: inline-block;
    }
    .header-link {
      position: relative;
      margin-top: 6px;
      margin-right: 9px;
      margin-left: 9px;
      color: #b3b7c0;
      font-size: 26px;
      line-height: 26px;
      font-weight: 700;
      text-decoration: none;
      margin-top: 0px;
      color: #fff;
      font-size: 17px;
      line-height: 20px;
      font-weight: 400;
    }
    .header-link.header-link-primary {
      padding: 7px 20px;
      border-radius: 16px;
      background-color: #fff;
      color: #1d1d1f;
    }
    .html-embed-2 {
      @media screen and (max-width: 991px) {
        display: none;
      }
      .github-stars {
        width: 84px;
        height: auto;
      }
    }
  }
  .element {
    border-color: rgba(255, 255, 255, 0.25);
  }
  .browser {
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
  }
  .floating {
    animation: floating 5s infinite ease-in-out;
  }
  @keyframes floating {
    0%,
    100% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 10px);
    }
  }
  .browser.floating {
    max-width: 1140px;
    margin-bottom: 40px;
    border-radius: 12px;
    @media screen and (max-width: 479px) {
      min-height: 40vh;
    }
  }
  .browsern {
    background-color: rgba(255, 255, 255, 0.3);
  }
  .browser-navbar {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
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
  }
  .browser-navbar-left {
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
    .scb {
      opacity: 1;
      transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      transform-style: preserve-3d;
    }
    .system-circle-button {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: hsla(0, 0%, 100%, 0.47);
      @media screen and (max-width: 479px) {
        width: 10px;
        height: 10px px;
      }
    }
  }
  .browsernt {
    transform: translate3d(0px, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
  }
  .browser-navbar-center {
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
  }
  .browser-navbar-right {
    width: 100px;
    height: 20px;
  }
  .browser-content {
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
  }
  .hero-image {
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
  }

  .hero-image.floating {
    @media screen and (max-width: 479px) {
      margin-bottom: 20px;
    }
  }

  .hero-image.floating.d-none {
    display: none;
  }
`;

const HeaderSticky = styled.header`
  position: fixed;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: auto;
  z-index: 9999;
  margin-top: 0px;
  margin-bottom: 0px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: hsla(0, 0%, 100%, 0.72);
  -webkit-backdrop-filter: saturate(184%) blur(20px);
  backdrop-filter: saturate(184%) blur(20px);
  position: ${scrollY >= 150 ? "fixed" : "relative"};
  -webkit-transform: translate(0px, -100%);
  -ms-transform: translate(0px, -100%);
  transform: translate(0px, -100%);
  -webkit-transition: -webkit-transform 300ms ease-in-out;
  transition: -webkit-transform 300ms ease-in-out;
  transition: transform 300ms ease-in-out;
  transition: transform 300ms ease-in-out, -webkit-transform 300ms ease-in-out;
  transform: translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  @media screen and (max-width: 479px) {
    -webkit-transform: translate(0px, -100%);
    -ms-transform: translate(0px, -100%);
    transform: translate(0px, -100%);
  }
  @media screen and (max-width: 767px) {
    -webkit-transform: translate(0px, -100%);
    -ms-transform: translate(0px, -100%);
    transform: translate(0px, -100%);
  }
  @media screen and (max-width: 479px) {
    padding-right: 0px;
    padding-left: 0px;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  @media screen and (max-width: 767px) {
    padding-right: 0px;
    padding-left: 0px;
  }
`;

const ContainerHeader = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  width: 90vw;
  max-width: 1100px;
`;
const DivHeaderLogo = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  max-width: 990px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

const HeaderLogo = styled.div`
  height: 30px;
  margin-top: 18px;
  margin-bottom: 18px;
  img {
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    border: 0;
  }
`;
const DivHeaderLinks = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  @media screen and (max-width: 479px) {
    grid-column-gap: 0px;
  }
  @media screen and (max-width: 767px) {
    grid-column-gap: 12px;
    grid-row-gap: 12px;
  }
  a {
    color: #1d1d1f;
    margin-top: 0px;
    color: #fff;
    font-size: 17px;
    line-height: 20px;
    font-weight: 400;
    position: relative;
    margin-top: 6px;
    margin-right: 9px;
    margin-left: 9px;
    color: #b3b7c0;
    font-size: 26px;
    line-height: 26px;
    font-weight: 700;
    text-decoration: none;
    background-color: transparent;
    @media screen and (max-width: 767px) {
      font-size: 14px;
    }
    a,
    link {
      max-width: 100%;
      display: inline-block;
    }
  }
  #github {
    @media screen and (max-width: 991px) {
      display: none;
    }
    a {
      text-decoration: underline;
      background-color: transparent;
    }
    #github-stars {
      width: 84px;
      height: auto;
    }
  }
`;
const CardProva = styled.div`
  display: grid;
  background-color: aliceblue;
  width: 150px;
  height: 150px;
`;

function index() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      setScrollY(window.pageYOffset);
    };
    return () => {
      window.onscroll = null;
    };
  }, []);
  return (
    <Body>
      <ContainerHeader>
        <DivHeaderLogo>
          <HeaderLogo>
            <img loading="lazy"></img>
            <DivHeaderLinks>
              <a href="#app-store" id="link">
                <div>App Store</div>
              </a>
              <a
                href="https://community.getumbrel.com/"
                target="_blank"
                id="link"
              >
                <div>Community</div>
              </a>
              <a href="https://umbrel.crew.work" target="_blank" id="link">
                <div>We're Hiring</div>
              </a>
              <a href="#start">
                <div>Install Now</div>
              </a>
              <div id="github">
                <a href="https://github.com/getumbrel/umbrel" target="_blank">
                  <img
                    id="github-stars"
                    alt="Star on GitHub"
                    src="https://img.shields.io/github/stars/getumbrel/umbrel?label=Star&amp;style=social"
                  />
                </a>
              </div>
            </DivHeaderLinks>
          </HeaderLogo>
        </DivHeaderLogo>
        <HeaderSticky>
          <a href="#app-store" id="link">
            <div>App Store</div>
          </a>
          <a href="https://community.getumbrel.com/" target="_blank" id="link">
            <div>Community</div>
          </a>
          <a href="https://umbrel.crew.work" target="_blank" id="link">
            <div>We're Hiring</div>
          </a>
          <a href="#start">
            <div>Install Now</div>
          </a>
          <div id="github">
            <a href="https://github.com/getumbrel/umbrel" target="_blank">
              <img
                id="github-stars"
                alt="Star on GitHub"
                src="https://img.shields.io/github/stars/getumbrel/umbrel?label=Star&amp;style=social"
              />
            </a>
          </div>
        </HeaderSticky>
      </ContainerHeader>
      <CardProva>ciao</CardProva>
      <CardProva>ciao</CardProva>
      <CardProva>ciao</CardProva>
      <CardProva>ciao</CardProva>
      <CardProva>ciao</CardProva>
      <CardProva>ciao</CardProva>
      <CardProva>ciao</CardProva>
      <CardProva>ciao</CardProva>
      <CardProva>ciao</CardProva>
      <CardProva>ciao</CardProva>
      <CardProva>ciao</CardProva>
      <CardProva>ciao</CardProva>
      <CardProva>ciao</CardProva>
      <CardProva>ciao</CardProva>
      <CardProva>ciao</CardProva>
      <CardProva>ciao</CardProva>
      <CardProva>ciao</CardProva>
      <CardProva>ciao</CardProva>
      <CardProva>ciao</CardProva>
      <CardProva>ciao</CardProva>
      <CardProva>ciao</CardProva>
      <CardProva>ciao</CardProva>
      <CardProva>ciao</CardProva>
      <CardProva>ciao</CardProva>
      <CardProva>ciao</CardProva>
      <CardProva>ciao</CardProva>
      <CardProva>ciao</CardProva>
    </Body>
  );
}

export default index;
