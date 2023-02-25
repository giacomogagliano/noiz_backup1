"use client";
import React, { Component } from "react";
import styled from "styled-components";

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
  /* .fixed {
    position: fixed;
    color: black;
  } */
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
`;

export default class page extends Component {
  render() {
    return (
      <Div>
        {/* <div id="obs-root" className="quadrato centered viola">
          <div className="fixed trigger" id="obs-trigger">
            test
          </div>
        </div> */}
        <div>
          <div className="page">
            <div className="space blanchedalmond"></div>
            <div className="space aquamarine"></div>
            <div className="space bisque"></div>
          </div>
          <div className="page">
            <div className="sticky">sticky</div>
            <div className="space">ciao</div>
            {/* <div className="space blanchedalmond"></div>
            <div className="space aquamarine"></div>
            <div className="space bisque"></div> */}
          </div>
          <div className="space aquamarine"></div>
          <div className="space aquamarine"></div>
          <div className="space aquamarine"></div>
          <div className="space aquamarine"></div>
          <div className="space aquamarine"></div>
        </div>
      </Div>
    );
  }
  componentDidMount(): void {
    // const root = document.querySelector("#obs-root");
    // let element = document.getElementById("obs-trigger");
    // console.log("root", root.getBoundingClientRect());
    // window.root = root;
    // window.el = element;
    // const observer = new IntersectionObserver(
    //   entries => {
    //     console.log("entries", entries);
    //   },
    //   { root: root, rootMargin: "0px" }
    // );
    // console.log("element", element);
    // console.log("observer", observer);
    // observer.observe(element);
  }
}
