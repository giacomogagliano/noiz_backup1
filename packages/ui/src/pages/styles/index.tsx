import React from "react";
import fs from "fs";
import styled from "styled-components";
import "@zionstate/zionbase/utils";
import IndexPage from ".././components/IndexPage";
import { FS } from "@zionstate/database";
import { TreeNode } from "@zionstate/zionbase/zionbase";

const Reader = FS.Reader;

const maker = IndexPage.maker;

const filterDs = IndexPage.filter(".DS_Store");
const filterIndex = IndexPage.filter("index.tsx");

const htmlElements = maker("html-elements", "index-??");
const newreader = new Reader("./src/pages/styles");
const foldersInDir = newreader.readFoldersInDir_v2;

export function getStaticProps() {
  newreader.targetResult = [];

  const data = foldersInDir(
    "./src/pages/styles"
  ).targetResult;
  const nodes = data.map(data => {
    const path = data.path + "/" + data.name;
    const res = foldersInDir(path);
    // @ts-expect-error
    // TODO @giacomogagliano
    TreeNode.makeNodes(res, data);
    return data;
  });

  const res = fs.readdirSync("./src/pages/styles");

  const filtered = res
    .filter(filterDs)
    .filter(filterIndex);
  const neww = filtered
    .map(IndexPage.makeDati)
    .map(htmlElements);
  return { props: { data: JSON.stringify(neww) } };
}

export default function index({ data }: { data: string }) {
  const parsed = JSON.parse(data);
  return (
    <IndexPage data={data} path={["styles"]}></IndexPage>
  );
}
