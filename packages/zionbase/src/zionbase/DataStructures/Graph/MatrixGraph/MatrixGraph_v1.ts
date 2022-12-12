import { Graph, GraphProps, IGraph } from "..";

type isConnectedProps = {
  nodeA: EncodedId;
  nodeB: EncodedId;
};
type isConnectedType = (
  props: isConnectedProps
) => boolean;

type findAdjacentNodesProps = {
  node: EncodedId;
};
type findAdjacentNodesType = (
  props: findAdjacentNodesProps
) => EncodedId[];

type EncodedId = string;

export type AdjacencyMatrix = (0 | 1)[][];

type NodeIndexes = { [key: EncodedId]: number };

export interface IMatrixGraph_v1 extends IGraph {
  adjacencyMatrix: AdjacencyMatrix;
  nodeIndexes: NodeIndexes;
  isConnected: isConnectedType;
  findAdjacetNodes: findAdjacentNodesType;
}

export interface MatrixGraph_v1 extends Graph {
  adjacencyMatrix: AdjacencyMatrix;
  nodeIndexes: NodeIndexes;
}

export interface MatrixGraph_v1Props extends GraphProps {
  adjacencyMatrix: AdjacencyMatrix;
  nodeIndexes: NodeIndexes;
}

export class MatrixGraph_v1
  extends Graph
  implements IMatrixGraph_v1
{
  constructor(props: MatrixGraph_v1Props) {
    super(props);
    this.adjacencyMatrix = props.adjacencyMatrix;
    this.nodes = props.nodes;
    this.nodeIndexes = props.nodeIndexes;
  }
  isConnected(props: isConnectedProps) {
    const indexA = this.nodeIndexes[props.nodeA];
    const indexB = this.nodeIndexes[props.nodeB];
    if (!indexA) throw new Error("no index A");
    if (!indexB) throw new Error("no index b");
    const bii = this.adjacencyMatrix[indexA];
    if (!bii) throw new Error("");
    const cond = bii[indexB] ? true : false;
    return cond;
  }
  findAdjacetNodes(props: findAdjacentNodesProps) {
    const result: EncodedId[] = [];
    if (!this.nodeIndexes) throw new Error("");
    for (let key in this.nodeIndexes) {
      let nodeIndex = this.nodeIndexes[props.node];
      if (!nodeIndex) throw new Error("");
      const connectionsOfNode =
        this.adjacencyMatrix[nodeIndex];
      const currentNode = this.nodeIndexes[key];
      if (!connectionsOfNode) throw new Error("");
      if (!currentNode) throw new Error("");

      if (connectionsOfNode[currentNode]) {
        const node = this.nodes[currentNode];
        if (!node) throw new Error("");
        result.push(node);
      }
    }
    return result;
  }
}

export type MatrixGraph_v1Ctor = {
  new (props: MatrixGraph_v1Props): MatrixGraph_v1;
};

export const MatrixGraph_v1Ctor: MatrixGraph_v1Ctor =
  MatrixGraph_v1;
