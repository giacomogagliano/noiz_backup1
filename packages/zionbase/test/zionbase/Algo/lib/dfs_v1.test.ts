import { testEnvironment } from "@zionstate/test";
import { Node } from "../../../../src/zionbase/Algo/lib/recursive";
import { dfs } from "../../../../zionbase";

const { expect, log } = testEnvironment();
expect;
log;

interface Tree {
  key?: string;
  children: Tree[];
}

describe("", () => {
  const node1: Tree = { children: [], key: "1" };
  const node2: Tree = { children: [], key: "2" };
  const node3: Tree = { children: [], key: "3" };
  const node4: Tree = { children: [], key: "4" };
  const node5: Tree = { children: [], key: "5" };
  const node6: Tree = { children: [], key: "6" };
  const node7: Tree = { children: [], key: "7" };
  const node8: Tree = { children: [], key: "8" };
  const node9: Tree = { children: [], key: "9" };

  node1.children = [node2];
  node2.children = [node3];
  node3.children = [node4, node5];
  node4.children = [node6];
  node6.children = [node7];
  node7.children = [node8, node9];
  // @ts-expect-error
  const res = dfs(node1);
  it("should report 1 as it is the key of node1", () => {
    expect(res[0]).to.be.equal("1");
  });
  it("should report 2 as it is the key of node2", () => {
    expect(res[1]).to.be.equal("2");
  });
  it("should report 3 as it is the key of node3", () => {
    expect(res[2]).to.be.equal("3");
  });
  it("should report 4 as it is the key of node4", () => {
    expect(res[3]).to.be.equal("4");
  });
  it("should report 5 as it is the key of node9", () => {
    expect(res[8]).to.be.equal("5");
  });
});

describe("benchmark comparison with recursive dfs", () => {
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
    const start = performance.now();
    // @ts-expect-error
    dfs(graph);
    const end = performance.now();
    const elapsed = end - start;
    log("elapsed", elapsed);
  });
});
