import { IZionIpfsHttp } from "./ZionIpfsHttp";

export type catType = (
  this: IZionIpfsHttp,
  entry: string
) => Promise<string | undefined>;

export const cat: catType = async function (
  this: IZionIpfsHttp,
  entry: string
) {
  const res = this.ipfs.cat(entry);
  let data;
  for await (const r of res) {
    data = Buffer.from(r).toString();
  }
  return data;
};
