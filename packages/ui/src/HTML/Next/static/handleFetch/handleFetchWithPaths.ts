import { node } from "@zionstate/zionbase/utils";
import { ParsedUrlQuery } from "querystring";
import { withPathsReturn } from "../Types/";

const handleFetch = node.fetch.handleFetch;

export function handleFetchWithPaths<
  Data extends { [key: string]: any },
  Query extends ParsedUrlQuery = ParsedUrlQuery,
  PageData extends { [key: string]: Data } = {
    [key: string]: Data;
  },
  Field extends keyof PageData = keyof PageData,
  QueryKey extends keyof Query = keyof Query,
  Paths extends { params: Query }[] = { params: Query }[]
>(
  origin: string,
  field: Field,
  query_origin: Query,
  query: QueryKey
): withPathsReturn<Data, Query> {
  origin;
  field;
  query_origin;
  query;
  return {
    getStaticPaths: async () => {
      let paths: Paths | [] = [];
      const res = await handleFetch<{
        [key: string]: Data;
      }>(origin);
      for (let key in res) {
        res[key];
        // @ts-expect-error
        let obj: { params: Query } = { params: {} };
        // @ts-expect-error
        obj.params[query] = res[key].id.toString();
        // @ts-expect-error
        paths.push(obj);
      }
      return {
        paths,
        fallback: false,
      };
    },
    // @ts-expect-error
    getStaticProps: async ({ params }) => {
      console.log("called handlefetchwithpaths", params);
      // @ts-expect-error
      const id = params[query];
      const res = await handleFetch<Data>(
        origin + "/" + id
      );
      const obj = {};
      // @ts-expect-error
      obj[field] = res;
      return {
        props: obj,
      };
    },
  };
}
