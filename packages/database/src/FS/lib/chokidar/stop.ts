import { EventEmitter } from "events";

export const emitter = new EventEmitter();

async function emit() {
  // const { emitter } = await import("../../src/Watcher.js");
  emitter.emit("close");
  console.log("emitted");
}
emit();
