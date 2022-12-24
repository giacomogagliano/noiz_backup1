import React from "react";
import fs from "fs";
import "./tesx";
import IndexPage from "./components/IndexPage";
import { UAParser } from "ua-parser-js";

const makeDati = IndexPage.makeDati;
const filter = IndexPage.filter;
const ds = IndexPage.filterDs;
const indexts = IndexPage.filterIndex;
const noiz = filter(".noiz");
const _app = filter("_app.tsx");
const app = filter("app");
const _document = filter("_document.tsx");

export function getStaticProps() {
  const res = fs.readdirSync("./src/pages/");

  const filtered = res
    .filter(ds)
    .filter(noiz)
    .filter(_app)
    .filter(_document)
    .filter(indexts)
    .filter(app);

  const data = filtered.map(makeDati);

  return { props: { data: JSON.stringify(data) } };
}

export default function index({ data }: { data: string }) {
  // TODO #146 @ariannatnl ho aggiunto UaParser che ci permette
  // di analizzar lo user agent. Ora recura il valore che ti
  // da quando lo apri su edge e scrivilo qui... : Edge
  // 108.0.1462.46
  // 108
  // last update, avevmo fatto il test ma non abbiamo messo
  // il valore
  const name = new UAParser().getBrowser().name;
  const version = new UAParser().getBrowser().version;
  const major = new UAParser().getBrowser().major;
  console.log(name, version, major);
  return <IndexPage data={data}></IndexPage>;
}
