import { AppGraph, AppNode } from "@zionstate/zionbase";

export type CliGraph_v1Data = "CliGraph_v1Data";
export type CliGraph_v1Booleans = "CliGraph_v1Booleans";
export type CliGraph_v1Props = "CliGraph_v1Props";
export type CliGraph_v1ClassProps =
  "CliGraph_v1ClassProps";
export type CliGraph_v1AsChild = "CliGraph_v1AsChild";

export class CliGraph extends AppGraph {}

export class CliNode extends AppNode {
  type: string = "node";
  constructor(props: {
    id: string;
    actions?: string[];
    children?: string[];
  }) {
    super(props);
  }
}

export class Step extends CliNode {
  override type: string = "step";
  constructor(props: {
    id: string;
    actions?: string[];
    children?: string[];
  }) {
    super(props);
  }
}
export class Option extends CliNode {
  override type: string = "option";
  constructor(props: {
    id: string;
    actions?: string[];
    children?: string[];
  }) {
    super(props);
  }
}
export class Prompt extends CliNode {
  override type: string = "prompt";
  constructor(props: {
    id: string;
    actions?: string[];
    children?: string[];
  }) {
    super(props);
  }
}
export class Action extends CliNode {
  override type: string = "action";
  constructor(props: {
    id: string;
    actions?: string[];
    children?: string[];
  }) {
    super(props);
  }
}

const node1 = new Step({ id: "step1" });
const folder = new Option({ id: "folder" });
const file = new Option({ id: "file" });
const step2 = new Step({ id: "step2" });
const index = new Option({ id: "index" });
const createIndex = new Action({ id: "cIndex" });
const module_ = new Option({ id: "module" });
const step3 = new Step({ id: "step3" });
const classe = new Option({ id: "class" });
const createClass = new Action({ id: "cClass" });
const component = new Option({ id: "component" });
const createComponent = new Action({ id: "cComponent" });
const close = new Action({ id: "close" });

const abb = [
  node1,
  step2,
  step3,
  folder,
  file,
  index,
  createIndex,
  module_,
  classe,
  createClass,
  component,
  createComponent,
  close,
];

const globo = CliGraph.addElement(abb, node1);

const graph = new CliGraph({
  id: "root",
  nodes: globo,
});

graph.makeApp([
  graph
    .getById("step1")
    .next([
      graph
        .getById("folder")
        .next([graph.getById("step2").id]).id,
      graph
        .getById("file")
        .next([graph.getById("step3").id]).id,
    ]).id,
]);

console.log("ciao", graph);
