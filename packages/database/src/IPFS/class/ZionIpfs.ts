import { ZionIpfsCore } from "./Core";
import { ZionIpfsHttp } from "./Http/ZionIpfsHttp";
import { IZionIpfs } from "./Types/ZionIpfs.types";

export const ZionIpfs: IZionIpfs = function (type: any): any {
  if (type === "core") return ZionIpfsCore;
  else return ZionIpfsHttp;
};
