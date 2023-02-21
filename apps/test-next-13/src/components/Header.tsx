import React from "react";
import { Browser } from "./Browser";
import { LinuxCommand } from "./LinuxCommand";
import { Navbar } from "./Navbar";
import {
  GradientButtonStyle,
  HeaderComponent,
  HeroTextStyle,
} from "../lib/style/Header.style";
import { AppearFromBottomLoader } from "./AppearFromBottomLoader";

export const Header = ({
  trigger1,
  triggerButtonToTop,
  triggerButtonTransform,
}) => (
  <>
    <HeaderComponent
      trigger1={trigger1}
      triggerButtonToTop={triggerButtonToTop}
      triggerButtonTransform={triggerButtonTransform}
    >
      <div id="hero">
        <div id="header">
          <Navbar></Navbar>
        </div>
        <div>
          <Browser></Browser>
        </div>
        <AppearFromBottomLoader triggerKey="#hero-text">
          <HeroTextStyle id="hero-text">
            Goodbye, big tech.
            <br />
            Welcome, <span id="text-span">your data at your own home.</span>
            <span id="text-span"></span>
            <span id="text-span"></span>
          </HeroTextStyle>
        </AppearFromBottomLoader>
        <p id="paragraph-header">
          Zion is an OS for running a personal mini computer in your home.
          Self-host open source apps Bitcoin node, and more.
          <br></br>
          <br></br>
          Get the convenience of cloud, without giving up your data.
        </p>
        <AppearFromBottomLoader triggerKey="#gradient-button">
          <GradientButtonStyle id="gradient-button">
            <a id="button-effect" key={"ooo"}>
              <div id="button-text">INSTALL ON MINI PC</div>
              <img src="assets/long-arrow.svg" loading="lazy" alt=""></img>
            </a>
          </GradientButtonStyle>
        </AppearFromBottomLoader>
        <p id="header-last-line">Or install on any Ubuntu or Debian system:</p>
        <LinuxCommand></LinuxCommand>
      </div>
    </HeaderComponent>
  </>
);
