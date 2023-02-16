import React, { use } from "react";
import { getData } from "../lib/getData";
import { StyledCard } from "../lib/style/Card.style";

const ENDPOINT = "http://localhost:3000/api/cards";

export interface CardApi {
  featureHeading: string;
  paragraph_text: string;
}
export class CardApi {
  constructor(props: CardApi) {
    this.featureHeading = props.featureHeading;
    this.paragraph_text = props.paragraph_text;
  }
}

export const Card = () => {
  const { featureHeading, paragraph_text } = use<CardApi>(getData(ENDPOINT));
  const FEAT_HEADER_ID = "feature-header";
  const FEAT_HEADING_ID = "feature-heading";
  const IMG_SRC = "../../assets/icon_4.svg";
  const IMG_LAZY = "lazy";
  const IMG_ID = "feature-icon";

  const FEAT_CONT = "feature-content";
  const FEAT_CONT_TEXT_AREA = "text-area-card";
  const FEAT_CONT_PARAGRAPH = "paragraph-card";
  const FEAT_CONT_SPACE = "space-area-card";
  const FEAT_CONT_IMG_ID = "feature-image";
  const FEAT_CONT_IMG_SRC = "../../assets/Group-1601.jpg";
  const FEAT_CONT_IMG_LOAD = "eager";
  return (
    <StyledCard>
      <div id={FEAT_HEADER_ID}>
        <h3 id={FEAT_HEADING_ID}>{featureHeading}</h3>
        <img id={IMG_ID} src={IMG_SRC} loading={IMG_LAZY}></img>
      </div>
      <div id={FEAT_CONT}>
        <div>
          <div id={FEAT_CONT_TEXT_AREA}>
            <p id={FEAT_CONT_PARAGRAPH}>{paragraph_text}</p>
          </div>
          <div id={FEAT_CONT_SPACE}></div>
        </div>
        <img
          id={FEAT_CONT_IMG_ID}
          src={FEAT_CONT_IMG_SRC}
          loading={FEAT_CONT_IMG_LOAD}
        ></img>
      </div>
      <div></div>
    </StyledCard>
  );
};
