import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

export type getStaticPropsWithPaths<
  Data extends { [key: string]: any },
  PageData extends { [key: string]: Data } = { [key: string]: Data },
  Query extends ParsedUrlQuery = ParsedUrlQuery
> = GetStaticProps<PageData, Query>;
