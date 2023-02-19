import React from "react";
import { Card } from "./Card";
import { AreaSection } from "../lib/style/Section.style";
import { TextBigSub } from "../classes/TextBigSub";

export function Section() {
  return (
    <AreaSection id="section">
      <div id="container">
        <TextBigSub parallaxSharedY="50px"></TextBigSub>
        <div id="grid-card">
          <Card></Card>
        </div>
      </div>
    </AreaSection>
  );
}
