type type = "root" | "leaf";
type options = { rootType: string };
type arg2F = options | string;
type returns = RootNode | LeafNode;

interface createNode {
  (type: "root", arg2F: options): RootNode;
  (type: "leaf", arg2F: string): LeafNode;
}

abstract class NodeFactory2 {
  static createNode: createNode = function (
    type: "root" | "leaf",
    optionsOrLabel: { rootType: string } | string
  ): returns {
    if (type === "root") {
      const { rootType } = optionsOrLabel as {
        rootType: string;
      };
      return new RootNode(rootType);
    } else {
      const label = optionsOrLabel as string;
      return new LeafNode(label);
    }
  };
}
abstract class NodeFactory {
  static createNode(
    type: "root",
    options: { rootType: string }
  ): RootNode;
  static createNode(type: "leaf", label: string): LeafNode;
  static createNode(
    type: "root" | "leaf",
    optionsOrLabel: { rootType: string } | string
  ) {
    if (type === "root") {
      const { rootType } = optionsOrLabel as {
        rootType: string;
      };
      return new RootNode(rootType);
    } else {
      const label = optionsOrLabel as string;
      return new LeafNode(label);
    }
  }
}

interface Edge {}
export abstract class Node {
  abstract addEdge(edge: Edge): this;
}

class RootNode extends Node {
  constructor(public rootType: string) {
    super();
  }
  addEdge(edge: Edge) {
    edge;
    return this;
  }
}

class LeafNode extends Node {
  constructor(public label: string) {
    super();
  }
  addEdge(edge: Edge) {
    edge;
    return this;
  }
}

const rootNode = NodeFactory.createNode("root", {
  rootType: "decision",
});
const leafNode = NodeFactory.createNode("leaf", "label");
