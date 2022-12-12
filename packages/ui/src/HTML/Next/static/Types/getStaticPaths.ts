import { GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";

export type getStaticPaths<Query extends ParsedUrlQuery> =
  GetStaticPaths<Query>;
