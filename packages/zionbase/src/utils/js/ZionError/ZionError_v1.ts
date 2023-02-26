// import mongoose from "mongoose";

export interface ZionError_v1 extends Error {
  name: string;
  message: string;
  stack?: string;
  log(): void;
}

export interface ZionErrorConstructor {
  new (message?: string): Error;
  (message?: string): Error;
  readonly prototype: Error;
}

/**
 * @param message It's the name which appear in the console log
 * @param name It's the name which appear in the console log
 * @param args Object containing the called parameters
 */
export class ZionError_v1 extends Error {
  constructor(
    name?: string,
    message?: string,
    public args?: string[] | IArguments
  ) {
    super(message);
    if (name) this.name = name;
  }
  log() {
    process.stdout.write(JSON.stringify(this) + "\n");
  }
}

// let zionErrorSchema = new mongoose.Schema({
//   message: String,
//   name: String,
//   cause: Object,
//   args: Object,
// });

// zionErrorSchema.loadClass(ZionError);
// export let ZionErrorDoc = mongoose.model("Error", zionErrorSchema);

export default ZionError_v1;
