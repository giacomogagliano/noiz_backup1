import React from "react";
import {
  Div,
  Canvas,
  H1,
  P,
  Code,
} from "../../../../HTML";

export default function index() {
  return (
    <Div>
      <H1>The canvas element</H1>
      <P>
        The <Code>{"<canvas> "}</Code> tag is used to draw
        graphics, on the fly, via scripting (usually
        JavaScript). The <Code>{"<canvas> "}</Code> tag is
        transparent, and is only a container for graphics,
        you must use a script to actually draw the
        graphics. Any text inside the{" "}
        <Code>{"<canvas> "}</Code>
        element will be displayed in browsers with
        JavaScript disabled and in browsers that do not
        support <Code>{"<canvas> "}</Code>.
      </P>

      <Canvas id="myCanvas">
        Your browser does not support the Canvas tag.
      </Canvas>
    </Div>
  );
}
