import React from "react";
import { Md } from "../../../HTML/React/classes";

export async function getStaticProps() {
  const path = process.cwd();
  // console.log(node.readDirSyn(path));
  // readAndParseFiles(path, "");
  return { props: { i: "am here" } };
}

export default function index(props) {
  // console.log(props);

  const text = `<h2>Hello, world!</h2>
  <p>Welcome to my page 👀</p>`;
  // const Content = new Md({
  //   datas: [{ contentString: text }],
  // }).Content;

  return <Md contentString={text} html_react></Md>;
}
