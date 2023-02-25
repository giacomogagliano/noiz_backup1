import { Edge } from "./Edge";
import { Node } from "./Node";

export abstract class Graph {
  abstract type: string;
  constructor(public name: string) {}
  abstract addNode(node: Node): this;
  abstract addEdge(edge: Edge): this;
}
