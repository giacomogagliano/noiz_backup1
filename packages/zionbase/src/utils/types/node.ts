import { IstringifyBase64 } from "../node/util";
import { IZionUtils } from "../node/util";
import { IdataGuard_v1 } from "../node/util/ZionUtils/guard/dataGuard/dataGuard_v1";
import { Iguard_v1 } from "../node/util/ZionUtils/guard/guard_v1";

export interface node {
  dataGuard: IdataGuard_v1;
  guard: Iguard_v1;
  stringifyBase64: IstringifyBase64;
  zionUtil: IZionUtils;
}
