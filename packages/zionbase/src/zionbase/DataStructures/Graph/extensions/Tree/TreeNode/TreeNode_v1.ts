// @ts-nocheck
import { Reader } from "../../../../FileSystem";
import { Folder } from "../Folder";

enum TreeNodeTypes {
  root,
  file,
  folder,
}

export namespace TreeNodeTs {
  export type RequiredFields = {
    name: string;
    path: string;
    typeNumber: number;
    treeId: unknown;
  };
  export type OptionalFields = {
    genitore?: TreeNode_v1[];
    figlio?: TreeNode_v1[];
    depth?: number;
    children?: TreeNode_v1[];
    root?: boolean;
    type?: string;
    id?: number;
  };
}

export interface TreeNode_v1 {
  name?: string;
  path?: string;
  typeNumber?: number | TreeNodeTypes;
  treeId?: unknown;
  depth?: number;
  genitore?: TreeNode_v1[];
  figlio?: TreeNode_v1[];
  root: true | false;
  type?: string;
  id?: number;
  stringedDir?: string | undefined;
  _isLastChild?: boolean;
  toStringedTree(): string;
  stringedName(
    name: string,
    type: unknown,
    depth: number,
    folders: string[][],
    string: string,
    folderId: number,
    nomeDeiFileInNodeChildren: string[],
    _isLastChild: boolean | undefined,
    isRoot: boolean
  ): {
    _string: string;
    _folders: string[][];
    _folderId: number;
  };
  connettiAGenitore(node: TreeNode_v1): TreeNode_v1;
  connettiAFiglio(node: TreeNode_v1): TreeNode_v1;
  isRoot(): boolean;
  isFolder(): boolean;
  trovaSiblings(): TreeNode_v1[];
  trovaFigli(): TreeNode_v1[] | string;
  trovaGenitore(): TreeNode_v1 | undefined;
}

export class TreeNode_v1 implements TreeNode_v1 {
  static #types: ("Folder" | "File")[] = [
    "Folder",
    "File",
  ];
  static #treeNodes: TreeNode_v1[] = [];
  static get treeNodes() {
    return TreeNode_v1.#treeNodes;
  }
  static get types() {
    return this.#types;
  }
  static nodeTypes: typeof TreeNodeTypes = TreeNodeTypes;
  static makeNodes(res: Reader, data: Folder | File) {
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
  constructor(
    public name?: string,
    public path?: string,
    public typeNumber?: number,
    public treeId?: unknown,
    public depth?: number,
    public genitore?: TreeNode_v1[],
    public figlio?: TreeNode_v1[],
    public children?: TreeNode_v1[],
    public root: boolean = false,
    public type?: string,
    public id?: number,
    public stringedDir?: string,
    public _isLastChild?: boolean
  ) {
    this.name = name;
    this.path = path;
    this.genitore = [];
    this.figlio = [];
    if (typeNumber)
      this.type = TreeNode_v1.#types[typeNumber];
    this.children = [];
    TreeNode_v1.#treeNodes.push(this);
    this.id = TreeNode_v1.length;
    this.treeId = treeId;
  }
  toStringedTree = (): string => {
    let string: string,
      stack: TreeNode_v1[] = [this],
      treeStrings: string[] = [],
      folders: string[][] = [],
      folderId = -1,
      stringedTree: string = "";

    while (stack.length) {
      let currentNode = stack.pop(),
        nomeDeiFileInNodeChildren: string[] = [];

      if (!currentNode) return "no current node";

      if (currentNode.children) {
        let children = currentNode.children;
        // children.reverse();

        for (let child of children) {
          if (!child.name)
            throw new Error("no child name");
          nomeDeiFileInNodeChildren.push(child.name);
          stack.push(child);
        }
      }

      string = "";
      if (!currentNode.name) throw new Error("no name");
      if (!currentNode.depth) throw new Error("no depth");

      let { _string, _folders, _folderId } =
        this.stringedName(
          currentNode.name,
          currentNode.type,
          currentNode.depth,
          folders,
          string,
          folderId,
          nomeDeiFileInNodeChildren,
          currentNode._isLastChild,
          currentNode.isRoot()
        );

      string = _string;
      folderId = _folderId;
      folders = _folders;
      currentNode.stringedDir = string;
      treeStrings.push(string);
    }

    stringedTree = treeStrings.join("");

    return stringedTree;
  };
  stringedName = (
    name: string,
    type: unknown,
    depth: number,
    folders: string[][],
    string: string,
    folderId: number,
    nomeDeiFileInNodeChildren: string[],
    _isLastChild: boolean | undefined,
    isRoot: boolean
  ): {
    _string: string;
    _folders: string[][];
    _folderId: number;
  } => {
    let tab = `\n`,
      pattern: string = "",
      counter: number = 0,
      _string: string,
      _folders: string[][],
      _folderId: number;

    if (depth === 1) pattern = "  ";
    if (depth > 1) pattern = "│ ";

    while (depth) {
      depth--;
      counter++;
      if (counter === 1) pattern = "  ";
      if (counter !== 1) pattern = "│ ";
      tab = tab + pattern;
    }

    if (type === TreeNode_v1.#types[0]) {
      folders.push(nomeDeiFileInNodeChildren);
      if (isRoot) string = `${tab}└─┬${name}`;
      else string = `${tab}├─┬${name}`;
      folderId++;
    }

    if (type === TreeNode_v1.#types[1]) {
      string = this.formatFolderString(
        folders,
        folderId,
        name,
        string,
        tab
      );
    }

    _string = string;
    _folders = folders;
    _folderId = folderId;

    return { _string, _folders, _folderId };
  };

  formatFolderString(
    folders: string[][],
    folderId: number,
    name: string,
    string: string,
    tab: string
  ) {
    if (!folders) throw new Error("no folders");
    const folder = folders[folderId];
    if (!folder) throw new Error("");
    const length = folder.length;
    const positionToCheck = length - 1;
    if (name === folder[positionToCheck])
      string = `${tab}├──${name}`;
    else string = `${tab}└──${name}`;
    return string;
  }

  connettiAGenitore(node: TreeNode_v1) {
    if (this.genitore) this.genitore.push(node);
    return this;
  }
  connettiAFiglio(node: TreeNode_v1) {
    if (this.figlio) this.figlio.push(node);
    node.connettiAGenitore(this);
    return this;
  }
  isRoot() {
    if (this.root) return true;
    else return false;
  }
  isFolder(): boolean {
    return false;
  }
  trovaSiblings() {
    if (this.isRoot())
      throw new Error("Il nodo root non ha Siblings");
    let servedArray: TreeNode_v1[] = [];

    // this.genitore[0].figlio;
    TreeNode_v1.#treeNodes.forEach(treeNode => {
      if (!treeNode.genitore) return;
      if (!this.genitore) return;
      if (!treeNode.genitore[0]) return;
      if (
        treeNode.genitore[0].name === this.genitore[0].name
      ) {
        // console.log(treeNode.genitore[0]);
        servedArray.push(treeNode);
      }
    });
    return servedArray;
  }
  trovaFigli() {
    if (this.type === TreeNode_v1.#types[1])
      throw new Error("I file non hanno figli");
    let servedArray: TreeNode_v1[] = [];
    if (!this.figlio) return "no figlio";
    this.figlio.forEach(child => {
      if (!child) return;
      servedArray.push(child);
    });
    Object.freeze(servedArray);
    return servedArray;
  }
  trovaGenitore() {
    if (this.isRoot())
      throw new Error("Il nodo root non ha genitori");
    if (this.genitore) return this.genitore[0];
  }
}
