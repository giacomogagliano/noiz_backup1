import React from "react";
import { Card } from "./Card";
import { AreaSection } from "../lib/style/Section.style";
import { TextBigSub } from "../classes/TextBigSub";

export function Section() {
  const AREA_SECTION_ID = "section";
  const AREA_SECTION_CONTAINER_ID = "container";
  const AREA_SECTION_GIFT_CARD_ID = "grid-card";
  return (
    <AreaSection id={AREA_SECTION_ID}>
      <div id={AREA_SECTION_CONTAINER_ID}>
        <TextBigSub></TextBigSub>
        <div id={AREA_SECTION_GIFT_CARD_ID}>
          <Card></Card>
        </div>
      </div>
    </AreaSection>
  );
}
