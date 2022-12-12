import { File } from "./File";
import { Folder } from "./Folder";
import { Root } from "./Root";
import { TreeNode } from "./TreeNode";
import { node } from "../../../../utils";

const zionUtil = node.util.zionUtil;

enum TreeErrors {
  NO_NODE = "non è stato fornito alcun nodo da aggiungere",
  ARRAY = "È stato fornito un array.",
  NO_TREE_NODE = "Non è stato fornito un oggetto di tipo TreeNode",
  REMOVE_ERR1 = "Non è stato fornito alcun nodo da rimuovere",
  NOTHIN_TO_RM = "No nodeToRemove",
  NOTHIN_TO_CK = "Non è stato fornito alcun nodo da controllare",
  NOTHIN_TO_FD = "Non è stato fornito alcun nodo da cercare",
}

// TODO aggiunto per zittare ts
export type TTTT = TreeNode;

export interface Tree {
  id: number;
  add(node: TreeNode): Tree;
  remove(nodeToRemove: TreeNode): number;
  isPresent(node2Check: TreeNode): boolean;
  findByLevel(depth: number): TreeNode[];
}

export class Tree {
  static #trees: Tree[] = [];
  #nodes: TreeNode[] = [];
  get nodes() {
    let servedArray: TreeNode[] = [...this.#nodes];
    Object.freeze(servedArray);
    return servedArray;
  }
  id: number;
  get size(): number {
    return this.#nodes.length;
  }
  constructor(nodes: TreeNode[] = []) {
    nodes.forEach(node => this.#nodes.push(node));
    Tree.#trees.push(this);
    this.id = Tree.#trees.length;
  }
  errors = TreeErrors;

  isArray = (nodeToRemove: TreeNode) =>
    Array.isArray(nodeToRemove);

  isTNode = (nodeToRemove: TreeNode) =>
    nodeToRemove.constructor === TreeNode;

  add(node: TreeNode) {
    const errArray = this.errors.ARRAY;
    if (!node) throw new Error(this.errors.NO_NODE);
    if (Array.isArray(node)) throw new Error(errArray);
    let condition =
      node.constructor !== File &&
      node.constructor !== Root &&
      node.constructor !== Folder &&
      node.constructor !== TreeNode;
    const error1: string = this.errors.NO_TREE_NODE;
    if (condition) throw new Error(error1);
    this.#nodes.push(node);
    return this;
  }

  findNodeByName =
    (nodeToFind: TreeNode) => (node: TreeNode) =>
      node.name === nodeToFind.name;
  #nodeToRemove: TreeNode[] = new Array(1);
  get nodeToRemove() {
    return this.#nodeToRemove;
  }
  set nodeToRemove(newNodeToRemove: TreeNode[]) {
    this.#nodeToRemove = newNodeToRemove;
  }

  remove(nodeToRemove: TreeNode) {
    const isArray = this.isArray(nodeToRemove);
    const isTNode = this.isTNode(nodeToRemove);
    const nodes = this.#nodes;
    const nodesLenght = nodes.length;
    const last = nodesLenght - 1;
    if (!nodeToRemove)
      throw new Error(this.errors.REMOVE_ERR1);
    if (isArray) throw new Error(this.errors.ARRAY);
    if (!isTNode)
      throw new Error(this.errors.NO_TREE_NODE);
    const find = this.findNodeByName(nodeToRemove);
    const move = zionUtil.changePosition;
    const idxOfNode2Rm = nodes.findIndex(find);
    const isLast = idxOfNode2Rm + 1 === nodesLenght;
    if (!isLast) move(nodes, idxOfNode2Rm, last);
    this.#nodes.pop();
    return idxOfNode2Rm;
  }

  isPresent(node2Check: TreeNode) {
    const isArray = Array.isArray(node2Check);
    const isTsNode = this.isTNode(node2Check);
    if (!node2Check)
      throw new Error(this.errors.NOTHIN_TO_CK);
    if (isArray) throw new Error(this.errors.ARRAY);
    if (!isTsNode)
      throw new Error(this.errors.NO_TREE_NODE);
    const find = this.findNodeByName(node2Check);
    const result = this.#nodes.findIndex(find);
    return result === -1 ? false : true;
  }

  find(nodoDaCercare: TreeNode) {
    const errMess1 = this.errors.NOTHIN_TO_FD;
    const errMess2 = this.errors.ARRAY;
    const errMess3 = this.errors.NO_TREE_NODE;
    const isArray = this.isArray(nodoDaCercare);
    const isTrNode = this.isTNode(nodoDaCercare);
    if (!nodoDaCercare) throw new Error(errMess1);
    if (isArray) throw new Error(errMess2);
    if (!isTrNode) throw new Error(errMess3);
    const find = this.findNodeByName(nodoDaCercare);
    return find(nodoDaCercare);
  }

  findByLevel(depth: number): TreeNode[] {
    let servedArray: TreeNode[] = [];
    const forEach = (node: TreeNode) => {
      if (node.depth === depth) servedArray.push(node);
    };
    this.#nodes.forEach(forEach);
    return servedArray;
  }
}

export abstract class BinaryTree extends Tree {
  constructor(nodes: TreeNode[]) {
    super(nodes);
  }
  findMin() {}
  findMax() {}
}
