import { withoutPathsReturn } from "../Types/";

export function ramWithoutPaths<
  Data extends { [key: string]: any },
  PageData extends { [key: string]: Data[] } | { [key: string]: Data } = {
    [key: string]: Data[];
  },
  Key extends keyof PageData = keyof PageData,
  ArgData extends PageData[Key] = PageData[Key]
>(
  origin: PageData,
  field: Key,
  data: ArgData | Data[]
): withoutPathsReturn<PageData> {
  return {
    getStaticProps: async () => {
      origin[field] = data as ArgData;
      return { props: origin };
    },
  };
}
