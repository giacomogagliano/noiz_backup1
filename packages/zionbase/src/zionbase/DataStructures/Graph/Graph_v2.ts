type EncodedId = string;

interface Node<T = number> {
  id: T;
}

export interface IGraph_v2 {
  id: EncodedId;
  nodes: Node[];
}

export type Graph_v2Props = {
  id: EncodedId;
  nodes: Node[];
};

export interface Graph_v2 {
  id: EncodedId;
  nodes: Node[];
}

export class Graph_v2 implements IGraph_v2 {
  constructor(props: Graph_v2Props) {
    this.id = props.id;
    this.nodes = props.nodes;
  }
}

export type Graph_v2Ctor = {
  new (props: Graph_v2Props): Graph_v2;
};

export const Graph_v2Ctor: Graph_v2Ctor = Graph_v2;
