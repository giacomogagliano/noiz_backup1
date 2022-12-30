import React from "react";
import "../../../../HTML";
import { Md } from "../../../../HTML/React/classes";
import { readAndParse } from "../../../../library";

interface Datas {
  data: string;
}

export function getStaticProps() {
  const postPath = "posts";
  const file = "test-chart";
  const result = readAndParse(postPath, file);

  console.log(result);
  return {
    props: {
      data: result,
    },
  };
}

export default function index({ data }: Datas) {
  return (
    <Md
      contentString={data}
      md_raw_react
      layout="main"
      style="defaultStyle"
    ></Md>
  );
}
