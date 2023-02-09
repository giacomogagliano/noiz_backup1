import React from "react";
import styled from "styled-components";

const CardComponent = styled.div``;

export const Card = () => (
  <CardComponent>
    {" "}
    <div className="feature-card">
      <div className="feature-header">
        <h3 className="feature-heading feature-heading-nextcloud">
          Run your private cloud with Nextcloud.
        </h3>
        <img
          src="./assets/icon_4.svg"
          loading="lazy"
          className="feature-icon feature-icon-nextcloud"
        ></img>
      </div>
      <div className="feature-content">
        <div className="columns-3 w-row">
          <div className="column-12 w-col w-col-10">
            <p className="paragraph text-left">
              An entirely self-hosted Google Drive replacement — store your
              documents, calendar, contacts, photos and videos on your Umbrel
              with Nextcloud instead of Google’s servers.
            </p>
          </div>
          <div className="w-col w-col-2"></div>
        </div>
        <img
          src="./assets/Group-1601.jpg"
          loading="eager"
          className="feature-image"
        ></img>
      </div>
      <div></div>
    </div>
    <div className="feature-card feature-card-photoprism">
      <div className="feature-header">
        <h3 className="feature-heading feature-heading-photoprism">
          Store your photos and videos with PhotoPrism.
        </h3>
        <img
          className="feature-icon feature-icon-photoprism"
          src=""
          loading="lazy"
        ></img>
      </div>
      <div className="feature-content"></div>
    </div>
  </CardComponent>
);
