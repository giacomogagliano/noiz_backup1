import { Folder } from "../Folder";

export enum treeNodeTypes {
  root = "root",
  file = "file",
  folder = "folder",
}

export type treeNodeTypeType = keyof typeof treeNodeTypes;

export interface ITreeNode_v2<T> {
  id: number;
  type: treeNodeTypeType;
  value: T;
  parent: TreeNode_v2[];
  children: TreeNode_v2[];
}

export interface TreeNode_v2<T> extends ITreeNode_v2<T> {
  addParent(node: TreeNode_v2<T>): this;
  addChild(node: TreeNode_v2<T>): this;
  findSiblings(): TreeNode_v2<T>[];
  findChildren(): TreeNode_v2<T>[] | string;
  findParent(): TreeNode_v2<T> | undefined;
  dfs(): this;
  bfs(): this;
  dijkstra(): string;
}

export class TreeNode_v2<T = any>
  implements TreeNode_v2<T>
{
  static #types: typeof treeNodeTypes = treeNodeTypes;

  static #treeNodes: TreeNode_v2[] = [];

  static get treeNodes() {
    return TreeNode_v2.#treeNodes;
  }

  static get types() {
    return this.#types;
  }
  // TODO move this function somewhere in database
  // was a Reader but had to put any cause it would make
  // this package import from database
  static makeNodes(res: any, data: Folder | File) {
    if (res.targetResult.length) {
      this.makeIndex(data);
    } else {
      this.makeModule(data);
    }
  }

  static makeModule(data: Folder | File) {
    if (!("types" in data)) throw new Error("");
    if (!data.types) throw new Error("");
    data.type = data.types?.module;
  }

  static makeIndex(data: Folder | File) {
    if (!("types" in data)) throw new Error("");
    if (!data.types) throw new Error("");
    data.type = data.types?.index;
  }

  #type: treeNodeTypeType = TreeNode_v2.#types.root;
  get type() {
    return this.#type;
  }

  constructor(props?: T) {
    TreeNode_v2.#treeNodes.push(this);
    this.id = TreeNode_v2.length;
    if (props) this.value = props;
  }

  get treeId() {
    return JSON.stringify(this);
  }

  connettiAGenitore(node: TreeNode_v2) {
    if (this.parent) this.parent.push(node);
    return this;
  }

  connettiAFiglio(node: TreeNode_v2) {
    if (this.children) this.children.push(node);
    node.connettiAGenitore(this);
    return this;
  }

  get isRoot() {
    return this.type === TreeNode_v2.types.root;
  }

  get isFolder() {
    return this.type === TreeNode_v2.types.folder;
  }

  get isFile() {
    return this.type === TreeNode_v2.types.file;
  }

  trovaSiblings() {
    if (this.isRoot)
      throw new Error("Il nodo root non ha Siblings");
    let servedArray: TreeNode_v2[] = [];
    // this.genitore[0].figlio;
    TreeNode_v2.#treeNodes.forEach(treeNode => {
      if (!treeNode.parent) return;
      if (!this.parent) return;
      if (!this.parent[0]) return;
      if (!treeNode.parent[0]) return;
      if (treeNode.parent[0].id === this.parent[0].id) {
        // console.log(treeNode.genitore[0]);
        servedArray.push(treeNode);
      }
    });
    return servedArray;
  }

  pushChildInArray =
    (result: TreeNode_v2[]) => (child: TreeNode_v2) => {
      if (!child) return;
      result.push(child);
    };

  trovaFigli() {
    const isFile = this.type === "file";
    if (isFile) throw new Error("I file non hanno figli");
    let result: TreeNode_v2[] = [];
    if (!this.children) return [];
    this.children.forEach(this.pushChildInArray(result));
    Object.freeze(result);
    return result;
  }

  NO_PARENTS = "Il nodo root non ha genitori";
  trovaGenitore() {
    if (this.isRoot) throw new Error(this.NO_PARENTS);
    if (this.parent) return this.parent[0];
  }
}
