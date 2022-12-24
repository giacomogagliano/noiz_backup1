/**
 * Describes the type of constructor used in the arguments
 * of this class
 */
export type Mix_v2Constructor = new (...args: any[]) => {};

/**
 * Describes the type of Mixin used in the with method of
 * this class.
 */
export type Mix_v2Mixin = (
  superclass: ZionTypes.Class.Constructor,
  id: number
) => new (...arg: any[]) => {};

/**
 * Interface of the Mix class
 */
export interface IMix_v2 {
  with<T>(...mixins: Mix_v2Mixin[]): T;
}

/**
 * Interface which merges with the class. In this particular
 * case it is empty.
 */
export interface Mix_v2 {}

/**
 * Second type of pattern for the Mix class.
 * // TODO #161 @giacomogagliano add example
 */
export class Mix_v2 implements IMix_v2 {
  constructor(public superclass: Mix_v2Constructor) {}
  with<T>(...mixins: Mix_v2Mixin[]): T {
    let counter = -1;
    for (let mixin of mixins) {
      counter++;
      this.superclass = class New extends (
        mixin(this.superclass, counter)
      ) {};
    }
    return this.superclass as unknown as T;
  }
}

/**
 * Describes the class itself, use this to validate an input
 * with require this class as argument.
 */
export type Mix_v2Ctor = {
  new (superclass: Mix_v2Constructor): Mix_v2;
};

/**
 *  This is the same class as the main one exported in the
 *  file. It is mainly used to double check the class
 *  constructor arguements. It can be used to define an
 *  input or even to create an instance.
 */
export const Mix_v2Ctor: Mix_v2Ctor = Mix_v2;
