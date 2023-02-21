"use client";
import React, { Component } from "react";
import styled, { css } from "styled-components";

import { Loader } from "../lib/client/Loader";
import { NewLoader } from "../lib/client/NewLoader";
import { TextSpan2 } from "../lib/style/Section.style";
import { BigHeading, SubHeading } from "../lib/style/StylesSheet";

// interface TextBigSubProps {
//   parallaxSharedY: string;
// }

// type TextBigSubState = {
//   opacity: string;
//   opacity2: string;
//   transform: string;
//   transform2: string;
// };

// const Trigger = styled.div<Pick<TextBigSubState, "opacity" | "transform">>`
//   #big-heading {
//     ${BigHeading}
//     opacity: ${props => props.opacity};
//     transform: translateY(${props => props.transform});
//     transition: transform 400ms ease-in-out, opacity 400ms ease-out;
//     #text-span- {
//       ${TextSpan2}
//     }
//   }
//   #SubsHeading {
//     ${SubHeading}
//     opacity: ${props => props.opacity};
//     transform: translateY(${props => props.transform});
//     transition: transform 400ms ease-in-out, opacity 400ms ease-out;
//     #text-span- {
//       ${TextSpan2}
//     }
//   }
// `;

export class TextBigSub extends Component<TextBigSubProps, TextBigSubState> {
  constructor(props: TextBigSubProps) {
    super(props);
    this.state = {
      opacity: "0",
      opacity2: "0",

      transform: props.parallaxSharedY,
      transform2: props.parallaxSharedY,
    };
  }

  render(): React.ReactNode {
    // const Element = (
    //   <Trigger
    //     key={0}
    //     id="text-big-sub"
    //     opacity={this.state.opacity}
    //     transform={this.state.transform}
    //   >
    //     <h2 id="big-heading">
    //       Welcome to the <span id="text-span-">new Era of internet.</span>
    //     </h2>
    //   </Trigger>
    // );
    // const Element2 = (
    //   <Trigger
    //     key={1}
    //     id="text-big-sub2"
    //     opacity={this.state.opacity2}
    //     transform={this.state.transform2}
    //   >
    //     <h3 id="SubsHeading">
    //       One that's powered by you. <span id="text-span-"></span>
    //     </h3>
    //   </Trigger>
    // );
    return (
      <>
        <NewLoader
          stateB="opacity: 0; transform: translateY(40px); transition: transform 400ms ease-in-out, opacity 400ms ease-out;
        "
          stateA="opacity: 1; transform: translateY(0); transition: transform 400ms ease-in-out, opacity 400ms ease-out;
        "
          triggerKey="#big-heading"
          threshold={1}
        >
          <h2 id="big-heading">
            Welcome to the <span id="text-span-">new Era of internet.</span>
          </h2>
        </NewLoader>
        <NewLoader
          stateB="opacity: 0; transform: translateY(40px); transition: transform 400ms ease-in-out, opacity 400ms ease-out;
          "
          stateA="opacity: 1; transform: translateY(0); transition: transform 400ms ease-in-out, opacity 400ms ease-out;
          "
          triggerKey="#SubsHeading"
          threshold={1}
        >
          <h3 id="SubsHeading">
            One that's powered by you. <span id="text-span-"></span>
          </h3>
        </NewLoader>
      </>
    );
  }
  cb = (entry: IntersectionObserverEntry) => {
    entry;
    if (entry.intersectionRect.y !== 20)
      if (entry.isIntersecting)
        this.setAttributes({
          opacity: "1",
          transform: "0",
        });
      else
        this.setAttributes({
          opacity: "0",
          transform: this.props.parallaxSharedY,
        });
  };
  cb2 = (entry: IntersectionObserverEntry) => {
    console.log(entry.intersectionRect.y);

    if (entry.intersectionRect.y !== 90)
      if (entry.isIntersecting)
        this.setAttributes2({
          opacity2: "1",
          transform2: "0",
        });
      else
        this.setAttributes2({
          opacity2: "0",
          transform2: this.props.parallaxSharedY,
        });
  };
  setAttributes = ({
    opacity,
    transform,
  }: Pick<TextBigSubState, "opacity" | "transform">) =>
    this.setState({ opacity, transform });
  setAttributes2 = ({
    opacity2,
    transform2,
  }: Pick<TextBigSubState, "opacity2" | "transform2">) =>
    this.setState({ opacity2, transform2 });
}
