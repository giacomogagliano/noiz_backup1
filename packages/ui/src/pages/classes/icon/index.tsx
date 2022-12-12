import React from "react";
import Link from "next/link";
import path from "path";
import { Icon } from "../../../HTML/React/classes";
import "@zionstate/utils";
import { node } from "@zionstate/zionbase/utils";
// FS.system.joinPaths;

const upperCase = node.util.zionUtil.upperCaseFirst;
const joinPaths = node.util.zionUtil.joinPaths;
const buildPathTuple = node.util.zionUtil.buildPathTuple;
const buildPaths = node.util.zionUtil.buildPaths;

// const joinPaths = NoizPath.joinPaths;

// function buildPathTuple(paths: string[], text: string) {
//   let res: [string, string] = [joinPaths(...paths), text];
//   return res;
// }

/**
 * usage:
 * ```ts
 * const root = "/classes";
 * const iconpaths = ["account", "album", "arrowBack"];
 * const builtPaths = buildPaths(root, iconpaths);
 * function buildPaths(path: string, array: string[]) {
 *   const res = array.map((item, index, array) =>
 *     buildPath([path, item], item)
 *   );
 *   return res;
 * }
 * ```
 * @param paths
 * @param text
 * @returns
 */
// function buildPaths(path: string, array: string[]) {
//   const res = array.map((item, index, array) =>
//     buildPathTuple.bind(node.util.zionUtil)(
//       [path, item],
//       item
//     )
//   );
//   return res;
// }

function createLinks(
  path: [string, string],
  index: number
) {
  const LinkRes = (
    <div key={index}>
      <Link href={path[0]}>{upperCase(path[1])}</Link>
      <br />
    </div>
  );
  return LinkRes;
}

export default function index() {
  // TODO #12 aggiungere link ad ogni icona
  // TODO mettere le icone in mezzo la pagina e a tutto
  // schermo, forse questo conviene farlo se possibile nel
  // defaul delle icone
  const root = "/classes/icon";
  const iconpaths = Icon.svgslist();
  const builtPaths = buildPaths.bind(node.util.zionUtil)(
    root,
    iconpaths
  );
  const mappedPaths = builtPaths.map(createLinks);
  return <div>{mappedPaths}</div>;
}
