import React, { HTMLAttributeAnchorTarget } from "react";
import styled from "styled-components";

const NavbarComponent = styled.div`
  .div-block-18 {
    display: flex;
    width: 100%;
    max-width: 990px;
    justify-content: space-between;
  }
  .div-block-19 {
    display: flex;
    align-items: center;
  }
  a {
    background-color: transparent;
    text-decoration: underline;
  }
  .header-logo {
    height: 30px;
    margin-top: 18px;
    margin-bottom: 18px;
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
    &.d-xs-none {
      @media screen and (max-width: 479px) {
        display: none;
      }
    }
    &.header-link-primary {
      padding: 7px 20px;
      border-radius: 16px;
      background-color: #fff;
      color: #1d1d1f;
      @media screen and (max-width: 479px) {
        padding: 5px 16px;
      }
      &.header-sticky-link {
        background-color: #5351fb;
        color: #fff;
      }
    }
    &.header-sticky-link {
      color: #1d1d1f;
    }
  }
  .html-embed-2 {
    a {
      cursor: pointer;
    }
    @media screen and (max-width: 640px) {
      display: none;
    }
    .github-stars {
      width: 84px;
      height: auto;
    }
  }
`;

export const Navbar = () => (
  <NavbarComponent>
    <div className="div-block-18">
      <img
        src="assets/gotek-write.svg"
        loading="lazy"
        alt=""
        className="header-logo"
      />
      <div className="div-block-19">
        <a
          href="#app-store"
          className="header-link header-sticky-link d-xs-none "
        >
          <div>Apple Store</div>
        </a>
        <a
          href="https://community.getumbrel.com/"
          target="_blank"
          className="header-link header-sticky-link d-xs-none "
        >
          <div>Community</div>
        </a>
        <a href="" target="_blank" className="header-link header-sticky-link ">
          <div>We are Hiring!</div>
        </a>
        <a
          href="#start"
          className="header-link header-link-primary header-sticky-link "
        >
          <div>Install Now</div>
        </a>
        <div className="html-embed-2 w-embed">
          <a href="https://github.com/getumbrel/umbrel" target="_blank">
            <img
              className="github-stars"
              alt="Star Umbrel on GitHub"
              src="https://img.shields.io/github/stars/getumbrel/umbrel?label=Star&style=social"
            ></img>
          </a>
        </div>
      </div>
    </div>
  </NavbarComponent>
);
