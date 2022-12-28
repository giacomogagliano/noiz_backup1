import { Graph, GraphProps, IGraph } from "../..";

type EncodedId = string;

type AddProps = { node: EncodedId };
type AddType<T> = (props: AddProps) => T;

export interface IListGraph_v1 extends IGraph {
  add: AddType<this>;
}

export interface ListGraph_v1 extends Graph {}

export interface ListGraph_v1Props extends GraphProps {}

export class ListGraph_v1
  extends Graph
  implements IListGraph_v1
{
  constructor(props: ListGraph_v1Props) {
    super(props);
  }
  add(props: AddProps) {
    this.nodes.push(props.node);
    return this;
  }
}

export type ListGraph_v1Ctor = {
  new (props: ListGraph_v1Props): ListGraph_v1;
};

export const ListGraph_v1Ctor: ListGraph_v1Ctor =
  ListGraph_v1;
