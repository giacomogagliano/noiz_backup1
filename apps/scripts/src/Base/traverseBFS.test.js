import { GraphTraverse } from "@zionstate/base";
import { testEnvironment } from "@zionstate/test";

const { expect } = testEnvironment();

const BFS = GraphTraverse.Algorythm.BFS;

const graph = new BFS({
  key: "root",
  left: {
    key: "child1",
    left: { key: "child3", left: { key: "child4", left: { key: "child5" } } },
  },
  right: { key: "child2" },
});
console.log(graph.traverseBFS());

const EXPECTED = ["root", "child2", "child1", "child3", "child4", "child5"];

describe(`Method traverseBFS()`, () => {
  it(`should return the list of child :`, () => {
    expect(graph.traverseBFS()[0]).to.be.equal(EXPECTED[0]);
  });
});
