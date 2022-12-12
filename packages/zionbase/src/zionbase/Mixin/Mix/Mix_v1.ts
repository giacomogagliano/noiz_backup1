/**
 * Describes the type of constructor used in the arguments
 * of this class
 */
export type Mix_v1Constructor = new (...args: any[]) => {};

/**
 * Describes the type of Mixin used in the with method of
 * this class.
 */
export type Mix_v1Mixin = <T extends Mix_v1Constructor>(
  superclass: T
) => Mix_v1Constructor;

/**
 * Interface of the Mix class
 */
export interface IMix_v1<
  SuperclassGeneric extends Mix_v1Constructor = Mix_v1Constructor,
  MixinGeneric extends Mix_v1Mixin = Mix_v1Mixin
> {
  with(...mixins: MixinGeneric[]): SuperclassGeneric;
}

/**
 * Interface which merges with the class. In this particular
 * case it is empty.
 */
export interface Mix_v1 {}

/**
 * This is the first version of the mix with implemantation.
 * It works but it needs a dirty trick to have the
 * Typechecking return the correct value, but it actually
 * creates those from some reconstructed interface which is
 * drastically substituted to the original type:
 * ```js
 * // creates an interface mergin the 3 classes
 * interface IMixer extends IName, ISurname, Base {}
 *
 * const Mixer = new Mix<typeof Base, typeof Name | typeof Surname>(Base).with(
 *   Name,
 *   Surname
 * ) as unknown as GConstructor<IMixer>;
 *
 * const obj = new Mixer();
 * ```
 */
export class Mix_v1<
  SuperclassGeneric extends Mix_v1Constructor = Mix_v1Constructor,
  MixinGeneric extends Mix_v1Mixin = Mix_v1Mixin
> implements IMix_v1
{
  constructor(public superclass: SuperclassGeneric) {
    this.superclass = superclass;
  }
  with(...mixins: MixinGeneric[]) {
    return mixins.reduce(
      (c, mixin) => mixin(c) as SuperclassGeneric,
      this.superclass
    );
  }
}

/**
 * Describes the class itself, use this to validate an input
 * with require this class as argument.
 */
export interface Mix_v1Ctor<
  SuperclassGeneric extends Mix_v1Constructor = Mix_v1Constructor
> {
  new (superclass: SuperclassGeneric): Mix_v1;
}

/**
 *  This is the same class as the main one exported in the
 *  file. It is mainly used to double check the class
 *  constructor arguements. It can be used to define an
 *  input or even to create an instance.
 */
export const Mix_v1Ctor: Mix_v1Ctor = Mix_v1;
