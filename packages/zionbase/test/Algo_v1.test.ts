import { testEnvironment } from "@zionstate/test";
import { Algo } from "../zionbase";

const { expect, log } = testEnvironment();
expect;
log;

describe("testing the bfs travers algorythm", () => {
  const node1 = { id: 0, children: [1], value: "sono A" };
  const node2 = {
    id: 1,
    children: [2, 3],
    value: "sono B",
  };
  const node3 = { id: 2, children: [], value: "sono C" };
  const node4 = { id: 3, children: [], value: "sono D" };

  const graph = {
    type: "array" as const,
    id: "mygraph",
    nodes: [node1, node2, node3, node4],
  };

  const root = graph.nodes[0];
  if (!root) throw new Error("");

  const algo = new Algo({
    type: "bfs",
    curr: graph.nodes[0]!,
    graph: graph,
    processors: [e => e],
    queue: [root],
  });

  algo
    .traverse()
    .use(e => {
      e.value = e.value + "_v";
      return e;
    })
    .process(graph);
  it("should change the value of node a to 'sono A_v'", () => {
    expect(graph.nodes[0]!.value).to.be.equal("sono A_v");
  });
  it("should change the value of node b to 'sono B_v'", () => {
    expect(graph.nodes[1]!.value).to.be.equal("sono B_v");
  });
  it("should change the value of node c to 'sono C_v'", () => {
    expect(graph.nodes[2]!.value).to.be.equal("sono C_v");
  });
  it("should change the value of node d to 'sono D_v'", () => {
    expect(graph.nodes[3]!.value).to.be.equal("sono D_v");
  });
});

describe("testing the dfs travers algorythm", () => {
  const node1 = { id: 0, children: [1], value: "sono A" };
  const node2 = {
    id: 1,
    children: [2, 3],
    value: "sono B",
  };
  const node3 = { id: 2, children: [], value: "sono C" };
  const node4 = { id: 3, children: [], value: "sono D" };

  const graph = {
    type: "array" as const,
    id: "mygraph",
    nodes: [node1, node2, node3, node4],
  };

  const root = graph.nodes[0];
  if (!root) throw new Error("");

  const algo = new Algo({
    type: "dfs",
    curr: graph.nodes[0]!,
    graph: graph,
    processors: [e => e],
    stack: [root],
  });

  algo
    .traverse()
    .use(e => {
      e.value = e.value + "_v";
      return e;
    })
    .process(graph);
  it("should change the value of node a to 'sono A_v'", () => {
    expect(graph.nodes[0]!.value).to.be.equal("sono A_v");
  });
  it("should change the value of node b to 'sono B_v'", () => {
    expect(graph.nodes[1]!.value).to.be.equal("sono B_v");
  });
  it("should change the value of node c to 'sono C_v'", () => {
    expect(graph.nodes[2]!.value).to.be.equal("sono C_v");
  });
  it("should change the value of node d to 'sono D_v'", () => {
    expect(graph.nodes[3]!.value).to.be.equal("sono D_v");
  });
});
