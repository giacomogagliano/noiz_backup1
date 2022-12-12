import { IZionIpfsCoreCtor } from "../Core/Types";
import { IZionIpfsHttpCtor } from "../Http";

export {};

export type ZionIpfsArgs = {};

export interface IZionIpfs {
  (type: "http", args?: ZionIpfsArgs): IZionIpfsHttpCtor;
  (type: "core", args?: ZionIpfsArgs): IZionIpfsCoreCtor;
}
