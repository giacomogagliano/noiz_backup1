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

const AreaIndexClassesPages = styled(IndexPage)`
  border: solid;
  padding: 10%;
  white-space: nowrap;
  display: grid;
  flex-direction: column;
  justify-content: space-around;

  ul {
    div {
      div {
        padding: 10%;
        border: solid;
      }
      a {
      }
    }
  }
`;

export default function index(props: { data: string }) {
  return (
    <AreaIndexClassesPages
      data={props.data}
      path={["classes"]}
    ></AreaIndexClassesPages>
  );
}
