// type EncodedId = string;

// type basicProps<T = unknown> = { node: EncodedId } & T;

// type findAdjacentNodes = () => EncodedId[];

enum nodeTypes {
  array_ids = "array_ids",
  array_nodes = "array_nodes",
  map = "map",
  object = "object",
}

type nodeTypeTypes = keyof typeof nodeTypes;

export interface ArrayNodeIdsProps<
  I extends string | number | symbol = number,
  V = unknown
> {
  type: nodeTypes.array_ids;
  id: I;
  children: number[];
  value: V;
}

export interface ArrayNodesProps<
  I extends string | number | symbol = number,
  V = unknown
> {
  type: nodeTypes.array_nodes;
  id: I;
  children: ArrayNodeIdsProps<I>[];
  value: V;
}

export interface MapNodeProps<
  I extends string | number | symbol = number,
  V = unknown
> {
  type: nodeTypes.map;
  id: I;
  children: Map<I, MapNodeProps<I>>;
  value: V;
}

export interface ObjectNodeProps<
  I extends string | number | symbol = number,
  V = unknown
> {
  type: nodeTypes.object;
  id: I;
  children: { [props in I]: ObjectNodeProps<I> };
  value: V;
}
export type Node_v2Props<
  Id extends string | number | symbol,
  V = unknown
> =
  | ObjectNodeProps<Id, V>
  | ArrayNodeIdsProps<Id, V>
  | ArrayNodesProps<Id, V>
  | MapNodeProps<Id, V>;

export interface INode_v2<
  T extends nodeTypeTypes,
  Id extends string | number | symbol,
  V
> {
  type: T;
  id: Id;
  children:
    | ArrayNodeIdsProps["id"][]
    | { [props in Id]: ObjectNodeProps<Id> }
    | Map<Id, MapNodeProps<Id>>;
  value: V;
  addChild: (n: number) => this;
  hasChild: (n: number) => boolean;
  hasChildren: () => boolean;
  findAdjacentNodes: () => Id[];
}

export interface Node_v2<T extends nodeTypeTypes, Id, V> {
  type: T;
  id: Id;
  children:
    | ArrayNodeIdsProps["id"][]
    | { [props in Id]: ObjectNodeProps<Id> }
    | Map<Id, MapNodeProps<Id>>;
  value: V;
}

export class Node_v2<
  T extends nodeTypeTypes,
  Id extends string | number | symbol,
  V
> implements INode_v2<T, Id, V>
{
  static nodeTypes = nodeTypes;
  #NOT_IMPLEMENTED = "not yet implemented";
  constructor(props: ArrayNodeIdsProps<Id>);
  constructor(props: ObjectNodeProps<Id>);
  constructor(props: MapNodeProps<Id>);
  constructor(props: Node_v2Props<Id>) {
    switch (props.type) {
      case "array_ids":
        this.children = props.children as number[];
        this.id = props.id;
        this.value = props.value as V;
        break;
      case "array_nodes":
        throw new Error(this.#NOT_IMPLEMENTED);
      case "map":
        throw new Error(this.#NOT_IMPLEMENTED);
      case "object":
        throw new Error(this.#NOT_IMPLEMENTED);

      default:
        this.children = props.children as number[];
        this.id = props.id;
        this.value = props.value as V;
        break;
    }
  }
  addChild(n: number) {
    if (Array.isArray(this.children))
      this.children.push(n as number);
    else throw new Error("not yet implemented");
    return this;
  }
  hasChild(n: number) {
    if (Array.isArray(this.children))
      return this.children.some(edge => edge === n)
        ? true
        : false;
    else throw new Error("not yet implemented");
  }
  findAdjacentNodes() {
    if (Array.isArray(this.children))
      return this.children as Id[];
    else throw new Error("not yet implemented");
  }
  hasChildren: () => boolean = () => {
    if (Array.isArray(this.children))
      return this.children.length > 0;
    else throw new Error("not yet implemented");
  };
}

export type Node_v2Ctor<
  T extends nodeTypeTypes = nodeTypes.array_ids,
  Id extends string | number | symbol = string,
  V = unknown
> = {
  new (props: ArrayNodeIdsProps<Id>): Node_v2<T, Id, V>;
};

export const Node_v2Ctor: Node_v2Ctor = Node_v2;
