"use client";
import styled, { css } from "styled-components";
import { Section, Container, BigHeading, SubHeading } from "./StylesSheet";

const WlayoutGrid = css`
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
  grid-row-gap: 16px;
  grid-column-gap: 16px;
  @media screen and (max-width: 767px) {
    display: block;
  }
`;

const Grid5 = css`
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  grid-template-areas: "Area Area-2";
  -ms-grid-rows: auto;
  grid-template-rows: auto;
  @media screen and (max-width: 991px) {
    justify-items: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    grid-template-areas:
      "Area Area"
      "Area-3 Area-3";
    -ms-grid-rows: auto auto;
    grid-template-rows: auto auto;
  }
`;
const TextSpan2 = css`
  box-decoration-break: clone;
`;

export const AreaSection = styled.div`
  /* padding: 20px; */
  ${Section}
  #container {
    ${Container}
  }
  #big-heading {
    ${BigHeading}
    #text-span- {
      ${TextSpan2}
    }
  }
  #SubsHeading {
    ${SubHeading}
    #text-span- {
      ${TextSpan2}
    }
  }
  #grid-card {
    ${WlayoutGrid}
    ${Grid5}
  }
`;
