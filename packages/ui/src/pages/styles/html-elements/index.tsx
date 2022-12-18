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

const pages = maker("pages", "index-??");
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
  const neww = filtered.map(IndexPage.makeDati).map(pages);
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
