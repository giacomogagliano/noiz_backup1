import { ParsedUrlQuery } from "querystring";
import { ramWithPaths, ramWithoutPaths } from "./ram/";
import {
  withoutPathsReturn,
  withPathsReturn,
} from "./Types";

export function ram<Data extends { [key: string]: any }>(
  type: "without",
  data: Data[]
): withoutPathsReturn<Data>;
export function ram<Data, Query extends ParsedUrlQuery>(
  type: "with",
  data: Data
): withPathsReturn<Data, Query>;
export function ram<Data, Query extends ParsedUrlQuery>(
  type: "with" | "without",
  data: Data[]
) {
  // con overloads
  // @ts-expect-error
  if (type === "with") return ramWithPaths<Data, Query>();
  if (type === "without")
    // @ts-expect-error
    return ramWithoutPaths<Data>(data);
}
