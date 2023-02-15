import React from "react";
import { CssProps, NavbarComponent } from "./StylesSheet";

export const Navbar = ({ bgcolor, buttonBgColor, color }: CssProps) => (
  <NavbarComponent
    bgcolor={bgcolor}
    buttonBgColor={buttonBgColor}
    color={color}
  >
    <div id="div-block-18">
      <img
        src="assets/gotek-write.svg"
        loading="lazy"
        alt=""
        id="header-logo"
      />
      <div id="div-block-19">
        <a href="" id="link-nav-hidden">
          <div>Apple Store</div>
        </a>
        <a
          href="https://community.getumbrel.com/"
          target="_blank"
          id="link-nav-hidden"
        >
          <div>Community</div>
        </a>
        <a href="" target="_blank" id="link-nav">
          <div>We are Hiring!</div>
        </a>
        <a href="#start" id="install-now">
          <div>Install Now</div>
        </a>
        <div id="github-link-nav">
          <a href="https://github.com/getumbrel/umbrel" target="_blank">
            <img
              id="github-stars"
              alt="Star Umbrel on GitHub"
              src="https://img.shields.io/github/stars/getumbrel/umbrel?label=Star&style=social"
            ></img>
          </a>
        </div>
      </div>
    </div>
  </NavbarComponent>
);
