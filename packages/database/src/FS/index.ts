//// THIS IS THE FS ENTRY POINT EXPORT
// export * from "../../giacomo/FS/FileSystem.js";
// export * from "../../giacomo/FS/System.js";
// classes
// export * from "./classes/Reader.js";
// export * from "./classes/Watcher.js";
// export * from "./classes/Writer.js";
export { ZionCsv } from "./classes/";
export type { IZionCsv } from "./classes/";
export { ZionYaml, ZionYamlToFile } from "./classes";
export { ZionYaml as NoizYaml } from "./classes";
export { NoizPath } from "./classes";
export { NoizBabel } from "./classes";
export * from "../FS/classes/System";
// lib
// export * from "./lib/CRUD.js";
// export * from "./lib/read.js";
// export * from "./lib/readJSON.js";
// export * from "./lib/readPackageJSON.js";
// export * from "./lib/readTSconfigJSON.js";
// export * from "./lib/types/index.js";

export * as classes from "./classes";
export { reader, Reader } from "./classes";
export * as lib from "./lib";
export * as scripts from "./scripts";
