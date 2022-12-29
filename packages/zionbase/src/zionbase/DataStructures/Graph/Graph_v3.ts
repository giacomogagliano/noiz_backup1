import { Algo } from "../../Algo";
import type { BasicNode } from "../../Algo";

// TODO #160 @giacomogagliano capire come integrare diversi tipi di id
// type EncodedId = string;

interface Node<NodeId = number, V = {}> {
  id: NodeId;
  value: V;
  children: Node["id"][] | Node[];
}

interface Id_v3<Id> {
  id: Id;
}

export interface ObjGraphProps<
  Id,
  NodeId extends string | number | symbol,
  N extends Node<NodeId, V>,
  V
> extends Id_v3<Id> {
  type: "object";
  nodes: { [props in NodeId]: N };
}

export interface ArrayGraphProps<
  Id,
  NodeId,
  N extends Node<NodeId, V>,
  V
> extends Id_v3<Id> {
  type: "array";
  nodes: N[];
}

export interface MapGraphProps<
  Id,
  NodeId,
  N extends Node<NodeId, V>,
  V
> extends Id_v3<Id> {
  type: "map";
  nodes: Map<NodeId, N>;
}

export type FluidGraph<
  Id,
  NodeId extends string | number | symbol,
  N extends Node<NodeId, Value>,
  Value
> =
  | ArrayGraphProps<Id, NodeId, N, Value>
  | MapGraphProps<Id, NodeId, N, Value>
  | ObjGraphProps<Id, NodeId, N, Value>;

export type IGraph_v3<
  Id,
  NodeId extends string | number | symbol,
  N extends Node<NodeId, Value>,
  Value
> = {
  id: Id;
  type: "map" | "array" | "object";
  nodes: { [props in NodeId]: N } | N[] | Map<NodeId, N>;
};

export interface Graph_v3<Id, NodeId, N, Value> {
  id: Id;
  type: "map" | "array" | "object";
  nodes: { [props in NodeId]: N } | N[] | Map<NodeId, N>;
}
/**
 * Graph_v3 is a class that represents a graph data structure. It implements the IGraph_v3 interface and
 * contains properties and methods for traversing the graph using breadth-first search (bfs) and depth-first
 * search (dfs).
 *
 * @template Id The type of the graph's identifier.
 * @template NodeId The type of the nodes' identifiers.
 * @template N The type of the nodes in the graph.
 * @template Value The type of the values stored in the nodes.
 */
export class Graph_v3<
  Id,
  NodeId extends string | number | symbol,
  N extends Node<NodeId, Value>,
  Value
> implements IGraph_v3<Id, NodeId, N, Value>
{
  bfs;
  dfs;
  /**
   * Constructs a new instance of the Graph_v3 class.
   *
   * @param props An object containing the properties for the new graph.
   * @param props.id The identifier for the new graph.
   * @param props.type The type of the new graph.
   * @param props.nodes An array of nodes to include in the new graph.
   *
   * @throws {Error} If the nodes array is empty or does not contain any elements.
   */
  constructor(props: FluidGraph<Id, NodeId, N, Value>) {
    const self = this;
    this.id = props.id;
    this.type = props.type;
    this.nodes = props.nodes;
    if (Array.isArray(this.nodes)) {
      const curr = this.nodes[0];
      if (!curr) throw new Error("no nodes");
      const bfs = new Algo({
        type: "bfs",
        curr: curr as BasicNode<NodeId, Value>,
        graph: self as FluidGraph<
          Id,
          NodeId,
          BasicNode<NodeId, Value>,
          Value
        >,
        processors: [],
        queue: [curr as BasicNode<NodeId, Value>],
      });
      this.bfs = bfs;
      const dfs = new Algo({
        type: "dfs",
        curr: curr as BasicNode<NodeId, Value>,
        graph: self as FluidGraph<
          Id,
          NodeId,
          BasicNode<NodeId, Value>,
          Value
        >,
        processors: [],
        stack: [curr as BasicNode<NodeId, Value>],
      });
      this.dfs = dfs;
    }
  }
}

export type ArrayGraph_v3Ctor<
  Id = string,
  NodeId extends string | number | symbol = string,
  Value = string,
  N extends Node<NodeId, Value> = Node<NodeId, Value>
> = {
  new (
    props: ArrayGraphProps<Id, NodeId, N, Value>
  ): Graph_v3<Id, NodeId, N, Value>;
};

export const ArrayGraph_v3Ctor: ArrayGraph_v3Ctor =
  Graph_v3;
