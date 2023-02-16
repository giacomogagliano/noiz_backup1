import repl from "repl";
import ts from "typescript";
import * as tsnode from "ts-node";

// Create a ts-node replService
const replService: tsnode.ReplService = tsnode.createRepl();
const service = tsnode.create({ ...replService.evalAwarePartialHost });
service.ts = ts;
replService.setService(service);

// create a node-repl server
const replServer = repl.start({
  prompt: "$  ",
  ignoreUndefined: true,
  eval: replService.nodeEval,
});

// setup environment
replServer.setupHistory(".log", () => {});
