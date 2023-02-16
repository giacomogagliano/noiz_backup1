"use client";

import React, { Component, FC } from "react";
import styled from "styled-components";
import { Navbar } from "../../components/Navbar";

interface Props {
  Component?: "navbar";
  initialTopPos: string;
  transition: string;
}
interface State {
  scrollPosition: number;
}

const Nav = () => (
  <Navbar bgcolor="white" buttonBgColor="#5351fb" color="white"></Navbar>
);

const components = new Map();
components.set("navbar", Nav);

export const FromTop = styled.div<{ top?: string; transition?: string }>`
  position: fixed;
  top: ${props => props.top};
  transition: top 0.5s;
  z-index: 1;
  width: 100%;
`;

export default class Scroller extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      scrollPosition: 0,
    };
  }
  render(): React.ReactNode {
    let top: string;
    if (this.state.scrollPosition > 450) top = "0";
    else top = this.props.initialTopPos;
    const Component = components.get(this.props.Component);
    return (
      <FromTop top={top} transition={this.props.transition}>
        <Component></Component>
      </FromTop>
    );
  }
  componentDidMount(): void {
    window.addEventListener("scroll", () => {
      this.setScrollPosition(window.scrollY);
    });
  }
  setScrollPosition = (scrollPosition: number) =>
    this.setState({ scrollPosition });
}
