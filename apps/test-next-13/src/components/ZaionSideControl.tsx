import React from "react";
import { Menu } from "../app/tests/recursive/page";
import { ZionSideControlStyle } from "../lib/style/ZaionSideControl.style";
interface Node {
  title: string;
  children?: Node[];
}

const menu: Node[] = [
  {
    title: "Item 1",
    children: [
      {
        title: "Item 1.1",
        children: [
          { title: "Item 1.1.1", children: [{ title: "Item 1.1.1.1" }] },
        ],
      },
      { title: "Item 1.2" },
    ],
  },
  { title: "Item 2", children: [{ title: "Item 2.1" }] },
];

export default function ZaionSideControl() {
  return (
    <ZionSideControlStyle>
      {/* let */}
      {/* <label id="outer">
        ciaoa
        <input type="checkbox" />
        <label>ciao</label>
      </label>
      <input type="checkbox" id="side-bar1" name="ok" />
      <label htmlFor="side-bar1">ciaoa</label>
      <input type="checkbox" id="side-bar1" />
      <label>ola</label>
      <input type="checkbox" id="side-bar1" />
      <label>jecko</label> */}
      <input type="checkbox" id="side-bar-selector" />
      <div id="side-bar-tainer">
        <label htmlFor="side-bar-selector" />
        ciao
        <Menu items={menu}></Menu>
      </div>
      {/* <p>ciao</p> */}
    </ZionSideControlStyle>
  );
}
