export {};
export interface Graph {
  addNode(node: Node): this;
  addEdge(
    node1: string,
    node2: string,
    weight: number
  ): this;
}
export class Graph implements Graph {
  protected nodes: Map<string, Node>;
  constructor() {
    this.nodes = new Map<string, Node>();
  }
  addEdge(
    node1: string,
    node2: string,
    weight: number = 1,
    isDirect: boolean = false
  ): this {
    if (isDirect) {
      const n1 = this.nodes.get(node1);
      const n2 = this.nodes.get(node2);
      if (!n1 || !n2) throw new Error("no nodes");
      n1.addEdge(n2, weight);
      return this;
    } else {
      const n1 = this.nodes.get(node1);
      const n2 = this.nodes.get(node2);
      if (!n1 || !n2) throw new Error("no nodes");
      n1.addEdge(n2, weight);
      n2.addEdge(n1, weight);
      return this;
    }
  }
}

interface BasicNode {
  name: string;
}
class BasicNode implements BasicNode {
  readonly #edges: Map<string, Edge>;
  get edges() {
    return this.#edges;
  }
  // set edges(edges: Map<string, Edge>) {
  //   this.#edges = edges;
  // }
  constructor() {
    this.#edges = new Map<string, Edge>();
  }
}

interface Node {
  addEdge(node: Node, weight: number): this;
}
class Node extends BasicNode implements Node {}

interface TreeNode {
  addChild(node: TreeNode, weight?: number): this;
}
class TreeNode extends BasicNode implements TreeNode {
  children = this.edges;
  constructor() {
    super();
    this.addChild = () => {
      return this;
    };
  }
  addChild(node: TreeNode, weight: number = 1): this {
    let child = new Child();
    child.node = node;
    child.weight = weight;
    this.edges.set(node.name, child);
    return this;
  }
}

interface Edge {
  node: BasicNode;
  weight: number;
}
class Edge implements Edge {}

interface Child extends Edge {
  node: TreeNode;
  weight: number;
}
class Child implements Child {}

const node1 = new TreeNode();
const node2 = new TreeNode();
const node3 = new TreeNode();
node1.name = "mynode";
node2.name = "mynode2";
node3.name = "mynode3";

node1.addChild(node2).addChild(node3);
console.log(node1);
