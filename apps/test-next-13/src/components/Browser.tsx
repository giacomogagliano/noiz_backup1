import React from "react";
import styled from "styled-components";

const BrowserComponent = styled.div`
  /* .browser {
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
  .browsern {
    background-color: rgba(255, 255, 255, 0.3);
  }
  .browser.floating {
    max-width: 1140px;
    margin-bottom: 40px;
    border-radius: 12px;
    @media screen and (max-width: 479px) {
      min-height: 40vh;
    }
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
  } */
`;

export const Browser = () => (
  <BrowserComponent>
    <div className="browser floating">
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
  </BrowserComponent>
);
