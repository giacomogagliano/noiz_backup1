import React from "react";
import Link from "next/link";
import { Icon } from "../../../HTML/React/classes";
import { node } from "@zionstate/zionbase/utils";

const upperCase = node.util.zionUtil.upperCaseFirst;
const buildPaths = node.util.zionUtil.buildPaths;

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
  const root = "/classes/icon";
  const iconpaths = Icon.svgslist();
  const builtPaths = buildPaths.bind(node.util.zionUtil)(
    root,
    iconpaths
  );
  const mappedPaths = builtPaths.map(createLinks);
  return (
    <div>
      {mappedPaths}
      {createLinks(["./icon/loading", "loading"], 0)}
    </div>
  );
}
