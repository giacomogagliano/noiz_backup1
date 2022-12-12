import { AppGraph, AppNode } from "@zionstate/zionbase";

const node1 = new AppNode({ id: "step1" });
const folder = new AppNode({ id: "folder" });
const file = new AppNode({ id: "file" });
const step2 = new AppNode({ id: "step2" });
const index = new AppNode({ id: "index" });
const createIndex = new AppNode({ id: "cIndex" });
const module_ = new AppNode({ id: "module" });
const step3 = new AppNode({ id: "step3" });
const classe = new AppNode({ id: "class" });
const createClass = new AppNode({ id: "cClass" });
const component = new AppNode({ id: "component" });
const createComponent = new AppNode({ id: "cComponent" });
const close = new AppNode({ id: "close" });

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

const globo = AppGraph.addElement(abb, node1);

const graph = new AppGraph({
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
