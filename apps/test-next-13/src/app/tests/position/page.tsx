"use client";

import React from "react";
import styled, { css } from "styled-components";

const downright = css`
  top: 100px;
  right: -100px;
`;

const relative = css`
  position: relative;
`;

const absolute = css`
  position: absolute;
`;

const Page = styled.div<{ color: string }>`
  background-color: ${props => props.color};
  height: 100vh;
`;

const Sticky = styled.div`
  position: fixed;
  z-index: 1;
`;

const Div1 = styled.div`
  background-color: antiquewhite;
  color: black;
  ${relative}
  ${downright}
`;

const Div2 = styled.div`
  ${absolute}
  z-index: 0;
  background-color: beige;
  color: black;
  left: 30px;
  top: 30px;
`;

export default function page() {
  return (
    <>
      <Sticky>ciao</Sticky>
      <Page color="orange">
        <Div2>
          <Div1>ciaomamm</Div1>
        </Div2>
      </Page>
      <Page color="blue"></Page>
    </>
  );
}
