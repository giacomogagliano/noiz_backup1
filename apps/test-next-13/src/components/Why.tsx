import React, { use } from "react";
import { WhyData } from "../pages/api/why";
import { VideoBox } from "./VideoBox";
import { Area } from "../lib/style/StylesSheet";
import { getData } from "../lib/getData";

const ENDPOINT = "http://localhost:3000/api/why";

export function Why() {
  const data: WhyData = use(getData(ENDPOINT));
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
