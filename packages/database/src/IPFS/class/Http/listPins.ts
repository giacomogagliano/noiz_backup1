import {
  HTTPClientExtraOptions,
  IZionIpfsHttp,
  LsOptions,
  LsResult,
} from "./ZionIpfsHttp";

export type listPinType = (
  this: IZionIpfsHttp,
  options?: (LsOptions & HTTPClientExtraOptions) | undefined
) => Promise<LsResult[]>;

export const listPins: listPinType = async function (options?) {
  const res = this.ipfs.pin.ls(options);
  let data: LsResult[] = [];
  for await (const r of res) {
    data.push(r);
  }
  return data;
};
