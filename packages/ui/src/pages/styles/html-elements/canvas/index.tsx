import React from "react";
import { Div, Canvas } from "../../../../HTML";

export default function index() {
  return (
    <Div>
      <h1>The canvas element</h1>

      <Canvas id="myCanvas">
        Your browser does not support the Canvas tag.
      </Canvas>
    </Div>
  );
}
