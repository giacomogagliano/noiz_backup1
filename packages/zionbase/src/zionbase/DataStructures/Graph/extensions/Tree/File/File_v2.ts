import { FileSystemTree } from "../FileSystemTree";
import { TreeNode_v2 } from "../TreeNode";

export enum fileTypes {
  ts,
  tsx,
  js,
  jsx,
  sol,
  md,
  yaml,
  json,
  svg,
  noiz,
  csv,
}
type fileTypeTypes = keyof typeof filesStatuses;

enum filesStatuses {
  "working ✅" = "working ✅",
  "notter ⛔️" = "notter ⛔️",
  "default-noiz" = "default-noiz",
  "icons-not-showing" = "icons-not-showing",
  "index-??" = "index-??",
}
type fileStatusesTypes = keyof typeof filesStatuses;

export interface IFile_v2 {
  _type: fileTypeTypes;
  extension: string;
  name_without_extension: string;
  status: fileStatusesTypes;
  depth: number;
}

export interface File_v2
  extends FileSystemTree<IFile_v2> {}

export class File_v2 extends FileSystemTree<IFile_v2> {
  #type = TreeNode_v2.types.file;
  get type() {
    return this.#type;
  }
}

export type File_v2Ctor = {
  new (): File_v2;
};

export const File_v2Ctor: File_v2Ctor = File_v2;
