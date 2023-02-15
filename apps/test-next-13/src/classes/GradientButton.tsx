"use client";

import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Loader } from "./Loader";

const buttonHero = css`
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
  triggerButtonToTop: string;
  triggerButtonTransform: string;
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
  opacity: ${props => props.triggerButtonToTop};
  transition: opacity 500ms, transform 500ms;
  transform: translateY(${props => props.triggerButtonTransform});
  text-decoration: none;
`;

const Trigger = styled.div`
  ${gradientButton}
  ${linkBlock}
  ${buttonHero}
`;

interface Props {}
interface State {
  opacity: string;
  transform: Function;
}

export class GradientButton extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      opacity: "0",
      transform: tarnslateY(),
    };
  }

  render(): React.ReactNode {
    const Element = (
      <Trigger
        key={0}
        id="hero-text"
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
          triggerkey="#button-effect"
          elements={[Element]}
          cb={this.cb}
          threshold={0}
        ></Loader>
      </>
    );
  }
  cb = (entry: IntersectionObserverEntry) => {
    this.setAttributes({
      opacity: "1",
      transform: translateY(),
    });
  };
  setAttributes = ({ opacity, transform }: State) =>
    this.setState({ opacity, transform });
}
