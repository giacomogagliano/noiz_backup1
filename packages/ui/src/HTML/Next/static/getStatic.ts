import { ParsedUrlQuery } from "querystring";
import {
  handleFetchWithoutPaths,
  handleFetchWithPaths,
} from "./handleFetch/";
import { ramWithoutPaths, ramWithPaths } from "./ram/";
import {
  withoutPathsReturn,
  withPathsReturn,
} from "./Types";

/**
 * This is an helper function which goal is to break down
 * the elaborated method to retrieve static datas with Next.
 * It does this by providing a function whose returns are
 * the getStaticProps or getStaticPaths AND getStaticProps.
 *
 * RAM: This type of function call shall be used when we
 * want to provide quick datas to the page. The function
 * extends to receive the database from which extract the
 * datas.
 *
 * fetch: this is the method which shall be used when we
 * have an API endpoint to query for datas. Usually this API
 * sit in the `page/api` of the application.
 *
 * This function accepts 2 generic types which define:
 * 1. the shape of the data
 * 2. the shape of the params object return from
 * getStaticPaths.
 *
 * Usage:
 * - getStaticProps
 *   ```
 *   // with RAM
 *   const data = { id: "", name: "bub" };
 *   type datatype = typeof data;
 *   const database = [data, { id: "1", name: "ciii" }];
 *   const origin = { projects: [data] };
 *   type props = typeof origin;
 *
 *   export const { getStaticProps } = getStatic<datatype>(
 *     "RAM",
 *     origin,
 *     "projects",
 *     database
 *   );
 *
 *   // with fetch
 *   export const { getStaticProps } = getStatic<NftData>(
 *   "fetch",
 *   "http://localhost:3000/api/nfts",
 *   "data"
 *   );
 *   ```
 * - getStaticPaths and getStaticProps.
 *   ```
 *   const data = { id: "", name: "bub" };
 *   type datatype = typeof data;
 *   const database = [data, { id: "1", name: "ciii" }];
 *   const origin = { project: data };
 *   type props = typeof origin;
 *   const query = { id: "" };
 *
 *   export const { getStaticPaths, getStaticProps } = getStatic<
 *     datatype,
 *     { id: string }
 *   >("RAM", origin, "project", database, query, "id", [
 *     { params: { id: "0" } },
 *     { params: { id: "1" } },
 *     { params: { id: "2" } },
 *   ]);
 *
 *   // with fetch
 *   export const { getStaticPaths, getStaticProps } = getStatic<
 *     NftData,
 *     { id: string }
 *   >(
 *     "fetch",
 *     "http://localhost:3000/api/nfts",
 *     "data",
 *     undefined,
 *     { id: "" },
 *     "id"
 *   );
 *   ```
 * @param type choose the type of storage from which the
 * getStatic function shall retrieve datas from. At the
 * moment only RAM is implemented, I am working of the fetch
 * function integration.
 * RAM: retrieves datas from a memory slot on the machine on
 * which the application is running. This type is usefull
 * at the frist stage of application building.
 * fetch: retrieves data by fetching the provided url.
 * @param origin Depending on the selected type, orgin can
 * be:
 * - an object representing the datas expected by the page.
 * - an url string.
 * @param field it's a string representing the name of the
 * field inside which the datas will be computed it. This
 * is the object which will be passed down to the page
 * component props.
 * @param data This argument can have two types passed down
 * to it:
 * - RAM: an array containing objects with the shape of the
 *   data passed in origin.
 * - Fetch: undefined (as it will be retrieved by the fetch)
 * @param query_origin Similarly to origin this argument
 * represents the shape of the object which will be
 * contained in the `params` object in the paths returned by
 * getStaticPaths.
 * @param query it's a string which represents the name of
 * the object iside which the id of the required item will
 * be wrapped in. The value of this string MUST corresponf
 * to the value included withing `[]` in the filename. (for
 * example `[id].tsx` / `[id].jsx` requires the object in
 * params to be called `id`).
 * @param paths this parameters is only used when passing
 * `RAM` as type for the function. It representse the list
 * of paths containing a `params` object in which there is
 * the key with which the datas are identiefieds, which
 * shall
 * @returns
 * @returns
 */
export function getStatic<
  Data extends { [key: string]: any },
  PageData extends { [key: string]: Data[] } = {
    [key: string]: Data[];
  },
  Field extends keyof PageData = keyof PageData
>(
  type: "RAM",
  origin: PageData,
  field: Field,
  data: Data[]
): withoutPathsReturn<PageData>;

export function getStatic<
  Data extends { [key: string]: any },
  PageData extends { [key: string]: Data[] } = {
    [key: string]: Data[];
  },
  Field extends keyof PageData = keyof PageData
>(
  type: "fetch",
  origin: string,
  field: Field
): withoutPathsReturn<PageData>;

export function getStatic<
  Data extends { [key: string]: any },
  Query extends ParsedUrlQuery = ParsedUrlQuery,
  PageData extends { [key: string]: Data } = {
    [key: string]: Data;
  },
  Field extends keyof PageData = keyof PageData,
  QueryKey extends keyof Query = keyof Query,
  Paths extends { params: Query }[] = { params: Query }[]
>(
  type: "RAM",
  origin: PageData,
  field: Field,
  data: Data[],
  query_origin: Query,
  query: QueryKey,
  paths: Paths
): withPathsReturn<PageData, Query>;
/**
 *
 * @param type
 * @param origin
 * @param field
 * @param data
 * @param query_origin
 * @param query
 */
export function getStatic<
  Data extends { [key: string]: any },
  Query extends ParsedUrlQuery = ParsedUrlQuery,
  PageData extends { [key: string]: Data } = {
    [key: string]: Data;
  },
  Field extends keyof PageData = keyof PageData,
  QueryKey extends keyof Query = keyof Query,
  Paths extends { params: Query }[] = { params: Query }[]
>(
  type: "fetch",
  origin: string,
  field: Field,
  data: undefined,
  query_origin: Query,
  query: QueryKey
): withPathsReturn<PageData, Query>;

export function getStatic<
  Data extends { [key: string]: any },
  Query extends ParsedUrlQuery = ParsedUrlQuery,
  PageData extends
    | { [key: string]: Data[] }
    | { [key: string]: Data } = {
    [key: string]: Data[];
  },
  Field extends keyof PageData = keyof PageData,
  QueryKey extends keyof Query = keyof Query,
  Paths extends { params: Query }[] = { params: Query }[]
>(
  type?: "RAM" | "fetch",
  origin?: PageData | string,
  field?: Field,
  data?: Data[],
  query_origin?: Query,
  query?: QueryKey,
  paths?: Paths
):
  | withoutPathsReturn<PageData>
  | withPathsReturn<PageData, Query>
  | undefined {
  query_origin;

  if (type === "RAM" && typeof origin !== "string") {
    if (!query && field && origin && Array.isArray(data)) {
      return ramWithoutPaths<Data, PageData>(
        origin,
        field,
        data
      );
    }
    if (query && origin && field && data && paths) {
      console.log("called getStatic in rAM and query");
      return ramWithPaths<Data, PageData, Query>(
        origin,
        field,
        data,
        query,
        paths
      );
    }
  }
  if (type === "fetch" && typeof origin === "string") {
    if (!query)
      return handleFetchWithoutPaths<
        Data,
        // @ts-expect-error
        PageData,
        Field
      >(origin, field);
    if (query && typeof origin === "string")
      return handleFetchWithPaths<
        Data,
        Query,
        // @ts-expect-error
        PageData,
        Field,
        QueryKey,
        Paths
      >(origin, field, query_origin, query);
  }
  console.log("arriver till the shit");
}
