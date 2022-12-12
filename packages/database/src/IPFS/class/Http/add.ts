import {
  AddOptions,
  AddResult,
  HTTPClientExtraOptions,
  ImportCandidate,
  IZionIpfsHttp,
} from "./ZionIpfsHttp";

export type addType = (
  this: IZionIpfsHttp,
  entry: ImportCandidate,
  options?: AddOptions & HTTPClientExtraOptions
) => Promise<AddResult>;

export const add: addType = async function (this, entry, options?) {
  return this.ipfs.add(entry, options);
};
