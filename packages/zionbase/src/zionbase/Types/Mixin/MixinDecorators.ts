import * as Mixins from "./Mixins.js";

export type MixinDecoratoBroad = (mixin: any) => any;
export type MixinDecorator_Mixin = (mixin: Mixins.MixinAny) => any;
export type MixinDecorator_Mixin_Mixin = (mixin: Mixins.MixinAny) => Mixins.MixinAny;
export type MixinDecorator = (
  mixin: (superclass: new (...arg: any[]) => {}) => {}
) => <T>(superclass: new (...arg: any[]) => {}) => T extends Object ? T : never;
