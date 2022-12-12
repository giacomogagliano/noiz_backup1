import { ParsedUrlQuery } from "querystring";
import { withPathsReturn } from "../Types";

export function ramWithPaths<
  Data extends { [key: string]: any },
  PageData extends { [key: string]: Data[] } | { [key: string]: Data } = {
    [key: string]: Data;
  },
  Query extends ParsedUrlQuery = ParsedUrlQuery,
  Key extends keyof PageData = keyof PageData,
  ArgData extends PageData[Key] = PageData[Key],
  QueryKey extends keyof Query = keyof Query,
  Paths extends { params: Query }[] = { params: Query }[]
>(
  origin: PageData,
  field: Key,
  data: ArgData | Data[],
  query: QueryKey,
  paths: Paths
): withPathsReturn<PageData, Query> {
  return {
    getStaticPaths: async () => {
      return { paths, fallback: false };
    },
    // TODO sistemare
    // @ts-expect-error
    getStaticProps: async ({ params }) => {
      if (!params) throw new Error("");
      const index = Number(params[query]);
      // TODO sistemare
      // @ts-expect-error
      origin[field] = data[index];
      return {
        props: origin,
      };
    },
  };
}
