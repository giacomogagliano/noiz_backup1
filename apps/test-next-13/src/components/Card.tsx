"use client";
import React from "react";
import styled, { css } from "styled-components";
import {
  Paragraph,
  ParagraphTextLeft,
  TextWhite,
} from "../app/new-ui-test2/page";

// const Paragraph = css`
//   color: black;
//   text-align: center;
//   @media screen and (max-width: 479px) {
//     font-size: 20px;
//     line-height: 26px;
//   }
// `;
// const ParagraphParagraphTextLeft = css`
//   text-align: left;
//   position: relative;
//   z-index: 1;
//   margin-bottom: 10px;
//   text-align: left;
// `;

// const ParagraphTextLeft = css`
//   text-align: left;
// `;

const FeatureHeader = css`
  display: flex;
  margin-bottom: 0px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 991px) {
    top: -80px;
  }
`;
const FeatureHeading = css`
  color: #0082c9;
  display: block;
  margin-top: 0px;
  margin-right: 20px;
  margin-bottom: 40px;
  font-size: 24px;
  line-height: 29px;
  font-weight: 600;
  @media screen and (max-width: 479px) {
    margin-right: 30px;
    margin-bottom: 30px;
    font-size: 20px;
    line-height: 26px;
  }
`;
const FeatureIcon = css`
  width: 100%;
  max-width: 120px;
  border-radius: 22%;
  box-shadow: 3px 3px 20px 0 rgb(0 0 0 / 20%);
  transform: translate(0px, -70%);
  box-shadow: 3px 3px 20px 0 rgb(46 120 230 / 47%);
  @media screen and (max-width: 479px) {
    max-width: 80px;
    margin-right: -10px;
    margin-left: -20px;
    transform: translate(0px, -80%);
  }
`;
const FeatureContent = css`
  display: flex;
  overflow: hidden;
  margin-right: -51px;
  margin-bottom: -1px;
  margin-left: -50px;
  padding-left: 50px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  flex: 1;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  @media screen and (max-width: 479px) {
    margin-right: -31px;
    margin-bottom: -43px;
    margin-left: -30px;
    padding-left: 30px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }
`;
const Column12 = css`
  @media screen and (max-width: 479px) {
    padding-right: 0px;
    padding-left: 0px;
  }
`;
const WColumn = css`
  position: relative;
  float: left;
  width: 100%;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (max-width: 767px) {
    width: 100%;
    left: auto;
    right: auto;
  }
  @media screen and (max-width: 479px) {
    width: 100%;
  }
`;
const WColumn10 = css`
  width: 83.33333333%;
`;
const WColumn2 = css`
  width: 16.66666667%;
`;
const FeatureImage = css`
  position: static;
  width: 100%;
  max-width: 500px;
  margin-top: 40px;
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 6px;
  box-shadow: 1px 1px 30px 0 rgb(0 0 0 / 15%);
  @media screen and (max-width: 479px) {
    margin-top: 40px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;
const StyledCard = styled.div`
  display: flex;
  overflow: visible;
  padding-top: 50px;
  padding-right: 50px;
  padding-left: 50px;
  flex-direction: column;
  border-style: solid;
  border-width: 1px;
  border-color: #e9ebee;
  border-radius: 40px;
  background-color: #fff;
  box-shadow: 1px 1px 60px 0 rgb(0 0 0 / 15%);
  @media screen and (max-width: 479px) {
    margin-bottom: 0px;
    padding: 40px 30px;
    border-radius: 30px;
  }
  @media screen and (max-width: 991px) {
    max-width: 600px;
  }
  #feature-header {
    ${FeatureHeader}
  }
  #feature-heading {
    ${FeatureHeading}
  }
  #feature-icon {
    ${FeatureIcon}
  }
  #feature-content {
    ${FeatureContent}
  }
  .column-12 {
    ${Column12}
  }
  .w-col {
    ${WColumn}
  }
  .w-col-10 {
    ${WColumn10}
  }
  #text-area-card {
    ${Column12}
    ${WColumn}
    ${WColumn10}
  }
  #space-area-card {
    ${WColumn}
    ${WColumn2}
  }
  .w-col-2 {
    ${WColumn2}
  }
  #feature-image {
    ${FeatureImage}
  }
  #paragraph-card {
    ${Paragraph}
    ${ParagraphTextLeft}
  }
`;

export const Card = () => (
  <StyledCard>
    <div id="feature-header">
      <h3 id="feature-heading">Run your private cloud with Nextcloud.</h3>
      <img src="./assets/icon_4.svg" loading="lazy" id="feature-icon"></img>
    </div>
    <div id="feature-content">
      <div>
        <div id="text-area-card">
          <p id="paragraph-card">
            An entirely self-hosted Google Drive replacement — store your
            documents, calendar, contacts, photos and videos on your Umbrel with
            Nextcloud instead of Google’s servers.
          </p>
        </div>
        <div id="space-area-card"></div>
      </div>
      <img
        src="./assets/Group-1601.jpg"
        loading="eager"
        id="feature-image"
      ></img>
    </div>
    <div></div>
  </StyledCard>
);
