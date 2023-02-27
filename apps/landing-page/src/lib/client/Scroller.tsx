"use client";

import React, { Component } from "react";
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
  <Navbar
    bgcolor="rgba(255, 255, 255, 0.8)"
    buttonBgColor="#5351fb"
    color="white"
    stickyColor="black"
  ></Navbar>
);

const components = new Map();
components.set("navbar", Nav);

export const FromTop = styled.div<{ top?: string; transition?: string }>`
  position: fixed;
  top: ${props => props.top};
  transition: top 0.5s;
  z-index: 999;
  width: 100%;
  border-bottom: 0.1px solid rgba(44, 44, 44, 0.1);
  backdrop-filter: blur(3px);
`;

export interface AbstractScrollerProps {
  scrollPosition: number;
}
export abstract class AbstractScroller<
  P,
  S extends AbstractScrollerProps
> extends Component<P, S> {
  setScrollPosition = (scrollPosition: number) =>
    this.setState({ scrollPosition });
}

export default class Scroller extends AbstractScroller<Props, State> {
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
}
