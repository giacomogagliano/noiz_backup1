import { Palette_v2 as v2, Palette_v2Props as v2Props } from './Palette_v2';
export { Palette_v1 as Palette } from "./Palette_v1";
import type { Palette_v1 as v1Props } from "./Palette_v1";
///// EXPORT

export type colors_ = v1Props;
// export interface Palette extends v1Props {}
// export class Palette extends v1 {}
//////

//// ColorWheel
export * from "./ColorWheel";

//// Fluid1
export * from "./Fluid1";

//// Fluid2
export * from "./Fluid2";

//// Fluid3
export * from "./Fluid3";

//// Rainbow
export * from "./Rainbow";

export const Palette_v2 = v2;
export type Palette_v2Props = v2Props;
