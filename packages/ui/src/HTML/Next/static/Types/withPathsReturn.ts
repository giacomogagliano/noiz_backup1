import { ParsedUrlQuery } from "querystring";
import { getStaticPaths, getStaticPropsWithPaths } from "./index";

export type withPathsReturn<PageData, Query extends ParsedUrlQuery> = {
  getStaticPaths: getStaticPaths<Query>;
  // @ts-expect-error
  getStaticProps: getStaticPropsWithPaths<PageData, Query>;
};
