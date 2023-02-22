import React from "react";
import { Test } from "../../../../lib/style/Test.style";

async function getData() {
  await new Promise(res => setTimeout(res, 3000));
  return "top";
}

export default async function page() {
  const data = await getData();
  return (
    <div>
      {data}
      <Test>ciao</Test>
    </div>
  );
}
