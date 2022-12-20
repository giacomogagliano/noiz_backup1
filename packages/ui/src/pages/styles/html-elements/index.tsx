import React from "react";
import fs from "fs";
import styled from "styled-components";
import "@zionstate/zionbase/utils";
import IndexPage from "../../components/IndexPage";
import { filterMaker } from "../../lib/filterMaker";
import { FS } from "@zionstate/database";
import { TreeNode } from "@zionstate/zionbase/zionbase";

const Reader = FS.Reader;

const maker = IndexPage.maker;

const filterDs = IndexPage.filter(".DS_Store");
const filterIndex = IndexPage.filter("index.tsx");

const p = maker("p", "working ✅");
const path = maker("path", "working ✅");
const input = maker("input", "working ✅");
const img = maker("img", "working ✅");
const h1 = maker("h1", "working ✅");
const div = maker("h1", "working ✅");
const circle = maker("circle", "working ✅");
const a = maker("a", "working ✅");
const aside = maker("aside", "working ✅");
const audio = maker("audio", "working ✅");
const article = maker("a", "working ✅");
const code = maker("code", "working ✅");
const form = maker("form", "working ✅");
const h2 = maker("h2", "working ✅");
const h3 = maker("h3", "working ✅");
const text = maker("text", "working ✅");
const canvas = maker("canvas", "working ✅");
const areaTagHtml = maker("areaTagHtml", "working ✅");
const newreader = new Reader(
  "./src/pages/styles/html-elements"
);
const foldersInDir = newreader.readFoldersInDir_v2;

export function getStaticProps() {
  newreader.targetResult = [];

  const data = foldersInDir(
    "./src/pages/styles/html-elements"
  ).targetResult;
  const nodes = data.map(data => {
    const path = data.path + "/" + data.name;
    const res = foldersInDir(path);
    // @ts-expect-error
    // TODO @giacomogagliano
    TreeNode.makeNodes(res, data);
    return data;
  });
  const indexes = nodes.filter(e => e.type === "index");
  const modules = nodes.filter(e => e.type === "module");

  const res = fs.readdirSync(
    "./src/pages/styles/html-elements"
  );

  const filtered = res
    .filter(filterDs)
    .filter(filterIndex);
  const neww = filtered
    .map(IndexPage.makeDati)
    .map(p)
    .map(path)
    .map(input)
    .map(img)
    .map(h1)
    .map(div)
    .map(circle)
    .map(a)
    .map(aside)
    .map(article)
    .map(audio)
    .map(code)
    .map(form)
    .map(h2)
    .map(h3)
    .map(canvas)
    .map(text)
    .map(areaTagHtml);
  return { props: { data: JSON.stringify(neww) } };
}

const Div = styled.div`
  display: grid;
  ul {
    display: grid;
    #noiz-class {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default function index({ data }: { data: string }) {
  const parsed = JSON.parse(data);
  return (
    <IndexPage
      data={data}
      path={["styles/html-elements"]}
    ></IndexPage>
  );
}
