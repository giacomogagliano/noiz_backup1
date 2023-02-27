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
import { IconZion } from "../lib/style/Body.style";

const HERO_ID = "hero";
const HEADER_ID = "header";
const FIRST_TITLE_TRIGGER_KEY = "#hero-text";
const HERO_TXT_ID = "hero-text";
const TXT_SPAN_ID = "text-span";
const FIRST_LINE_FIRST_TITLE = "Goodbye, big tech.";
const SECOND_LINE_FIRST_WORD_FIRST_TITLE = "Welcome,";
const SECOND_LINE_ALL_WORDS_FIRST_TITLE = "your data at your own home.";
const PARAGRAPH_HEADER_ID = "paragraph-header";
const PARAGRAPH_HEADER_FIRST_LINE_TXT =
  "Zion is an OS for running a personal mini computer in your home. Self-host open source apps Bitcoin node, and more.";
const PARAGRAPH_HEADER_SECOND_LINE_TXT =
  "Get the convenience of cloud, without giving up your data.";
const GRADIENT_BUTTON_TRIGGER_KEY = "#gradient-button";
const GRADIENT_BUTTON_ID = "gradient-button";
const GRADIENT_BUTTON_EFFECT = "button-effect";
const GRADIENT_BUTTON_EFFECT_KEY = "ooo";
const GRADIENT_BUTTON_TXT_ID = "button-text";
const GRADIENT_BUTTON_TXT = "INSTALL ON MINI PC";
const GRADIENT_BUTTON_SRC_ICON = "assets/long-arrow.svg";
const GRADIENT_BUTTON_ICON_LOADING_TYPE = "lazy";
const GRADIENT_BUTTON_ICON_ALT = "";
const PARAGRAPH_HEADER_LAST_LINE_ID = "header-last-line";
const PARAGRAPH_HEADER_LAST_LINE = "Or install on any Ubuntu or Debian system:";

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
      <div id={HERO_ID}>
        <div id={HEADER_ID}>
          <Navbar></Navbar>
        </div>
        <div>
          <Browser></Browser>
        </div>
        <AppearFromBottomLoader triggerKey={FIRST_TITLE_TRIGGER_KEY}>
          <HeroTextStyle id={HERO_TXT_ID}>
            {FIRST_LINE_FIRST_TITLE}
            <br />
            {SECOND_LINE_FIRST_WORD_FIRST_TITLE}
            <span id={TXT_SPAN_ID}>{SECOND_LINE_ALL_WORDS_FIRST_TITLE}</span>
            <span id={TXT_SPAN_ID}></span>
            <span id={TXT_SPAN_ID}></span>
          </HeroTextStyle>
        </AppearFromBottomLoader>
        <p id={PARAGRAPH_HEADER_ID}>
          {PARAGRAPH_HEADER_FIRST_LINE_TXT}
          <br></br>
          <br></br>
          {PARAGRAPH_HEADER_SECOND_LINE_TXT}
        </p>
        <AppearFromBottomLoader triggerKey={GRADIENT_BUTTON_TRIGGER_KEY}>
          <GradientButtonStyle id={GRADIENT_BUTTON_ID}>
            <a id={GRADIENT_BUTTON_EFFECT} key={GRADIENT_BUTTON_EFFECT_KEY}>
              <div id={GRADIENT_BUTTON_TXT_ID}>{GRADIENT_BUTTON_TXT}</div>
              <IconZion arrowRight></IconZion>
            </a>
          </GradientButtonStyle>
        </AppearFromBottomLoader>
        <p id={PARAGRAPH_HEADER_LAST_LINE_ID}>{PARAGRAPH_HEADER_LAST_LINE}</p>
        <LinuxCommand></LinuxCommand>
      </div>
    </HeaderComponent>
  </>
);
