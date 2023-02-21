"use client";

import React, { Component, FC } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { Loader } from "../lib/client/Loader";

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
  colo: string;
};
const gradientButton = css<gradientButtonType>`
  display: grid;
  padding: 10px 20px;
  justify-content: space-around;
  color: ${props => props.colo};
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

export class NewLoader<
  S,
  E extends (props: S) => JSX.Element = (props: S) => JSX.Element,
  P = {}
> extends Component<P, S> {
  constructor(props: P) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <>
        <Loader
          triggerkey={this.triggerKey ? this.triggerKey : ""}
          cb={this.cb}
          threshold={1}
        >
          {[
            this.Element({ ...this.state }),
            this.Element({ ...this.state }),
            this.Element({ ...this.state }),
          ]}
        </Loader>
      </>
    );
  }
  triggerKey: string;
  Element: E;
  stateA: FlattenSimpleInterpolation;
  stateB: FlattenSimpleInterpolation;
  cb = (entry: IntersectionObserverEntry) => {
    function setValue(value: string) {
      entry.target.setAttribute("style", value);
    }
    if (entry.isIntersecting) setValue(this.stateA as unknown as string);
    else setValue(this.stateB as unknown as string);
  };
  formatId() {
    return this.triggerKey.replace("#", "");
  }
  setAttributes = (state: S) => this.setState(state);
}

export class GradientButton extends NewLoader<gradientButtonType> {
  constructor(props: {}) {
    super(props);
    this.triggerKey = "#trigger-btn";
    this.stateA = css`
      opacity: 1;
      transform: 0;
    `;
    this.stateB = css`
      opacity: 0;
      transform: translateY(30px);
    `;
  }

  Element = (props: gradientButtonType) => (
    <Trigger key={"cidi"} id={this.formatId()} {...props}>
      <a id="button-effect" key={"ooo"}>
        <div id="button-text">INSTALL ON MINI PC</div>
        <img src="assets/long-arrow.svg" loading="lazy" alt=""></img>
      </a>
    </Trigger>
  );
}
