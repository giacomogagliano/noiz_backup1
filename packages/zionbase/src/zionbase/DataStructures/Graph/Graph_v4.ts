// @ts-ignore
import { Mix } from "../../Mixin";
import { MixAbstract } from "../../Mixin";
import type { ComplexMixin } from "../../Types";

interface ILookUp_able {
  look_up: unknown;
}
type LookUp_ableType = ComplexMixin<ILookUp_able>;

const LookUp_able: LookUp_ableType = function (ctor) {
  return class Graph extends ctor implements ILookUp_able {
    constructor(...args: unknown[]) {
      super(...args);
    }
    look_up: unknown;
  };
};
// @ts-ignore
class Some {}

abstract class Edge {
  abstract type: string;
  a: unknown;
  b: unknown;
}
// @ts-ignore
class Children extends Edge {
  type = "children";
  a: string;
  b: string;
  constructor(a: string, b: string) {
    super();
    this.a = a;
    this.b = b;
  }
}
// @ts-ignore
class Parent extends Edge {
  type = "parent";
}
// @ts-ignore
class OwnerOf extends Edge {
  type = "owner-of";
}

abstract class Node {
  abstract type: string;
  abstract edges: Array<unknown> | Map<unknown, unknown>;
}
// @ts-ignore
interface Folder {
  type: "folder";
  edges: Edge[];
}
// @ts-ignore
class Folder extends Node {
  type: "folder" = "folder";
}

interface Graph {
  addNode(node: Node): this;
}

abstract class Graph {
  abstract type: string;
  constructor(public name: string) {}
}
interface Neeclass {
  type: "tree";
}
class Neeclass extends new MixAbstract(Graph).with([
  LookUp_able,
]) {
  type = "tree" as const;
  constructor(name: string) {
    super();
    this.name = name;
  }
}
// @ts-ignore
const obj = new Neeclass("ciao");

interface Tree {
  type: "tree";
}
class Tree extends Graph {
  constructor(name: string) {
    super(name);
  }
}

interface Generic {
  type: "generic";
}
class Generic extends Graph {
  generic = true;
  constructor(name: string) {
    super(name);
  }
}

export abstract class Graph_v4 {
  static createGraph(type: "tree"): Tree;
  static createGraph(): Generic;
  static createGraph(type?: string): Graph {
    if (type) return new Tree("tree1");
    else {
      return new Generic("generic1");
    }
  }
}
// @ts-ignore
const bla = Graph_v4.createGraph();
