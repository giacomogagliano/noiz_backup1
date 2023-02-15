import React from "react";
import { StyledCard } from "./StylesSheet";

interface CardProps {
  featureHeading: string;
}
class CardProps {
  constructor(props: CardProps) {
    this.featureHeading = props.featureHeading;
  }
}

export const Card = ({ featureHeading }: CardProps) => {
  const FEATURE_HEADER = "feature-header";
  const FEATURE_HEADING = "feature-heading";
  return (
    <StyledCard>
      <div id={FEATURE_HEADER}>
        <h3 id={FEATURE_HEADING}>Run your private cloud with Nextcloud.</h3>
        <img
          src="../../assets/icon_4.svg"
          loading="lazy"
          id="feature-icon"
        ></img>
      </div>
      <div id="feature-content">
        <div>
          <div id="text-area-card">
            <p id="paragraph-card">
              An entirely self-hosted Google Drive replacement — store your
              documents, calendar, contacts, photos and videos on your Umbrel
              with Nextcloud instead of Google’s servers.
            </p>
          </div>
          <div id="space-area-card"></div>
        </div>
        <img
          src="../../assets/Group-1601.jpg"
          loading="eager"
          id="feature-image"
        ></img>
      </div>
      <div></div>
    </StyledCard>
  );
};
