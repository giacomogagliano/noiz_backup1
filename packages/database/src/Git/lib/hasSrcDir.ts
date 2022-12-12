import { ZionError } from "@zionstate/zionbase/utils";
import { FS } from "../..";
import { Repo } from "../Repo";

const { system } = FS;
const { joinPaths, existsSync } = system;

const NOTREPONORSTRING_ERROR =
  "not an instance of repo nor of string";
const TOMANYARGS_ERROR =
  "too many arguments, 1 was expected";
const NRNS = NOTREPONORSTRING_ERROR;

export interface hasSrcFolder {
  (path?: string): boolean;
}
export interface hasSrcFolder {
  (this: Repo): boolean;
}
export function hasSrcFolder(
  this: Repo,
  path: string
): boolean {
  if (arguments.length > 1)
    throw new ZionError(
      TOMANYARGS_ERROR,
      hasSrcFolder.name,
      arguments
    );
  let computedpath: string | undefined, hasDir: boolean;
  if (this instanceof Repo) {
    computedpath = this.path;
  }
  if (typeof path === "string") {
    computedpath = path;
  }
  const src = "src";
  if (!computedpath)
    throw new ZionError(
      NRNS,
      hasSrcFolder.name,
      arguments
    );
  computedpath = joinPaths([computedpath, src]);
  hasDir = existsSync(computedpath);
  return hasDir;
}
