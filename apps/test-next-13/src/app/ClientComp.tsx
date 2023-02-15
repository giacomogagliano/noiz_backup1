"use client";

import React, { use } from "react";

async function getData() {
  await new Promise(res => setTimeout(res, 4000));
  return "eccoci";
}

export default function ClientComp() {
  const data = use(getData());
  return <div>{data}</div>;
}
