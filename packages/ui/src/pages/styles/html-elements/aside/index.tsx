import React from "react";
import { Aside, H1, P } from "../../../../HTML";

export default function index() {
  return (
    <>
      <H1>The aside element</H1>

      <P>
        My family and I visited The Epcot center this
        summer. The weather was nice, and Epcot was
        amazing! I had a great summer together with my
        family!
      </P>

      <Aside style={{ backgroundColor: "red" }}>
        <h4>Epcot Center</h4>
        <P>
          Epcot is a theme park at Walt Disney World Resort
          featuring exciting attractions, international
          pavilions, award-winning fireworks and seasonal
          special events.
        </P>
      </Aside>
    </>
  );
}
