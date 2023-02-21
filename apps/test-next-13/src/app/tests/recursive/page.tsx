// source https://typeofnan.dev/creating-a-recursive-list-menu-any-number-of-levels-deep-in-react/
"use client";

import React, { useState } from "react";

interface Node {
  // title: string;
  children?: Node[];
  value: { name: string };
}

const menu: Node[] = [
  {
    value: { name: "Item 1" },
    children: [
      {
        value: { name: "Item 1.1" },
        children: [
          {
            value: { name: "Item 1.1.1" },
            children: [{ value: { name: "Item 1.1.1.1" } }],
          },
        ],
      },
      { value: { name: "Item 1.2" } },
    ],
  },
  {
    value: { name: "Item 2" },
    children: [{ value: { name: "Item 2.1" } }],
  },
];

export function Menu({ items }: { items: Node[] }) {
  const [displayChildren, setDisplayChildren] = useState({});
  const handleClick = (item: Node) => () =>
    setDisplayChildren({
      ...displayChildren,
      [item.value.name]: !displayChildren[item.value.name],
    });
  return (
    <ul>
      {items.map((item, i) => (
        <li key={item.value.name}>
          {item.value.name}
          {item.children && (
            <button onClick={handleClick(item)}>
              {displayChildren[item.value.name] ? "-" : "+"}
            </button>
          )}
          {displayChildren[item.value.name] && item.children && (
            <Menu items={item.children}></Menu>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function page() {
  return <Menu items={menu} />;
}
