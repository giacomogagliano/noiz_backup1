"use client";

import React, { Suspense, use } from "react";
import { WhyData } from "../pages/api/why";

import { VideoBox } from "../components/VideoBox";
import styled, { css } from "styled-components";
import {
  BigHeading,
  Container,
  Dark,
  Image18,
  Paragraph,
  Section,
} from "../components/StylesSheet";

const ENDPOINT = "http://localhost:3000/api/why";

export const Area = styled.div`
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

async function getData() {
  const res = await fetch(ENDPOINT);
  if (!res.ok) {
    throw new Error("Failed fetching");
  }
  return res.json();
}

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
