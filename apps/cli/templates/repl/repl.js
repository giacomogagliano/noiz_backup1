// source https://www.mrw.it/javascript/node-js-repl-come-usarla_12433.html

const child_process = require("child_process");
const exec = child_process.exec;
const spawn = child_process.spawn;
const repl = require("repl");

const replServer = repl.start({
  prompt: "$  ",
  ignoreUndefined: true,
});

replServer.setupHistory(".log", () => {});
const startTime = new Date().getTime();
const currentTime = new Date().getTime();
const endTime = new Date().getTime();

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

replServer.on("exit", () => {
  process.stdout.write("Grazie per aver usato la Repl. Buona giornata!\n");
  process.exit();
});

replServer.defineCommand("time", {
  help: "Mostra l'ora corrente",
  action() {
    const orario = new Date();
    const currentTime = new Date().getTime();
    const timeOn = currentTime - startTime;

    let ore = orario.getHours();
    let minuti = orario.getMinutes();

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

replServer.defineCommand("cleanHistory", {
  help: "cleans the log history",
  action() {
    exec("rm .log && touch .log", (error, stdout, stderr) => {
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
