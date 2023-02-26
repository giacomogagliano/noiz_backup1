"use client";

import React from "react";
import styled from "styled-components";
import { Loader } from "../../../lib/client/Loader";

export const Style = styled.div`
  /* position: fixed; */
  color: green;
  .trigger-class {
    transition: background-color 1s;
    background-color: white;
    &.show {
      background-color: red;
    }
  }
`;
export default function page() {
  const Element = ({ id }) => (
    <Style>
      <div key={0} id={id} className="trigger-class">
        sono l'elemento
      </div>
    </Style>
  );
  const cb = (entry: IntersectionObserverEntry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
    // entry.target.setAttribute("style", "background-color: red;");
  };
  const JSXElement = <Element key={0} id="trigger"></Element>;
  return (
    <>
      <div
        style={{ width: "100%", height: "1000px", backgroundColor: "orange" }}
      ></div>
      <Loader
        triggerkey={".trigger-class"}
        elements={[JSXElement]}
        cb={cb}
        threshold={1}
      ></Loader>
      <div
        id="merda"
        style={{ width: "100%", height: "1000px", backgroundColor: "cyan" }}
      ></div>
    </>
  );
}