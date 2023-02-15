import React, { Suspense, use } from "react";
import { WhyData } from "../pages/api/why";
// import {
//   Area,
//   BigHeading,
//   Container,
//   Dark,
//   Image18,
//   Paragraph,
//   Section,
// } from "./StylesSheet";
import { VideoBox } from "./VideoBox";

const ENDPOINT = "http://localhost:3001/api/why";

async function getData() {
  const res = await fetch(ENDPOINT);
  await new Promise(res => setTimeout(res, 4000));
  if (!res.ok) {
    throw new Error("Failed fetching");
  }
  return res.json();
}

export function Why() {
  const data: WhyData = use(getData());
  // const { heading, videoHref, iconSrc, videoSrc, paragraph } = data;
  return (
    <div id="container-why">
      ciao
      {/* <h2 id="big-heading-why">{heading}</h2>
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
      </p> */}
      {/* <img id="image-"></img> */}
    </div>
    // <Area>
    // </Area>
  );
}
