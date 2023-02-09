import React from "react";
import styled from "styled-components";

const NavbarComponent = styled.div`
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
  .header-logo {
    height: 30px;
    margin-top: 18px;
    margin-bottom: 18px;
  }
`;

export const Navbar = () => (
  <NavbarComponent>
    <div className="div-block-18">
      <img
        src="images/umbrel-logo-compact-purple.svg"
        loading="lazy"
        alt=""
        className="header-logo"
      />
      <div className="div-block-19">
        <a
          href="#app-store"
          className="header-link header-sticky-link d-xs-none w-inline-block"
        >
          <div>Apple Store</div>
        </a>
        <a
          href="https://community.getumbrel.com/"
          target="_blank"
          className="header-link header-sticky-link d-xs-none w-inline-block"
        >
          <div>Community</div>
        </a>
        <a
          href=""
          target="_blank"
          className="header-link header-sticky-link w-inline-block"
        >
          <div>We are Hiring!</div>
        </a>
        <a
          href="#start"
          className="header-link header-link-primary header-sticky-link w-inline-block"
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
