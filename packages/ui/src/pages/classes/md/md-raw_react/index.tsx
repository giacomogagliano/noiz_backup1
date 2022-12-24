import React from "react";
import { Md } from "../../../../HTML/React/classes";
import { readAndParse } from "../../../../library";

export function getStaticProps() {
  const res = readAndParse("./posts", "Propaganda");
  return { props: { data: { post: res } } };
}

export default function index({
  data: { post },
}: {
  data: { post: string };
}) {
  return (
    <Md md_raw_react contentString={post} article></Md>
  );
}
