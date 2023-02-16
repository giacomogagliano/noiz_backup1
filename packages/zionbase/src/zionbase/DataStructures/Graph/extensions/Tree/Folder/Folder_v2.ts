import { TreeNode_v2 } from "..";
import { FileSystemTree } from "../FileSystemTree";

enum folderTypes {
  index = "index",
  module = "module",
}
type folderTypeTypes = keyof typeof folderTypes;

export interface IFolder_v2 {
  _type: folderTypeTypes;
}

export interface Folder_v2
  extends FileSystemTree<IFolder_v2> {}

export class Folder_v2 extends FileSystemTree<IFolder_v2> {
  #type = TreeNode_v2.types.folder;
  get type() {
    return this.#type;
  }
}

export type Folder_v2Ctor = {
  new (): Folder_v2;
};

export const Folder_v2Ctor: Folder_v2Ctor = Folder_v2;
