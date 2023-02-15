"use client";

import React from "react";
import styled, { css } from "styled-components";
import { Card } from "./Card";
import { VideoBox } from "./VideoBox";
import { Why } from "./Why";
import { Section as Sec } from "./Section";
import { WhyData } from "../pages/api/why";
import { Image18, TextSpan2 } from "./StylesSheet";

const ContentWrapper = css`
  overflow: hidden;
  flex-wrap: wrap;
  filter: blur(0px);
`;
export const Section = css`
  position: relative;
  overflow: hidden;
  margin-bottom: 0px;
  padding-top: 100px;
  padding-bottom: 100px;
  @media screen and (max-width: 479px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;
export const Dark = css`
  background-color: #f8f9fc;
`;
export const Container = css`
  position: relative;
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  max-width: 940px;
  @media screen and (max-width: 479px) {
    max-width: none;
  }
  @media screen and (max-width: 991px) {
    max-width: 728px;
  }
`;

export const BigHeading = css`
  margin-bottom: 40px;
  font-size: 70px;
  line-height: 86px;
  font-weight: 600;
  text-align: center;
  @media screen and (max-width: 479px) {
    font-size: 48px;
    line-height: 48px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 70px;
    line-height: 70px;
  }
`;
const WlayoutGrid = css`
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
  grid-row-gap: 16px;
  grid-column-gap: 16px;
  @media screen and (max-width: 767px) {
    display: block;
  }
`;

const SubHeading = css`
  margin-bottom: 70px;
  color: #9f9fa5;
  font-size: 40px;
  line-height: 50px;
  @media screen and (max-width: 479px) {
    margin-bottom: 70px;
    font-size: 30px;
    line-height: 36px;
  }
`;

const Grid5 = css`
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  grid-template-areas: "Area Area-2";
  -ms-grid-rows: auto;
  grid-template-rows: auto;
  @media screen and (max-width: 991px) {
    justify-items: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    grid-template-areas:
      "Area Area"
      "Area-3 Area-3";
    -ms-grid-rows: auto auto;
    grid-template-rows: auto auto;
  }
`;

const FullPageComponent = styled.div`
  /* #content-wrapper {
    ${ContentWrapper}
  } */
  /* #container {
    ${Container}
  } */
  /* #section {
    ${Section}
  } */
  /* #Dark {
    ${Dark}
  } */
  /* #big-heading {
    ${BigHeading}
  } */
  /* #why {
    ${Section}
    ${Dark}
  } */
  /* #image- {
    ${Image18}
  } */
  /* #text-span- {
    ${TextSpan2}
  } */
  /* #grid-card {
    ${WlayoutGrid}
    ${Grid5}
  } */
  /* #SubsHeading {
    ${SubHeading}
  } */
`;

export const FullPage = () => {
  return (
    <FullPageComponent>
      <div id="content-wrapper">
        {/* <Why data={why}></Why> */}
        {/* <Sec></Sec> */}
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
