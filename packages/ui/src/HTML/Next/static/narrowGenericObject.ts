/**
 * Generic Object type, it includes any of the types which
 * can be assigned to a key inside an object in Javascrip.
 * The type of the members is passed down as Generic variable.
 */
export type GenericObject<T> = { [key: string | number | symbol]: T };

/**
 * This Utility type narrows the fields (members) of a
 * generic object of type:
 * ```
 * type GenericObject<T> = { [key: string | number | symbol]: T };
 * ```
 * Usage:
 * ```
 * type made = narrowGenericObject<{ id: string }, "cs">;
 * const obj: made = { cs: { id: "" }, fs: "" }; // 'fs' should give error
 * ```
 */
export type narrowGenericObject<
  MembersType,
  Key extends keyof GenericObject<MembersType> = keyof GenericObject<MembersType>
> = Pick<GenericObject<MembersType>, Key>;

/**
 * This is a type for an utility function which accepts a
 * generic type and narrows it to the key passed in the arguments
 */
type narrowGenericObjectFunc = <
  MembersType,
  G extends
    | narrowGenericObject<GenericObject<MembersType>, Key>
    | GenericObject<MembersType>,
  Key extends keyof GenericObject<MembersType> = keyof GenericObject<MembersType>
>(
  members: MembersType,
  generic: G,
  field: Key
) => narrowGenericObject<MembersType, Key>;

/**
 * This function implements the narrowGenericObjectFunc
 * type. It takes a generic object and return it typed
 * correctly according to the arguments passed
 *
 * Usage:
 * ```
 * const gen: GenericObject<string> = {};
 * const barrr = narrowGenericObjectFunc("", gen, "bubu");
 * barrr.bubu = "";
 * barrr.ciao // should give an error
 * ```
 * @param members The expected type of the members of the
 * resultin object
 * @param generic The initial generic object which get typed
 * transformed by this function
 * @param field the field that shall be retained from the
 * passed generic object.
 * @returns
 */
export const narrowGenericObjectFunc: narrowGenericObjectFunc = (
  members,
  generic,
  field
) => {
  generic;
  if (field in generic === true)
    return generic as narrowGenericObject<typeof members, typeof field>;
  else throw new Error("Something went wrong");
};
