"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Div } from "@zionstate/ui/style";
import { Header } from "../../components/Header";

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
  .section {
    position: relative;
    overflow: hidden;
    margin-bottom: 0px;
    padding-top: 100px;
    padding-bottom: 100px;
    @media screen and (max-width: 479px) {
      padding-top: 40px;
      padding-bottom: 40px;
    }
  }
  .section.dark {
    background-color: #f8f9fc;
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
    background-image: url(assets/hero-bg_1.jpg);
    background-position: 50% 0%;
    background-size: cover;
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
  //////////////////////////////////////////HEADER-NAVBAR-LINKNAV////////////////////////////////////////////////////////////////////////

  header.header-sticky {
    left: 0%;
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
    transform: translate3d(0px, 14px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    transition: transform 300ms ease-in-out, -webkit-transform 300ms ease-in-out;
    position: ${scrollY >= 150 ? "fixed" : "relative"};
    @media screen and (max-width: 479px) {
      -webkit-transform: translate(0px, 0%);
      -ms-transform: translate(0px, 0%);
      transform: translate(0px, 0%);
    }

    @media screen and (max-width: 767px) {
      -webkit-transform: translate(0px, 0%);
      -ms-transform: translate(0px, 0%);
      transform: translate(0px, 0%);
    }
  }
  .container.header-sticky-container {
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
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
  }
  .header-logo {
    height: 30px;
    margin-top: 18px;
    margin-bottom: 18px;
  }
  img {
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    border: 0;
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
    @media screen and (max-width: 767px) {
      grid-column-gap: 12px;
      grid-row-gap: 12px;
    }
    @media screen and (max-width: 479px) {
      grid-column-gap: 0px;
    }
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
  .heading.heading-hero {
    max-width: 1000px;
    margin-right: 1.6rem;
    margin-left: 1.6rem;
    font-size: 70px;
    line-height: 86px;
    @media screen and (max-width: 479px) {
      font-size: 50px;
      line-height: 54px;
    }
  }

  .heading {
    margin-bottom: 40px;
    font-size: 90px;
    line-height: 96px;
    font-weight: 600;
    text-align: center;
  }

  .big-heading {
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
  }
  .sub-heading.text-center.mb-80 {
    margin-bottom: 80px;
    font-family: Inter, sans-serif;
    font-weight: 600;
  }
  .sub-heading {
    margin-bottom: 0px;
    color: #9f9fa5;
    font-size: 40px;
    line-height: 50px;
    @media screen and (max-width: 479px) {
      margin-bottom: 10px;
      font-size: 30px;
      line-height: 36px;
    }
  }
  ///////////////////////////// GRID ///////////////////////////////////////////////////////////
  .grid-5 {
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
  }
  .w-layout-grid {
    display: -ms-grid;
    display: grid;
    grid-auto-columns: 1fr;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-rows: auto auto;
    grid-template-rows: auto auto;
    grid-row-gap: 16px;
    grid-column-gap: 16px;
  }
  //////////////////////////// TESTI ////////////////////////////////////////////////////////
  .text-span {
    background-image: linear-gradient(86deg, #f86339, #fdc945);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .text-span,
  .text-span-2 {
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
    -ms-box-decoration-break: clone;
    -o-box-decoration-break: clone;
    box-decoration-break: clone;
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
  .text-center.text-white.text-hero {
    margin-bottom: 20px;
    font-weight: 400;
  }
  .text-center {
    text-align: center;
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
  }
  .abuttoninstall {
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    opacity: 1;
    transform-style: preserve-3d;
  }
  .gradient-button {
    display: grid;
    padding: 10px 20px;
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    grid-auto-columns: 1fr;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-rows: auto auto;
    grid-template-rows: auto auto;
    border-radius: 4px;
    background-image: linear-gradient(190deg, #8584ff, #5351fb);
    box-shadow: 0 1px 15px 0 #e2e3e4;
    -webkit-transition: box-shadow 500ms cubic-bezier(0.23, 1, 0.32, 1),
      -webkit-transform 500ms cubic-bezier(0.23, 1, 0.32, 1);
    transition: box-shadow 500ms cubic-bezier(0.23, 1, 0.32, 1),
      -webkit-transform 500ms cubic-bezier(0.23, 1, 0.32, 1);
    transition: transform 500ms cubic-bezier(0.23, 1, 0.32, 1),
      box-shadow 500ms cubic-bezier(0.23, 1, 0.32, 1);
    transition: transform 500ms cubic-bezier(0.23, 1, 0.32, 1),
      box-shadow 500ms cubic-bezier(0.23, 1, 0.32, 1),
      -webkit-transform 500ms cubic-bezier(0.23, 1, 0.32, 1);
    text-decoration: none;
  }
  .link-block {
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
  .link-block.button-hero {
    margin-top: 40px;
    margin-bottom: 40px;
    padding-top: 12px;
    padding-bottom: 15px;
    grid-auto-columns: 1fr;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-rows: auto auto;
    grid-template-rows: auto auto;
    border-radius: 8px;

    background-color: #fff;
    background-image: none;
    box-shadow: 0 1px 15px 0 rgb(0 0 0 / 68%);
    @media screen and (max-width: 479px) {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      margin-top: 10px;
    }

    @media screen and (max-width: 767px) {
      margin-top: 20px;
    }
    @media screen and (max-width: 991px) {
      display: block;
    }
  }
  .button-text {
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
  }
  .linux-command-container {
    padding: 16px 20px;
    border-radius: 8px;
    background-color: hsla(0, 0%, 100%, 0.2);

    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
  }

  .linux-command {
    font-family: Inconsolata, monospace;
    color: #fff;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    @media screen and (max-width: 479px) {
      font-size: 16px;
    }
  }

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

  /////////ELEMENTO FINESTRA BROWSER
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
  .image-18 {
    display: block;
    margin-top: 60px;
    margin-right: auto;
    margin-left: auto;
  }
  ///////////////////////ELEMENTI PAGINA
  .content-wrapper {
    overflow: hidden;
    flex-wrap: wrap;
    filter: blur(0px);
  }
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

  .w-container {
    margin-left: auto;
    margin-right: auto;
    max-width: 940px;
    @media screen and (max-width: 479px) {
      max-width: none;
    }

    @media screen and (max-width: 991px) {
      max-width: 728px;
    }
  }
  .w-container .w-row {
    margin-left: -10px;
    margin-right: -10px;
  }

  .w-row,
  .w-container .w-row {
    @media screen and (max-width: 767px) {
      margin-left: 0;
      margin-right: 0;
    }
  }
  .w-row:after {
    clear: both;
  }
  .w-row:before,
  .w-row:after {
    content: " ";
    display: table;
    grid-column-start: 1;
    grid-row-start: 1;
    grid-column-end: 2;
    grid-row-end: 2;
  }

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
      <div className="section hero wf-section">
        <div className="container hero-container2">
          <div className="header">
            <div className="div-block-18">
              <img src="" loading="lazy" alt="" className="header-logo" />
              <div className="div-block-19">
                <a
                  href="#app-store"
                  className="header-link d-xs-none w-inline-block"
                >
                  <div className="text-block-14">App Store</div>
                </a>
                <a
                  href="https://community.getumbrel.com/"
                  target="_blank"
                  className="header-link d-xs-none w-inline-block"
                >
                  <div className="text-block-14">Community</div>
                </a>
                <a
                  href="https://umbrel.crew.work"
                  target="_blank"
                  className="header-link w-inline-block"
                >
                  <div>We're Hiring</div>
                </a>
                <a
                  href="#start"
                  className="header-link header-link-primary w-inline-block"
                >
                  <div>Install Now</div>
                </a>
                <div className="html-embed-2 w-embed">
                  <a href="https://github.com/getumbrel/umbrel" target="_blank">
                    <img
                      className="github-stars"
                      alt="Star Umbrel on GitHub"
                      src="https://img.shields.io/github/stars/getumbrel/umbrel?label=Star&amp;style=social"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="element browser floating">
            <div className="browsern browser-navbar">
              <div className="browser-navbar-left">
                <div className="scb system-circle-button"></div>
                <div className="scb system-circle-button"></div>
                <div className="scb system-circle-button"></div>
              </div>
              <div className="browsernt browser-navbar-center"></div>
              <div className="browser-navbar-right"></div>
            </div>
            <div className="browser-content"></div>
          </div>
          <div className="hero-image floating d-none"></div>
        </div>
        <h1 className="heading heading-hero">
          Goodbye, big tech.
          <br />
          Hello, <span className="text-span">server in your home.</span>
          <span className="text-span"></span>
          <span className="text-span"></span>
        </h1>
        <p className="text-center text-white text-hero">
          Umbrel is an OS for running a personal server in your home. Self-host
          open source apps like Nextcloud, Bitcoin node, and more.
          <br></br>
          <br></br>
          Get the convenience of cloud, without giving up your data.
        </p>
        <a className="abuttoninstall gradient-button link-block button-hero w-inline-block">
          <div className="button-text">INSTALL ON A RASPBERRY PI 4</div>
          <img
            src="assets/long-arrow.svg"
            loading="lazy"
            alt=""
            className="button-arrow"
          ></img>
        </a>
        <p className="text-center text-white text-hero text-muted text-small">
          Or install on any Ubuntu or Debian system:
        </p>
        <div className="linux-command-container">
          <div className="linux-command">curl -L https://umbrel.sh | bash</div>
        </div>
      </div>
      <div className="content-wrapper">
        <div id="why" className="section dark wf-section">
          <div className="container w-container">
            <h2 className="big-heading">De-google yourself.</h2>
            <div className="w-embed">
              <a
                className="autoplay-video-container"
                href="https://www.youtube.com/watch?v=Uu1TuE6RdKM"
                target="_blank"
              >
                <img
                  className="youtube-play-icon"
                  src="https://i.imgur.com/trXdlO5.png"
                ></img>
                <video className="autoplay-video">
                  {" "}
                  /////// autoplay="" loop="" muted="" //////////
                  <source
                    src="https://i.imgur.com/JFknZrb.mp4"
                    type="video/mp4"
                  />
                </video>
              </a>
            </div>
            <p className="paragraph">
              All of our interactions on the internet today are mediated by a
              few companies who offer “free” services in exchange for storing
              our data on their servers to spy on us.
              <br></br>
              <br></br>
              Running a personal server fundamentally changes that. You and your
              family’s photos, videos, files, notes, passwords — everything,
              have nothing to do with someone else’s computer. They’re a part of
              your private life, and now they can all be stored by you, on your
              personal server.
            </p>
            <img className="image-18"></img>
          </div>
        </div>
        <div id="what" className="section wf-section">
          <div className="container w-container">
            <h2 className="big-heading mb-20">
              Welcome to the <span className="text-span-2">new internet.</span>
            </h2>
            <h3 className="sub-heading text-center mb-80">
              One that's powered by you. <span className="text-span-2"></span>
            </h3>
            <div className="w-layout-grid grid-5">
              <div className="feature-card">
                <div className="feature-header">
                  <h3 className="feature-heading feature-heading-nextcloud">
                    Run your private cloud with Nextcloud.
                  </h3>
                  <img
                    src="./assets/icon_4.svg"
                    loading="lazy"
                    className="feature-icon feature-icon-nextcloud"
                  ></img>
                </div>
                <div className="feature-content">
                  <div className="columns-3 w-row">
                    <div className="column-12 w-col w-col-10">
                      <p className="paragraph text-left">
                        An entirely self-hosted Google Drive replacement — store
                        your documents, calendar, contacts, photos and videos on
                        your Umbrel with Nextcloud instead of Google’s servers.
                      </p>
                    </div>
                    <div className="w-col w-col-2"></div>
                  </div>
                  <img
                    src="./assets/Group-1601.jpg"
                    loading="eager"
                    className="feature-image"
                  ></img>
                </div>
                <div></div>
              </div>
              <div className="feature-card feature-card-photoprism">
                <div className="feature-header">
                  <h3 className="feature-heading feature-heading-photoprism">
                    Store your photos and videos with PhotoPrism.
                  </h3>
                  <img
                    className="feature-icon feature-icon-photoprism"
                    src=""
                    loading="lazy"
                  ></img>
                </div>
                <div className="feature-content"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="what" className="section dark wf-section"></div>
        <div id="what" className="section wf-section"></div>
        <div id="app-store" className="section wf-section"></div>
        <div id="apps" className="wf-section"></div>
        <div
          id="develop"
          className="section dark develop-apps-section wf-section"
        ></div>
        <div id="start" className="section wf-section"></div>
        <div id="features" className="section dark wf-section"></div>
        <div id="community" className="section wf-section"></div>
        <div id="signup" className="section dark section-2 wf-section"></div>
        <div className="section dark social-section"></div>
        <div id="faq" className="section hidden wf-section"></div>
        <div id="footer" className="footer wf-section"></div>
      </div>
    </Body>
  );
}

export default index;
