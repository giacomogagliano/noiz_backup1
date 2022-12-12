import {
  CID,
  HTTPClientExtraOptions,
  IZionIpfsHttp,
  RmOptions,
} from "./ZionIpfsHttp";

export type deletePinType = (
  this: IZionIpfsHttp,
  ipfsPath: string | CID,
  options?: (RmOptions & HTTPClientExtraOptions) | undefined
) => Promise<void>;

export const deletePin: deletePinType = async function (ipfsPath, options?) {
  this.ipfs.pin.rm(ipfsPath, options);
};
