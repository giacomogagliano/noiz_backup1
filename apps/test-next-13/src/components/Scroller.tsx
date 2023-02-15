"use client";

import React, { Component, FC } from "react";
import { FromTop } from "./StylesSheet";
interface Props {
  Component?: FC;
  initialTopPos: string;
  transition: string;
}
interface State {
  scrollPosition: number;
}
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
    return (
      <FromTop top={top} transition={this.props.transition}>
        <this.props.Component></this.props.Component>
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
