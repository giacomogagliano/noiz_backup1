import { testEnvironment } from "@zionstate/test";
import { Graph_v3 } from "../zionbase";

const { expect, log } = testEnvironment();
expect;
log;

describe("testing the Graph class using the bfs traverse algorythm", () => {
  const node1: {
    id: number;
    children: number[];
    value: string;
  } = { id: 0, children: [1], value: "sono A" };
  const node2 = {
    id: 1,
    children: [2, 3],
    value: "sono B",
  };
  const node3 = { id: 2, children: [], value: "sono C" };
  const node4 = { id: 3, children: [], value: "sono D" };
  const graph = new Graph_v3({
    id: "mygraph",
    nodes: [node1, node2, node3, node4],
    type: "array",
  });
  graph.bfs
    ?.traverse()
    .use(e => {
      e.value = e.value + "_visited";
      return e;
    })
    .process();

  const nodes = graph.nodes as {
    id: number;
    children: number[];
    value: string;
  }[];

  it("should have edited the value of node A to 'sono A_visited'", () => {
    const node = nodes[0];
    if (!node) throw new Error("");
    expect(node.value).to.be.equal("sono A_visited");
  });
  it("should have edited the value of node B to 'sono B_visited'", () => {
    const node = nodes[1];
    if (!node) throw new Error("");
    expect(node.value).to.be.equal("sono B_visited");
  });
  it("should have edited the value of node C to 'sono C_visited'", () => {
    const node = nodes[2];
    if (!node) throw new Error("");
    expect(node.value).to.be.equal("sono C_visited");
  });
  it("should have edited the value of node D to 'sono D_visited'", () => {
    const node = nodes[3];
    if (!node) throw new Error("");
    expect(node.value).to.be.equal("sono D_visited");
  });
});

describe("testing the Graph class using the dfs traverse algorythm", () => {
  const node1: {
    id: number;
    children: number[];
    value: string;
  } = { id: 0, children: [1], value: "sono A" };
  const node2 = {
    id: 1,
    children: [2, 3],
    value: "sono B",
  };
  const node3 = { id: 2, children: [], value: "sono C" };
  const node4 = { id: 3, children: [], value: "sono D" };
  const graph = new Graph_v3({
    id: "mygraph",
    nodes: [node1, node2, node3, node4],
    type: "array",
  });
  graph.dfs
    ?.traverse()
    .use(e => {
      e.value = e.value + "_visited";
      return e;
    })
    .process();

  const nodes = graph.nodes as {
    id: number;
    children: number[];
    value: string;
  }[];

  it("should have edited the value of node A to 'sono A_visited'", () => {
    const node = nodes[0];
    if (!node) throw new Error("");
    expect(node.value).to.be.equal("sono A_visited");
  });
  it("should have edited the value of node B to 'sono B_visited'", () => {
    const node = nodes[1];
    if (!node) throw new Error("");
    expect(node.value).to.be.equal("sono B_visited");
  });
  it("should have edited the value of node C to 'sono C_visited'", () => {
    const node = nodes[2];
    if (!node) throw new Error("");
    expect(node.value).to.be.equal("sono C_visited");
  });
  it("should have edited the value of node D to 'sono D_visited'", () => {
    const node = nodes[3];
    if (!node) throw new Error("");
    expect(node.value).to.be.equal("sono D_visited");
  });
});
