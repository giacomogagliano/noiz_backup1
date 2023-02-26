import React, { use } from "react";
import { WhyData } from "../pages/api/why";
import { VideoBox } from "./VideoBox";
import { AreaWhy } from "../lib/style/Why.style";
import { getData } from "../lib/getData";

const ENDPOINT = "http://localhost:3000/api/why";
const CONTAINER_WHY_ID = "container-why";
const BIG_HEADING_WHY_ID = "big-heading-why";
const PARAGRAPH_WHY_ID = "paragraph-why";

export function Why() {
  const data: WhyData = use(getData(ENDPOINT));
  const { heading, videoHref, iconSrc, videoSrc, paragraph } = data;
  return (
    <AreaWhy>
      <div id={CONTAINER_WHY_ID}>
        <h2 id={BIG_HEADING_WHY_ID}>{heading}</h2>
        <VideoBox
          href={videoHref}
          icon={{ src: iconSrc }}
          video={{ src: videoSrc }}
        ></VideoBox>
        <p id={PARAGRAPH_WHY_ID}>
          {paragraph.a}
          <br></br>
          <br></br>
          {paragraph.b}
        </p>
        {/* <img id="image-"></img> */}
      </div>
    </AreaWhy>
  );
}
