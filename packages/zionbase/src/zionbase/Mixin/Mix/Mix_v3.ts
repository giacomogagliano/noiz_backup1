/**
 * Describes the type of constructor used in the arguments
 * of this class
 */
export type Mix_v3Constructor<T> = new (
  ...args: any[]
) => T;

/**
 * Describes the type of Mixin used in the with method of
 * this class.
 */
export type Mix_v3Mixin<X extends {}> = <
  TBase extends new (...args: any[]) => {}
>(
  Base: TBase,
  id: number
) => {
  new (...arg: any[]): X;
} & TBase;

/**
 * Interface of the Mix class
 */
export interface IMix_v3<MixedInterfaces = {}> {
  with(
    ...mixins: Mix_v3Mixin<any>[]
  ): Mix_v3Constructor<MixedInterfaces>;
}

/**
 * Interface which merges with the class. In this particular
 * case it is empty.
 */
export interface Mix_v3<MixedInterfaces extends {}> {}

/**
 * Third pattern for the Mix class.
 */
export class Mix_v3<MixedInterfaces = {}>
  implements IMix_v3
{
  constructor(public superclass: Mix_v3Constructor<any>) {}
  with(
    ...mixins: Mix_v3Mixin<any>[]
  ): Mix_v3Constructor<MixedInterfaces> {
    mixins.forEach((mixin, index) => {
      this.superclass = class extends (
        mixin<typeof this.superclass>(
          this.superclass,
          index
        )
      ) {};
    });
    return this.superclass;
  }
}

/**
 * Describes the class itself, use this to validate an input
 * with require this class as argument.
 */
export type Mix_v3Ctor = {
  new (superclass: Mix_v3Constructor<any>): Mix_v3;
};

/**
 *  This is the same class as the main one exported in the
 *  file. It is mainly used to double check the class
 *  constructor arguements. It can be used to define an
 *  input or even to create an instance.
 */
export const Mix_v3Ctor: Mix_v3Ctor = Mix_v3;
