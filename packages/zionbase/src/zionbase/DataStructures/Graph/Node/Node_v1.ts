type EncodedId = string;

type basicProps<T = unknown> = { node: EncodedId } & T;
type connectType<T> = (props: basicProps) => T;

type isConnectedType = (props: basicProps) => boolean;

type findAdjacentNodes = () => EncodedId[];

export interface INode_v1 {
  name: EncodedId;
  edges: EncodedId[];
  connect: connectType<this>;
  isConnected: isConnectedType;
  findAdjacentNodes: findAdjacentNodes;
}

export interface Node_v1 {
  name: EncodedId;
  edges: EncodedId[];
}

export interface Node_v1Props {
  name: EncodedId;
}

export class Node_v1 implements INode_v1 {
  constructor(props: Node_v1Props) {
    this.name = props.name;
    this.edges = [];
  }
  connect(props: basicProps) {
    const { node } = props;
    this.edges.push(node);
    return this;
  }
  isConnected(props: basicProps) {
    return this.edges.some(edge => edge === props.node)
      ? true
      : false;
  }
  findAdjacentNodes() {
    return this.edges;
  }
}

export type Node_v1Ctor = {
  new (props: Node_v1Props): Node_v1;
};

export const Node_v1Ctor: Node_v1Ctor = Node_v1;
