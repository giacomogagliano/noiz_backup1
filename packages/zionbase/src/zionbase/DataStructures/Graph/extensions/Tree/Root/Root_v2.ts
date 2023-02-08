import { TreeNode_v2 } from "..";
import { FileSystemTree } from "../FileSystemTree";

enum rootTypes {
  index = "repo",
  module = "monorepo",
}
type rootTypeTypes = keyof typeof rootTypes;

export interface IRoot_v2 {
  _type: rootTypeTypes;
}

export interface Root_v2
  extends FileSystemTree<IRoot_v2> {}

export class Root_v2 extends FileSystemTree<IRoot_v2> {
  #type = TreeNode_v2.types.root;
  get type() {
    return this.#type;
  }
}

export type Root_v2Ctor = {
  new (): Root_v2;
};

export const Root_v2Ctor: Root_v2Ctor = Root_v2;
