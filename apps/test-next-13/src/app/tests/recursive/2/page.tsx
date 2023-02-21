import React from "react";
import { Zero } from "./zero.style";

interface Node {
  value: { name: string };
  children?: Node[];
}
let menu: Node[] = [
  {
    value: { name: "my folder" },
    children: [
      { value: { name: "my file1" } },
      { value: { name: "my file2" } },
      {
        value: { name: "mysubfolder" },
        children: [
          { value: { name: "file2" } },
          { value: { name: "file3" } },
          { value: { name: "file4" } },
        ],
      },
    ],
  },
  {
    value: { name: "my second folder" },
  },
];

let Menu = ({ items }: { items: Node[] }) => {
  return (
    <Zero>
      <ul>
        {items.map((i, idx) => {
          return (
            <div key={idx} id="node-tainer">
              <li>{i.value.name}</li>
              <div>
                {i.children && (
                  <>
                    <input id="zero" type="checkbox" />
                    <div id="ground">
                      {i.children.map(c => (
                        <>
                          <li>{c.value.name}</li>
                        </>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </ul>
    </Zero>
  );
};

export default function page() {
  return <Menu items={menu}></Menu>;
}
