import React, { Suspense } from "react";
import { FullPageComponent } from "../lib/style/StylesSheet";
import { Why } from "./Why";
import { Section } from "./Section";

export const FullPage = () => {
  return (
    <FullPageComponent>
      <div id="content-wrapper">
        <Suspense fallback={<div>loading</div>}>
          <Why></Why>
        </Suspense>
        <Suspense fallback={<div>loading</div>}>
          <Section></Section>
        </Suspense>
        <div id="what" className="section dark "></div>
        <div id="what" className="section "></div>
        <div id="app-store" className="section "></div>
        <div id="apps" className=""></div>
        <div id="develop" className="section dark  "></div>
        <div id="start" className="section "></div>
        <div id="features" className="section dark "></div>
        <div id="community" className="section "></div>
        <div id="signup" className="section dark section-2 "></div>
        <div className="section dark social-section"></div>
        <div id="faq" className="section hidden "></div>
        <div id="footer" className="footer "></div>
      </div>
    </FullPageComponent>
  );
};
