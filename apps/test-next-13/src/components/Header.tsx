import React from "react";
import styled from "styled-components";

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
`;

export const Header = () => (
  <HeaderComponent className="header header-sticky headerasconparsa">
    <div className="container header-sticky-container">
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
    </div>
  </HeaderComponent>
);
