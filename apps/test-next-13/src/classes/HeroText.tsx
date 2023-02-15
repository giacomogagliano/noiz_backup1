"use client";

import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Loader } from "./Loader";

const Heading = css`
  margin-bottom: 40px;
  font-size: 90px;
  line-height: 96px;
  font-weight: 600;
  text-align: center;
  color: white;
`;
const HeadingHero = css<{ top: string; opacity: string }>`
  position: relative;
  top: ${props => {
    return props.top;
  }};
  opacity: ${props => props.opacity};
  transition: opacity top 1s;
  max-width: 1000px;
  margin-right: 1.6rem;
  margin-left: 1.6rem;
  font-size: 70px;
  line-height: 86px;
  @media screen and (max-width: 479px) {
    font-size: 50px;
    line-height: 54px;
  }
`;

const Trigger = styled.div`
  ${Heading}
  ${HeadingHero}
`;

interface Props {}
interface State {
  opacity: string;
  top: string;
}

export class HeroText extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      opacity: "1",
      top: "0px",
    };
  }

  render(): React.ReactNode {
    const Element = (
      <Trigger id="hero-text" opacity={this.state.opacity} top={this.state.top}>
        Goodbye, big tech.
        <br />
        Welcome, <span id="text-span">your data at your own home.</span>
        <span id="text-span"></span>
        <span id="text-span"></span>
      </Trigger>
    );

    return (
      <>
        <Loader
          triggerkey="#hero-text"
          elements={[Element]}
          cb={this.cb}
          threshold={0}
        ></Loader>
      </>
    );
  }
  cb = (entry: IntersectionObserverEntry) => {
    this.setAttributes({ opacity: "0", top: "30px" });
  };
  setAttributes = ({ opacity, top }: State) => this.setState({ opacity, top });
}
