import React from "react";
import styled from "styled-components";
import { Card } from "./Card";
import { VideoBox } from "./VideoBox";

const FullPageComponent = styled.div`
  .content-wrapper {
    overflow: hidden;
    flex-wrap: wrap;
    filter: blur(0px);
    .section {
      position: relative;
      overflow: hidden;
      margin-bottom: 0px;
      padding-top: 100px;
      padding-bottom: 100px;
      @media screen and (max-width: 479px) {
        padding-top: 40px;
        padding-bottom: 40px;
      }
      &.dark {
        background-color: #f8f9fc;
      }
      .container {
        position: relative;
        width: 90vw;
        max-width: 1100px;
        &.w-container {
          margin-left: auto;
          margin-right: auto;
          max-width: 940px;
          @media screen and (max-width: 479px) {
            max-width: none;
          }
          @media screen and (max-width: 991px) {
            max-width: 728px;
          }
          .big-heading {
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
          }
          .sub-heading {
            margin-bottom: 70px;
            color: #9f9fa5;
            font-size: 40px;
            line-height: 50px;
            @media screen and (max-width: 479px) {
              margin-bottom: 70px;
              font-size: 30px;
              line-height: 36px;
            }
          }

          .w-layout-grid {
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
            .grid-5 {
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
            }
          }
        }
      }
    }
  }
`;

export const FullPage = () => {
  const videoHref = "https://www.youtube.com/watch?v=kmSs2YLChng&t=11s";
  const iconSrc = "https://i.imgur.com/trXdlO5.png";
  const videoSrc = "https://i.imgur.com/JFknZrb.mp4";

  return (
    <FullPageComponent>
      <div className="content-wrapper">
        <div id="why" className="section dark ">
          <div className="container w-container">
            <h2 className="big-heading">De-google yourself.</h2>
            <VideoBox
              href={videoHref}
              icon={{ src: iconSrc }}
              video={{ src: videoSrc }}
            ></VideoBox>
            {/* href={videoHref} */}
            <p className="paragraph">
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
            <img className="image-18"></img>
          </div>
        </div>
        <div id="what" className="section ">
          <div className="container w-container">
            <h2 className="big-heading mb-20">
              Welcome to the <span className="text-span-2">new internet.</span>
            </h2>
            <h3 className="sub-heading text-center mb-80">
              One that's powered by you. <span className="text-span-2"></span>
            </h3>
            <div className="w-layout-grid grid-5">
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
