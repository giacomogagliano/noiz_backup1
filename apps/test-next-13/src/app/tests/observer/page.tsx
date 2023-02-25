"use client";
import React, { Component } from "react";
import styled from "styled-components";
import {
  AbstractScroller,
  AbstractScrollerProps,
} from "../../../lib/client/Scroller";

// un elemento, arrivato ad un breapoint, effettua una
// mutazione
// elemento
// breakpoint
// mutazione
// stato A
// stato B
// (breakpoint)
abstract class AbstractScroller_v2<
  P,
  S extends AbstractScrollerProps
> extends AbstractScroller<P, S> {
  abstract breakpoints: Map<string, number>;
  abstract elements: Element;
  abstract callbacks: () => void;
}

const Div = styled.div`
  .page {
    display: grid;
    width: 100vw;
  }

  .sticky {
    position: sticky;
    top: 50vh;
  }
  /* .trigger {
    top: 0;
    left: 50vw;
  } */
  .fixed {
    position: fixed;
    top: 50vh;
  }
  .centered {
    place-self: center;
  }
  .quadrato {
    width: 100vw;
    height: 100px;
  }
  .viola {
    background-color: violet;
  }
  .aquamarine {
    background-color: aquamarine;
  }
  .bisque {
    background-color: bisque;
  }
  .blanchedalmond {
    background-color: #efeda6;
  }
  .fillHeight {
    height: 100vh;
  }
  .space {
    height: 50vh;
  }
  .relative {
    position: absolute;
    top: 0;
  }
`;

export default class page extends Component {
  render() {
    return (
      <Div>
        <div className="page fillHeight bisque"></div>
        <div id="root" style={{ height: "100px" }}>
          <div id="target" className="fixed">
            target
          </div>
        </div>
        <div className="page fillHeight blanchedalmond"></div>
      </Div>
    );
  }
  componentDidMount(): void {
    const root = document.querySelector("#root");
    const target = document.querySelector("#target");
    const observer = new IntersectionObserver(
      entries => {
        console.log("entries", entries);
      },
      { root: root, rootMargin: "0px" }
    );
    observer.observe(target);
  }
}
