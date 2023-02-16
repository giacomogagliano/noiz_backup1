// source https://www.mrw.it/javascript/node-js-repl-come-usarla_12433.html

import { exec, spawn } from "child_process";
import repl from "repl";
import ts from "typescript";
import * as tsnode from "ts-node";

const tsNodeConfig = {
  compilerOptions: {
    target: "ES5",
    module: "commonjs",
  },
};

tsnode.register(tsNodeConfig);

function formatTime(time: Date) {
  function addZero(t: number) {
    return "0" + t.toString();
  }
  function timeUnitToString(t: number) {
    if (t >= 10) return t.toString();
    else return addZero(t);
  }
  const seconds = timeUnitToString(time.getSeconds());
  const minutes = timeUnitToString(time.getMinutes());
  const hours = timeUnitToString(time.getHours() - 1);
  const array = [hours, minutes, seconds];
  return array.join(":");
}

// Create a ts-node replService
const replService: tsnode.ReplService = tsnode.createRepl();
const service = tsnode.create({ ...replService.evalAwarePartialHost });
service.ts = ts;
service.options.esm = true;
replService.setService(service);

// create a node-repl server
const replServer = repl.start({
  prompt: "$  ",
  ignoreUndefined: true,
  eval: replService.nodeEval,
});

// setup environment

// setup log
replServer.setupHistory(".log", () => {});
const startTime = new Date().getTime();

Object.defineProperty(replServer.context, "v8", {
  configurable: false,
  enumerable: true,
  value: `Versione corrente di V8: ${process.versions.v8}`,
});

// reference for a pre-loaded function
// Object.defineProperty(replServer.context, "somma", {
//   configurable: false,
//   enumerable: true,
//   value: function somma(a, b) {
//     return a + b;
//   },
// });

replServer.defineCommand("time", {
  help: "Mostra l'ora corrente",
  action() {
    const orario = new Date();
    const currentTime = new Date().getTime();
    const timeOn = currentTime - startTime;

    let ore: string | number = orario.getHours();
    let minuti: string | number = orario.getMinutes();

    ore = (ore < 10 ? "0" : "") + ore;
    minuti = (minuti < 10 ? "0" : "") + minuti;

    process.stdout.write("\n========== ORARIO ==========\n");
    process.stdout.write(`           ${ore}:${minuti}\n`);
    process.stdout.write(`           ${timeOn}\n`);
    process.stdout.write("============================\n");

    this.displayPrompt();
  },
});

replServer.defineCommand("reload", {
  help: "closes and restarts the shell",
  action() {
    spawn("sh", ["startRepl.sh"], {
      stdio: "inherit",
      detached: true,
    });
    process.exit();
  },
});

const COMMAND = "rm .log && touch .log";
replServer.defineCommand("cleanHistory", {
  help: "cleans the log history",
  action() {
    // third argument is stderr
    exec(COMMAND, (error, stdout, _) => {
      if (error) {
        process.stderr.write("exec error\n" + error.message + "\n");
        return;
      }
      process.stdout.write("History cleaned!\n" + stdout ? stdout + "\n" : "");
      this.setupHistory(".log", () => {});
      this.displayPrompt();
    });
  },
});

replServer.on("exit", () => {
  const endTime = new Date().getTime();
  const totalTimeOn = endTime - startTime;
  process.stdout.write("Sei stato nel repl per: " + formatTime(new Date(totalTimeOn)) + "\n");
  process.exit();
});
