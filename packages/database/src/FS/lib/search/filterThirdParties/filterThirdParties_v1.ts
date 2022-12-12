import { filterZeitIn } from "../filterZeitIn";

export function filterThirdParties_v1<
  ObjectToEdit,
  Field extends keyof ObjectToEdit & { [key: string]: string },
  Key extends keyof Field & string,
  Value extends Field[Key] & string
>(deps: [Key, Value][], obj: ObjectToEdit, field: Field) {
  deps
    .filter(filterZeitIn)
    .sort()
    // TODO trovare solution typescript
    // @ts-expect-error
    .forEach((ent) => (obj[field][ent[0]] = ent[1]));
}
