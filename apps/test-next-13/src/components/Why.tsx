"use client";

import React, { Suspense, use } from "react";
import styled from "styled-components";
import { WhyData } from "../pages/api/why";
import { BigHeading, Container, Dark, Section } from "./FullPage";
import { Image18, Paragraph } from "./StylesSheet";
import { VideoBox } from "./VideoBox";

const ENDPOINT = "http://localhost:3001/api/why";

async function getData() {
  const res = await fetch(ENDPOINT, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed fetching");
  }
  return res.json();
}

const Area = styled.div`
  ${Section}
  ${Dark}
  #container-why {
    ${Container}
    #big-heading-why {
      ${BigHeading}
    }
    #paragraph-why {
      ${Paragraph}
    }
    #image- {
      ${Image18}
    }
  }
`;

export function Why() {
  const data: WhyData = use(getData());
  const { heading, videoHref, iconSrc, videoSrc, paragraph } = data;
  return (
    <Area>
      <div id="container-why">
        <h2 id="big-heading-why">{heading}</h2>
        <VideoBox
          href={videoHref}
          icon={{ src: iconSrc }}
          video={{ src: videoSrc }}
        ></VideoBox>
        <p id="paragraph-why">
          {paragraph.a}
          <br></br>
          <br></br>
          {paragraph.b}
        </p>
        {/* <img id="image-"></img> */}
      </div>
    </Area>
  );
}
