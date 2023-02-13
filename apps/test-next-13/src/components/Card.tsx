import React from "react";
import styled from "styled-components";

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
    display: flex;
    margin-bottom: 0px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    @media screen and (max-width: 991px) {
      top: -80px;
    }
  }
  #feature-heading {
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
  }
  #feature-icon {
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
  }
  #feature-content {
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
  }
  .column-12 {
    @media screen and (max-width: 479px) {
      padding-right: 0px;
      padding-left: 0px;
    }
  }
  .w-col {
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
  }
  .w-col-10 {
    width: 83.33333333%;
  }

  .w-col-2 {
    width: 16.66666667%;
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
        <div className="column-12 w-col w-col-10">
          <p className="paragraph text-left">
            An entirely self-hosted Google Drive replacement — store your
            documents, calendar, contacts, photos and videos on your Umbrel with
            Nextcloud instead of Google’s servers.
          </p>
        </div>
        <div className="w-col w-col-2"></div>
      </div>
      <img
        src="./assets/Group-1601.jpg"
        loading="eager"
        className="feature-image"
      ></img>
    </div>
    <div></div>
  </StyledCard>
);
