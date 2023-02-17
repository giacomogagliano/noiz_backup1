import { TreeNode } from "../TreeNode";

export interface Root_v1 extends TreeNode {
  root: boolean;
}

export class Root_v1 extends TreeNode implements TreeNode {
  static #roots: TreeNode[] = [];
  #type = "root";
  constructor(
    name: string,
    path: string,
    typeNumber: number,
    treeId: unknown,
    depth: number
  ) {
    super(name, path, typeNumber, treeId, depth);
    this.root = true;
    this.#type;
    Root_v1.#roots.push(this);
  }
}

export interface Root_v1Ctor {
  new (
    name: string,
    path: string,
    typeNumber: number,
    treeId: unknown,
    depth: number
  ): Root_v1;
}
