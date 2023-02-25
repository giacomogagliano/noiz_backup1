import { TreeNode } from "../TreeNode";

enum folderTypes {
  index = "index",
  module = "module",
}
type folderTypeTypes = keyof typeof folderTypes;

export interface Folder_v1 extends TreeNode {
  depth?: number;
  types?: typeof folderTypes;
  type?: folderTypeTypes;
}

export class Folder_v1
  extends TreeNode
  implements TreeNode
{
  types? = folderTypes;
  constructor(
    public name?: string,
    public path?: string,
    public typeNumber?: number,
    public treeId?: unknown,
    public depth?: number
  ) {
    super(name, path, typeNumber, treeId, depth);
    this.depth;
  }
  isFolder(): boolean {
    return this.constructor === Folder_v1;
  }
}
export interface Folder_v1Ctor {
  new (
    name?: string,
    path?: string,
    typeNumber?: number,
    treeId?: unknown,
    depth?: number
  ): Folder_v1;
}
