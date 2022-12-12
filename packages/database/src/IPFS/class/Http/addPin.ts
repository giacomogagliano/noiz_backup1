import * as IPFSHTTP from "ipfs-http-client";
import {
  AddOptions,
  HTTPClientExtraOptions,
  IZionIpfsHttp,
} from "./ZionIpfsHttp";

export type addPinType = (
  this: IZionIpfsHttp,
  cid: string | IPFSHTTP.CID,
  options?: AddOptions & HTTPClientExtraOptions
) => Promise<void>;

export const addPin: addPinType = async function (this, cid, options?) {
  this.ipfs?.pin.add(cid, options);
};
