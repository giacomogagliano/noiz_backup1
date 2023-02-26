import { testEnvironment } from "@zionstate/test";
import { dfs } from "../../../../../src/zionbase/Algo/lib/recursive/dfs/";
import type { Node } from "../../../../../src/zionbase/Algo/lib/recursive/dfs/";

const { expect, log } = testEnvironment();
expect;
log;

describe("if dfs function is correctly exported", () => {
  const regex = /dfs/g;
  const name = dfs.name;
  const res = regex.test(name);
  it("shall confirm the existance of a function named dfs", () => {
    expect(res).to.be.true;
  });
});

describe("dfs", () => {
  const graph: Node = {
    value: "A",
    children: [
      {
        value: "B",
        children: [
          {
            value: "D",
            children: [],
          },
          {
            value: "E",
            children: [],
          },
        ],
      },
      {
        value: "C",
        children: [
          {
            value: "F",
            children: [],
          },
          {
            value: "G",
            children: [],
          },
        ],
      },
    ],
  };
  it("", () => {
    const array = ["B", "X", "F", "G", "D", "E"];
    let res: boolean[] = [];
    let perfs: Map<string, number> = new Map();
    array.forEach(e => {
      const start = performance.now();
      const Element = dfs(graph, e);
      const end = performance.now();
      res.push(Element);
      const perf = end - start;
      perfs.set(e, perf);
    });
    const [B, X, F, G, D, E] = res;
    expect(B).to.be.true; // true
    expect(X).to.be.false; // false
    expect(F).to.be.true; // true
    expect(G).to.be.true; // true
    expect(D).to.be.true; // true
    expect(E).to.be.true; // true
    const values = [...perfs.values()];
    const sum = values.reduce((prev, curr) => prev + curr);
    log("performance", sum / perfs.size);
  });
});
