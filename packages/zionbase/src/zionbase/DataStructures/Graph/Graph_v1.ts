type EncodedId = string;

export interface IGraph_v1 {
  name: EncodedId;
  nodes: EncodedId[];
}

export type Graph_v1Props = {
  name: EncodedId;
  nodes: EncodedId[];
};

export interface Graph_v1 {
  name: EncodedId;
  nodes: EncodedId[];
}

export class Graph_v1 implements IGraph_v1 {
  constructor(props: Graph_v1Props) {
    this.name = props.name;
    this.nodes = props.nodes;
  }
}

export type Graph_v1Ctor = {
  new (props: Graph_v1Props): Graph_v1;
};

export const Graph_v1Ctor: Graph_v1Ctor = Graph_v1;
