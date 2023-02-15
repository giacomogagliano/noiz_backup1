import React from "react";
import { GradientButton } from "../classes/GradientButton";
import { HeroText } from "../classes/HeroText";
import { LinuxCommand } from "./LinuxCommand";
import { Navbar } from "./Navbar";
import { HeaderComponent } from "./StylesSheet";

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
        {/* <div>
          <Browser></Browser>
        </div> */}
        <HeroText></HeroText>
        <p id="paragraph-header">
          Zion is an OS for running a personal mini computer in your home.
          Self-host open source apps Bitcoin node, and more.
          <br></br>
          <br></br>
          Get the convenience of cloud, without giving up your data.
        </p>
        <GradientButton></GradientButton>
        <p id="header-last-line">Or install on any Ubuntu or Debian system:</p>
        <LinuxCommand></LinuxCommand>
      </div>
    </HeaderComponent>
  </>
);
