import { GetStaticProps } from "next";

export type getStaticPropsWithoutPaths<Data extends { [key: string]: any }> =
  GetStaticProps<Data>;
