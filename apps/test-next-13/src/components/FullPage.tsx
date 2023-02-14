"use client";

import React from "react";
import styled, { css } from "styled-components";
import {
  Image18,
  SudingbHea,
  TextCenter,
  TextSpan,
  TextSpan2,
} from "../app/new-ui-test2/page";
import { Card } from "./Card";
import { VideoBox } from "./VideoBox";

const ContentWrapper = css`
  overflow: hidden;
  flex-wrap: wrap;
  filter: blur(0px);
`;
const Section = css`
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
const Dark = css`
  background-color: #f8f9fc;
`;
const Container = css`
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

const BigHeading = css`
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
  #content-wrapper {
    ${ContentWrapper}
  }
  #container {
    ${Container}
  }
  #section {
    ${Section}
  }
  #Dark {
    ${Dark}
  }

  #big-heading {
    ${BigHeading}
  }
  #why {
    ${Section}
    ${Dark}
  }
  #image- {
    ${Image18}
  }
  #text-span- {
    ${TextSpan2}
  }
  #grid-card {
    ${WlayoutGrid}
    ${Grid5}
  }
  #SubsHeading {
    ${SubHeading}
  }
`;

export const FullPage = () => {
  const videoHref = "https://www.youtube.com/watch?v=kmSs2YLChng&t=11s";
  const iconSrc = "https://i.imgur.com/trXdlO5.png";
  const videoSrc = "https://i.imgur.com/JFknZrb.mp4";

  return (
    <FullPageComponent>
      <div id="content-wrapper">
        <div id="why">
          <div id="container">
            <h2 id="big-heading">De-google yourself.</h2>
            <VideoBox
              href={videoHref}
              icon={{ src: iconSrc }}
              video={{ src: videoSrc }}
            ></VideoBox>
            <p id="paragraph">
              All of our interactions on the internet today are mediated by a
              few companies who offer “free” services in exchange for storing
              our data on their servers to spy on us.
              <br></br>
              <br></br>
              Running a personal server fundamentally changes that. You and your
              family’s photos, videos, files, notes, passwords — everything,
              have nothing to do with someone else’s computer. They’re a part of
              your private life, and now they can all be stored by you, on your
              personal server.
            </p>
            <img id="image-"></img>
          </div>
        </div>
        <div id="section ">
          <div id="container">
            <h2 id="big-heading">
              Welcome to the <span id="text-span-">new internet.</span>
            </h2>
            <h3 id="SubsHeading">
              One that's powered by you. <span id="text-span-"></span>
            </h3>
            <div id="grid-card">
              <Card></Card>
            </div>
          </div>
        </div>
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
