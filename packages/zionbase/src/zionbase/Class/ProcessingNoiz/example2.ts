import {
  functionality,
  plugin,
  ProcessingNoiz,
  processor,
} from ".";

type aType = { name: string };
const blobProc: processor<aType> = mutator => a => {
  a.name = a.name + mutator.name;
  return a;
};

let blob = new ProcessingNoiz(blobProc);

let avulc: plugin<aType>,
  agirl: plugin<aType>,
  scratched: plugin<aType>;

const simpleProcessor: functionality<aType> = (
  a: aType
) => {
  return { name: a.name + "auch" };
};

avulc = blob.makePlugin({ name: "🌋" });
agirl = blob.makePlugin({ name: "🧑" });
scratched = blob.makePlugin(simpleProcessor);

const res3 = blob
  .use(avulc)
  .use(agirl)
  .use(scratched)
  .process({ name: "santa-" });
console.log(res3);
