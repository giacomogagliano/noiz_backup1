"use client";

import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Loader } from "./Loader";

const buttonHero = css`
  color: black;
  margin-top: 40px;
  margin-bottom: 40px;
  padding-top: 12px;
  padding-bottom: 15px;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  border-radius: 8px;
  background-color: #fff;
  background-image: none;
  box-shadow: 0 1px 15px 0 rgb(0 0 0 / 68%);
  @media screen and (max-width: 479px) {
    display: flex;
    margin-top: 10px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }
  @media screen and (max-width: 991px) {
    display: block;
  }
`;
const linkBlock = css`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
type gradientButtonType = {
  opacity: string;
  transform: string;
};
const gradientButton = css<gradientButtonType>`
  display: grid;
  padding: 10px 20px;
  justify-content: space-around;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  border-radius: 4px;
  background-image: linear-gradient(190deg, #8584ff, #5351fb);
  box-shadow: 0 1px 15px 0 #e2e3e4;
  opacity: ${props => props.opacity};
  transition: all cubic-bezier(0.46, 0.35, 0.59, 0.85) 500ms;
  transform: translateY(${props => props.transform});
  text-decoration: none;
`;
const buttonText = css`
  display: inline-block;
  padding-right: 60px;
  color: #1d1d1f;
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-decoration: none;
  text-transform: uppercase;
  @media screen and (max-width: 479px) {
    padding-right: 0px;
    font-size: 14px;
    line-height: 22px;
  }
`;

const Trigger = styled.div<gradientButtonType>`
  ${gradientButton}
  ${linkBlock}
  ${buttonHero}

  /* #button-effect {
  } */

  #button-text {
    ${buttonText}
  }
`;

interface Props {}
interface State {
  opacity: string;
  transform: string;
}

export class GradientButton extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      opacity: "0",
      transform: "30px",
    };
  }

  render(): React.ReactNode {
    const Element = (
      <Trigger
        key={0}
        id="trigger-btn"
        opacity={this.state.opacity}
        transform={this.state.transform}
      >
        <a id="button-effect">
          <div id="button-text">INSTALL ON MINI PC</div>
          <img src="assets/long-arrow.svg" loading="lazy" alt=""></img>
        </a>
      </Trigger>
    );
    return (
      <>
        <Loader
          triggerkey="#trigger-btn"
          elements={[Element]}
          cb={this.cb}
          threshold={1}
        ></Loader>
      </>
    );
  }
  cb = (entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting)
      this.setAttributes({
        opacity: "1",
        transform: "0",
      });
    else
      this.setAttributes({
        opacity: "0",
        transform: "30px",
      });
  };
  setAttributes = ({ opacity, transform }: State) =>
    this.setState({ opacity, transform });
}
