import { getStaticPropsWithoutPaths } from "./getStaticPropsWithoutPaths";

export type withoutPathsReturn<PageData extends { [key: string]: any }> = {
  getStaticProps: getStaticPropsWithoutPaths<PageData>;
};
