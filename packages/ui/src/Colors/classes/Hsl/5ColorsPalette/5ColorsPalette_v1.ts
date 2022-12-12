import { Hsl } from "../";

export class _5ColorsPalette_v1 {
  constructor(
    public color1: Hsl["value"],
    public color2: Hsl["value"],
    public color3: Hsl["value"],
    public color4: Hsl["value"],
    public color5: Hsl["value"]
  ) {}
}
/////// dynamic naming
// export const nameIt = <M extends string>(
//   name: M,
//   cls: new (...args: any[]) => any
// ) => ({ [name]: class extends cls {} }[name]);

// const Ggggg = nameIt("ola", class {});
// const bu = new Ggggg();

// const bobo = "strs";

// class Fondi {
//   ["strin"]: string = "";
// }

// const boc = new Fondi();

// export function goooo<M extends string>(
//   member: M
// ): { [props in M]: undefined } {
//   return {
//     [member]: undefined,
//   } as { [props in M]: undefined };
// }
// const ug = goooo("ciao");
