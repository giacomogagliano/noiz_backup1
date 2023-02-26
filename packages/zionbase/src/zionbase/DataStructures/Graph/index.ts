import {
  Graph_v4 as v4,
  Graph_v4 as v4Props,
} from "./Graph_v4";
export {
  Graph_v3,
  ArrayGraph_v3Ctor as ArrayGraph,
  // MapGraph_v3Ctor as MapGraph,
} from "./Graph_v3";
export type {
  FluidGraph,
  ArrayGraphProps,
  MapGraphProps,
} from "./Graph_v3";

export { Graph_v2 } from "./Graph_v2";
export type { Graph_v2Props } from "./Graph_v2";

export {
  Graph_v1 as Graph,
  Graph_v1Ctor as GraphCtor,
} from "./Graph_v1";
export type {
  IGraph_v1 as IGraph,
  Graph_v1Props as GraphProps,
} from "./Graph_v1";

//// Node
export * from "./Node";

export * as extensions from "./extensions";
export {
  AppGraph,
  AppGraphCtor,
  AppNode,
  AppNodeCtor,
  File,
  FileSystemTree,
  FileSystemTreeCtor,
  Folder,
  Folder_v2,
  LeafNode_v2,
  ListGraph,
  ListGraphCtor,
  MatrixGraph,
  MatrixGraphCtor,
  Root,
  Root_v2,
  Tree,
  TreeNode,
  TreeNode_v2,
} from "./extensions";

//// Edge
export * from "./Edge";

export const Graph_v4 = v4;
export type Graph_v4Props = v4Props;
