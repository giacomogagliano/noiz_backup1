import { start } from "repl";
import * as tsnode from "ts-node";

const tsNodeConfig = {
  compilerOptions: {
    target: "ES2017",
    module: "commonjs",
  },
};

tsnode.register({
  compilerOptions: {
    target: "ES2017",
    module: "CommonJS",
  },
});

const tsrepl: tsnode.ReplService = tsnode.createRepl({
  stdin: process.stdin,
  stdout: process.stdout,
});

const { nodeEval } = tsrepl;

tsnode.register(tsNodeConfig);

start({
  prompt: "$  ",
  ignoreUndefined: true,
  eval: nodeEval,
});
