import React from "react";
import fs from "fs";
import "@zionstate/zionbase/utils";
import IndexPage from "../../components/IndexPage";
import { FS } from "@zionstate/database";

const Reader = FS.Reader;

const maker = IndexPage.maker;

const filterDs = IndexPage.filter(".DS_Store");
const filterIndex = IndexPage.filter("index.tsx");

// const md_react = maker("md-react", "notter ⛔️");
const md_rawReact = maker("md-raw_react", "notter ⛔️");
const md_string = maker("md-string", "notter ⛔️");
const newreader = new Reader("./src/pages/classes/md");
export function getStaticProps() {
  newreader.targetResult = [];

  const res = fs.readdirSync("./src/pages/classes/md");

  const filtered = res
    .filter(filterDs)
    .filter(filterIndex);
  const neww = filtered
    .map(IndexPage.makeDati)
    // .map(md_react)
    .map(md_string)
    .map(md_rawReact);
  return { props: { data: JSON.stringify(neww) } };
}

export default function index({ data }: { data: string }) {
  const parsed = JSON.parse(data);
  console.log(parsed);
  return (
    <IndexPage
      data={data}
      path={["classes/md"]}
    ></IndexPage>
  );
}
