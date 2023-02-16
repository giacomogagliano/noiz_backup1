"use client";

import React from "react";
import styled from "styled-components";
import { Card } from "../components/Card";
import {
  BigHeading,
  Container,
  Grid5,
  Section as Sec,
  SubHeading,
  WlayoutGrid,
} from "../lib/style/StylesSheet";

const Area = styled.div`
  /* padding: 20px; */
  ${Sec}
  #container {
    ${Container}
  }
  #big-heading {
    ${BigHeading}
  }
  #SubsHeading {
    ${SubHeading}
  }
  #grid-card {
    ${WlayoutGrid}
    ${Grid5}
  }
`;

export function Section() {
  return (
    <Area id="section">
      <div id="container">
        <h2 id="big-heading">
          Welcome to the <span id="text-span-">new internet.</span>
        </h2>
        <h3 id="SubsHeading">
          One that's powered by you. <span id="text-span-"></span>
        </h3>
        <div id="grid-card">
          <Card></Card>
        </div>
      </div>
    </Area>
  );
}
