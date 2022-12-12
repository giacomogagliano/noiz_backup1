import { TreeNode_v2 } from "..";

export interface IFileSystemTree_v1 {
  name: string;
  path: string;
  size: number;
}

export interface FileSystemTree_v1<T>
  extends TreeNode_v2<IFileSystemTree_v1 & T> {
  name: string;
  path: string;
  size: number;
}

export class FileSystemTree_v1<
  T = unknown
> extends TreeNode_v2<IFileSystemTree_v1 & T> {}

export type FileSystemTree_v1Ctor = {
  new (): FileSystemTree_v1;
};

export const FileSystemTree_v1Ctor: FileSystemTree_v1Ctor =
  FileSystemTree_v1;
