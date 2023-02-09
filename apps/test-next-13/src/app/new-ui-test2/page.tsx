"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Div } from "@zionstate/ui/style";
import { Header } from "../../components/Header";
import { FullPage } from "../../components/FullPage";

const Body = styled.body`
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
    padding-top: 40px;
    padding-bottom: 40px;
    font-size: 20px;
    line-height: 26px;
  }

  .section.hero {
    padding-top: 0px;
    padding-bottom: 100px;
    background-image: url(assets/hero-bg_1.jpg),
      -webkit-gradient(linear, left top, left bottom, from(#e1583b), color-stop(40%, #4d2d47), color-stop(74%, #20122d));
    background-image: url(assets/hero-bg_1.jpg),
      linear-gradient(180deg, #e1583b, #4d2d47 40%, #20122d 74%);
    background-position: 50% 0%, 0px 0px;
  }

  .text-span {
    background-image: linear-gradient(86deg, #f86339, #fdc945);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    &.text-span-2 {
      box-decoration-break: clone;
      -webkit-box-decoration-break: clone;
      -ms-box-decoration-break: clone;
      -o-box-decoration-break: clone;
      box-decoration-break: clone;
    }
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
    color: #fff;
    transform: translate3d(0px, 14px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    opacity: 1;
    transform-style: preserve-3d;
  }

  .paragraph {
    color: black;
    text-align: center;
    @media screen and (max-width: 479px) {
      font-size: 20px;
      line-height: 26px;
    }
  }
  .paragraph.text-left {
    text-align: left;
    position: relative;
    z-index: 1;
    margin-bottom: 10px;
    text-align: left;
  }
  .paragraph.text-left.text-white {
    color: #fff;
  }
  .paragraph.text-left.text-white {
    color: #fff;
  }

  .paragraph.text-left {
    text-align: left;
  }
  .text-center {
    text-align: center;
    .text-white.text-hero {
      margin-bottom: 20px;
      font-weight: 400;
      opacity: 0.5;
      &.text-muted {
        opacity: 0.5;
      }
      &.text-small {
        font-size: 18px;
        line-height: 22px;
      }
    }
  }
  .text-muted {
    opacity: 0.5;
  }
  .sub-heading.text-center.mb-80 {
    margin-bottom: 80px;
    font-family: Inter, sans-serif;
    font-weight: 600;
  }

  /* .text-center {
    text-align: center;
  }
  .text-center.text-white.text-hero {
    margin-bottom: 20px;
    font-weight: 400;
  }
 
  .text-muted {
    opacity: 0.5;
  }
  .text-center.text-white.text-hero.text-muted {
    opacity: 0.5;
  }
  .text-center.text-white.text-hero.text-muted.text-small {
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
  } */
  ////////GLOBAL/////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////HEADER-NAVBAR-LINKNAV////////////////////////////////////////////////////////////////////////

  img {
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    border: 0;
  }

  .w-inline-block {
    max-width: 100%;
    display: inline-block;
  }
  .header-link {
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
  }
  .header-link.header-sticky-link {
    color: #1d1d1f;
  }
  .header-link.d-xs-none {
    @media screen and (max-width: 479px) {
      display: none;
    }
  }
  .header-link.header-link-primary {
    padding: 7px 20px;
    border-radius: 16px;
    background-color: #fff;
    color: #1d1d1f;
    @media screen and (max-width: 479px) {
      padding: 5px 16px;
    }
  }
  .header-link.header-link-primary.header-sticky-link {
    background-color: #5351fb;
    color: #fff;
  }

  ///////////////////////////// GRID ///////////////////////////////////////////////////////////

  //////////////////////////// TESTI ////////////////////////////////////////////////////////

  .html-embed-2 {
    a:-webkit-any-link {
      color: -webkit-link;
      cursor: pointer;
    }
    @media screen and (max-width: 991px) {
      display: none;
    }
  }
  .w-embed:before,
  .w-embed:after {
    content: " ";
    display: table;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-column-end: 2;
    grid-row-end: 2;
  }
  .w-embed:after {
    clear: both;
  }
  .github-stars {
    width: 84px;
    height: auto;
  }

  .image-18 {
    display: block;
    margin-top: 60px;
    margin-right: auto;
    margin-left: auto;
  }
  ///////////////////////ELEMENTI PAGINA

  ////////////////////////////////////////YOUTUBE VIDEO///////////////////////////////////////////////

  .autoplay-video-container {
    position: relative;
    display: block;
    margin-top: 20px;
    margin-bottom: 50px;
  }
  .youtube-play-icon {
    width: 70px;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  .autoplay-video {
    display: block;
    margin: auto;
    width: 100%;
    max-width: 800px;
    height: auto;
    border-radius: 10px;
    filter: brightness(0.9);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  }
  ///////////////////////////CARD/////////////////////////////////////////////////////////////////
  .feature-card {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    overflow: visible;
    padding-top: 50px;
    padding-right: 50px;
    padding-left: 50px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
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
  }

  .feature-header {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 0px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    @media screen and (max-width: 991px) {
      top: -80px;
    }
  }
  .feature-heading.feature-heading-nextcloud {
    color: #0082c9;
  }

  .feature-image {
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
  }
  .feature-heading {
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
  }
  .feature-heading.feature-heading-photoprism {
    color: #c2fde4;
  }
  .feature-icon {
    width: 100%;
    max-width: 120px;
    border-radius: 22%;
    box-shadow: 3px 3px 20px 0 rgb(0 0 0 / 20%);
    -webkit-transform: translate(0px, -70%);
    -ms-transform: translate(0px, -70%);
    transform: translate(0px, -70%);
    @media screen and (max-width: 479px) {
      max-width: 80px;
      margin-right: -10px;
      margin-left: -20px;
      -webkit-transform: translate(0px, -80%);
      -ms-transform: translate(0px, -80%);
      transform: translate(0px, -80%);
    }
  }
  .feature-icon.feature-icon-nextcloud {
    box-shadow: 3px 3px 20px 0 rgb(46 120 230 / 47%);
  }
  .feature-icon.feature-icon-photoprism {
    box-shadow: 3px 3px 20px 0 rgb(97 16 126 / 32%);
  }
  .feature-content {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    margin-right: -51px;
    margin-bottom: -1px;
    margin-left: -50px;
    padding-left: 50px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
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
  }

  ///////////////////////////CONTAINER/////////////////////////////////////////////////////////////////

  .columns-3 {
    @media screen and (max-width: 479px) {
      padding-right: 0px;
      padding-left: 0px;
    }

    @media screen and (max-width: 767px) {
      padding-right: 10px;
    }
  }

  .column-12 {
    @media screen and (max-width: 479px) {
      padding-right: 0px;
      padding-left: 0px;
    }
  }

  .w-col-10 {
    width: 83.33333333%;
  }
  .w-col {
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
  }
  .w-col-2 {
    width: 16.66666667%;
  }
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
      <Header></Header>
      <FullPage></FullPage>
    </Body>
  );
}

export default index;
