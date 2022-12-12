import * as IPFSHTTP from "ipfs-http-client";
import { addPin, addPinType } from "./addPin";
import { listPins, listPinType } from "./listPins";
import { deletePin, deletePinType } from "./deletePin";
import { cat, catType } from "./cat";
import { add, addType } from "./add";
export type { AddOptions, AddResult } from "ipfs-core-types/src/root";
export type { ImportCandidate } from "ipfs-core-types/src/utils";
export type { RmOptions, LsOptions, LsResult } from "ipfs-core-types/pin";
import * as IPFSHTTP_TYPES from "ipfs-http-client/dist/src/types";

export type EndpointConfig = IPFSHTTP_TYPES.EndpointConfig;
export type HTTPClientExtraOptions = IPFSHTTP_TYPES.HTTPClientExtraOptions;
export type IPFSHTTPClient = IPFSHTTP_TYPES.IPFSHTTPClient;
export type IPLDOptions = IPFSHTTP_TYPES.IPLDOptions;
export type LoadBaseFn = IPFSHTTP_TYPES.LoadBaseFn;
export type LoadCodecFn = IPFSHTTP_TYPES.LoadCodecFn;
export type LoadHasherFn = IPFSHTTP_TYPES.LoadHasherFn;
export type Options = IPFSHTTP_TYPES.Options;
export type CID = IPFSHTTP.CID;

export type IZionIpfsHttp = {
  id: string;
  ipfs: IPFSHTTP.IPFSHTTPClient;
  cat: catType;
  add: addType;
  addPin: addPinType;
  listPins: listPinType;
  deletePin: deletePinType;
};

export interface IZionIpfsHttpCtor {
  new (id: string, host: string): IZionIpfsHttp;
}

export const ZionIpfsHttp: IZionIpfsHttpCtor = class implements IZionIpfsHttp {
  ipfs: IPFSHTTPClient;
  constructor(public id: string = `ipfs_zion`, host: string) {
    this.id = id;
    this.ipfs = IPFSHTTP.create({ host });
  }
  cat = cat;
  add = add;
  addPin = addPin;
  listPins = listPins;
  deletePin = deletePin;
};
// https://ipfs.io/ipfs/QmZV4Yg9HyX5EnHJfi5KJxEy4MjdYQ9y2i8u8uxm721bWN?filename=QmZV4Yg9HyX5EnHJfi5KJxEy4MjdYQ9y2i8u8uxm721bWN
