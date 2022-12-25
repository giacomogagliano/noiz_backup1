import React from "react";
import Link from "next/link";
import fs from "fs";
import styled from "styled-components";
import { Dati } from "@zionstate/database/Git";
import type { FS as FsTypes } from "@zionstate/database";
import "@zionstate/zionbase/utils";
import IndexPage from "../components/IndexPage";
import { filterMaker } from "../lib/filterMaker";
import { FS } from "@zionstate/database";
import {
  Folder,
  File,
  TreeNode,
} from "@zionstate/zionbase/zionbase";

const Reader = FS.Reader;

const maker = IndexPage.maker;

const filterDs = IndexPage.filter(".DS_Store");
const filterIndex = IndexPage.filter("index.tsx");

// const card = maker("card", "notter ⛔️");
// const chart = maker("chart", "notter ⛔️");
const contract = maker("contract", "notter ⛔️");
// const form = maker("form", "default-noiz");
// const icon = maker("icon", "icons-not-showing");
// const image = maker("image", "working ✅");
// const navbar = maker("navbar", "notter ⛔️");
const pages = maker("pages", "index-??");
const newreader = new Reader("./src/pages/classes");
const filesInDir = newreader.readFilesInDir_v2;
const foldersInDir = newreader.readFoldersInDir_v2;

/**
 * const mapper =
  (name: string, status: File["status"]) =>
  (
    e:
      | import("/Users/WAW/Documents/Projects/zion-network-state/packages/database/dist/declarations/src/RAM/index").Folder
      | import("/Users/WAW/Documents/Projects/zion-network-state/packages/database/dist/declarations/src/RAM/index").File
  ): void => {
    if (e.name === name) {
      if ("status" in e) {
        e.status = status;
      }
    }
  };
 */
export function getStaticProps() {
  newreader.targetResult = [];

  const data = foldersInDir(
    "./src/pages/classes"
  ).targetResult;
  const nodes = data.map(data => {
    const path = data.path + "/" + data.name;
    const res = foldersInDir(path);
    TreeNode.makeNodes(res, data as Folder);
    return data;
  });
  const indexes = nodes.filter(e => e.type === "index");
  const modules = nodes.filter(e => e.type === "module");

  const res = fs.readdirSync("./src/pages/classes");

  // IndexPage.setStatus(data)
  const filtered = res
    .filter(filterDs)
    .filter(filterIndex);
  const neww = filtered
    .map(IndexPage.makeDati)
    // .map(card)
    // .map(chart)
    .map(contract)
    // .map(form)
    // .map(icon)
    // .map(image)
    // .map(navbar)
    .map(pages);
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
  console.log(parsed);
  return (
    <IndexPage data={data} path={["classes"]}></IndexPage>
  );
}
