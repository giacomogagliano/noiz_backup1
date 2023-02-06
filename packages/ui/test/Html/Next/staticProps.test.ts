import { testEnvironment } from "@zionstate/test";
import { staticProps } from "../../../next";

const { expect, log } = testEnvironment();

expect;
log;
const getStatic = staticProps.getStatic;

describe("if staticProps function is correctly exported", () => {
  const regex = /getStatic/g;
  const name = getStatic.name;
  const res = regex.test(name);
  it("shall confirm the existance of a function named staticProps", () => {
    expect(res).to.be.true;
  });
});

describe("class functionalities", () => {
  // with RAM
  const data = { id: "", name: "bub" };
  type datatype = typeof data;
  const database = [data, { id: "1", name: "ciii" }];
  const origin = { projects: [data] };
  type props = typeof origin;
  const o: props = { projects: [data] };
  o;
  const { getStaticProps } = getStatic<datatype>(
    "RAM",
    origin,
    "projects",
    database
  );
  getStaticProps;
  // with fetch
  const { getStaticProps: gr } = getStatic<{}>(
    "fetch",
    "http://localhost:3000/api/nfts",
    "data"
  );
  gr;
});

describe("getStaticPath and getStaticProps", () => {
  const data = { id: "", name: "bub" };
  type datatype = typeof data;
  const database = [data, { id: "1", name: "ciii" }];
  const origin = { project: data };
  type props = typeof origin;
  const o: props = { project: { id: "", name: "" } };
  o;
  const query = { id: "" };
  const { getStaticPaths, getStaticProps } = getStatic<
    datatype,
    { id: string }
  >("RAM", origin, "project", database, query, "id", [
    { params: { id: "0" } },
    { params: { id: "1" } },
    { params: { id: "2" } },
  ]);
  it("should contain getStaticPaths function", () => {
    const regex = /getStaticPaths/g;
    expect(regex.test(getStaticPaths.name)).to.be.true;
  });
  it("should contain getStaticPaths", () => {
    const regex = /getStaticProps/g;
    expect(regex.test(getStaticProps.name)).to.be.true;
  });

  // with fetch
  const { getStaticPaths: gspt, getStaticProps: gspr } =
    getStatic<{}, { id: string }>(
      "fetch",
      "http://localhost:3000/api/nfts",
      "data",
      undefined,
      { id: "" },
      "id"
    );
  it("should contain getStatic", () => {
    const regex = /getStaticPaths/g;
    expect(regex.test(gspt.name)).to.be.true;
  });
  it("should contain getStaticPaths", () => {
    const regex = /getStaticProps/g;
    expect(regex.test(gspr.name)).to.be.true;
  });
});
