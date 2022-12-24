import { TreeNode } from "../TreeNode";

enum filesStatuses {
  "working ✅" = "working ✅",
  "notter ⛔️" = "notter ⛔️",
  "default-noiz" = "default-noiz",
  "icons-not-showing" = "icons-not-showing",
  "index-??" = "index-??",
}
type fileStatusesTypes = keyof typeof filesStatuses;

export interface File_v1 extends TreeNode {
  extension?: string;
  fileSize?: number;
  status: fileStatusesTypes;
}

export class File_v1 extends TreeNode implements TreeNode {
  status: fileStatusesTypes = "working ✅";
  constructor(
    public name: string,
    public path: string,
    public typeNumber: number,
    public treeId: unknown,
    public depth: number,
    public extension?: string,
    public fileSize?: number
  ) {
    super(name, path, typeNumber, treeId, depth);
    delete this.children;
    this.extension = extension;
    this.fileSize = fileSize; // MB size of file
  }
}
// TODO #158 @giacomogagliano estendere file a immagine
// class Image extends File {
//   constructor(name, path, type, width, height) {
//     super(name, path, type);
//     this.size = new Size(width, height);
//   }
// }
