import React from "react";
import styled from "styled-components";
import { Browser } from "./Browser";
import { LinuxCommand } from "./LinuxCommand";
import { Navbar } from "./Navbar";

const HeaderComponent = styled.div`
  .header {
    display: flex;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 20px;
    padding-right: 20px;
    padding-left: 20px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    @media screen and (max-width: 767px) {
      padding-right: 0px;
      padding-left: 0px;
    }
    @media screen and (max-width: 479px) {
      padding-right: 0px;
      padding-left: 0px;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
    }
  }
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
  .heading {
    margin-bottom: 40px;
    font-size: 90px;
    line-height: 96px;
    font-weight: 600;
    text-align: center;
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
  .abuttoninstall {
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    opacity: 1;
    transform-style: preserve-3d;
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
`;

export const Header = () => (
  <HeaderComponent className="header header-sticky">
    <div className=" header-sticky-container">
      <Navbar></Navbar>
      <div className="hero">
        <div>
          <div className="header">
            <Navbar></Navbar>
          </div>
          <Browser></Browser>
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
        <LinuxCommand></LinuxCommand>
      </div>
    </div>
  </HeaderComponent>
);
