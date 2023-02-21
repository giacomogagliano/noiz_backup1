// source https://w3codepen.com/html-css-parent-selector-tutorial-examples/
import React from "react";
import { GrandP } from "./grandp.style";

export default function page() {
  return (
    <GrandP>
      muori se dormi poco
      <input type="checkbox" id="grandparent-selector" />
      <div className="grandparent">
        <input type="checkbox" id="parent-selector" />
        <div className="parent">
          <input type="checkbox" id="sibling-selector" />
          <label htmlFor="sibling-selector">Select Sibling Node</label>
          <label htmlFor="parent-selector">Select Parent Node</label>
          <label htmlFor="grandparent-selector">Select Grand parent Node</label>
        </div>
      </div>
      <input type="checkbox" id="parent-selector2" />
      <div className="parent">
        <label htmlFor="parent-selector2">Select Parent Node</label>
      </div>
    </GrandP>
  );
}
