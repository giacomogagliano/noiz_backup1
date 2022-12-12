import { plugin, ProcessingNoiz, processor } from ".";

const stringProc: processor<string> = mutator => b =>
  mutator + b;

let string = new ProcessingNoiz(stringProc);

let vulc: plugin<string>,
  girl: plugin<string>,
  bride: plugin<string>;

vulc = string.makePlugin("🌋");
girl = string.makePlugin("🧑");
bride = string.makePlugin("🧖");

const res2 = string
  .use(vulc)
  .use(girl)
  .use(bride)
  .process("🎅");
console.log(res2);
