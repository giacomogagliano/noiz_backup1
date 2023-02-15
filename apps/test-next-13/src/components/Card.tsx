import React from "react";
import { StyledCard } from "./StylesSheet";

export const Card = () => (
  <StyledCard>
    <div id="feature-header">
      <h3 id="feature-heading">Run your private cloud with Nextcloud.</h3>
      <img src="../../assets/icon_4.svg" loading="lazy" id="feature-icon"></img>
    </div>
    <div id="feature-content">
      <div>
        <div id="text-area-card">
          <p id="paragraph-card">
            An entirely self-hosted Google Drive replacement — store your
            documents, calendar, contacts, photos and videos on your Umbrel with
            Nextcloud instead of Google’s servers.
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
