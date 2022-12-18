import React from "react";
import {
  Dirent,
  reader,
  Reader,
} from "@zionstate/database/FileSystem";
import IndexPage from "../../components/IndexPage";
import styled from "styled-components";

const newreader = new Reader("./src/pages/classes/pages");
const filesInFolder = newreader.readFilesInFolder;
const foldersInDir = newreader.readFoldersInDir_v2;

export function getStaticProps() {
  newreader.targetResult = [];
  const data = foldersInDir(
    "./src/pages/classes/pages"
  ).targetResult;
  console.log(data);

  return { props: { data: JSON.stringify(data) } };
}

export default function index(props: { data: string }) {
  return (
    <IndexPage
      data={props.data}
      path={["classes"]}
    ></IndexPage>
  );
}
