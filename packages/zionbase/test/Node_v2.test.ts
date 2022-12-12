import { testEnvironment } from "@zionstate/test";
import { Node_v2 } from "../zionbase";

const { expect, log } = testEnvironment();
expect;
log;

describe("", () => {
  const node1 = new Node_v2({
    children: [],
    id: 0,
    type: Node_v2.nodeTypes.array_ids,
    value: "ciao",
  });
  const node2 = new Node_v2({
    children: [],
    id: 1,
    type: Node_v2.nodeTypes.array_ids,
    value: "blim",
  });
  const node3 = new Node_v2({
    children: [],
    id: 2,
    type: Node_v2.nodeTypes.array_ids,
    value: "blom",
  });
  node1.addChild(node2.id);
  const hasChild2 = node1.hasChild(node2.id);
  const hasChild3 = node1.hasChild(node3.id);
  const hasChildren1 = node1.hasChildren();
  const hasChildren2 = node2.hasChildren();
  const adjnodes = node1.findAdjacentNodes();
  it("should create an object of type Node_v1", () => {
    expect(node1.constructor.name === "Node_v2").to.be
      .true;
  });
  it("should respond true when asked if node1 has node2 as child", () => {
    expect(hasChild2).to.be.true;
  });
  it("should respond false when asked if node1 doesn't have node3 as child", () => {
    expect(hasChild3).to.be.false;
  });
  it("should respond true when asked if node1 has any child", () => {
    expect(hasChildren1).to.be.true;
  });
  it("should respond false when asked if node2 has any child", () => {
    expect(hasChildren2).to.be.false;
  });
  it("should respond 1 when asked the amount of children node1 has", () => {
    expect(adjnodes.length).to.be.equal(1);
  });
});
