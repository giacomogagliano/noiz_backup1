export interface IsearchObject_v1 {
  (obj: object, value: string | number): boolean;
}

export function searchObject_v1(
  obj: object | string | number,
  value: string | number
) {
  let control = obj === value;
  if (control) {
    return value === (obj as string | number);
  }

  for (const key in obj as object) {
    if (!obj.hasOwnProperty(key)) return false;
    const value_ = obj[key as keyof typeof obj];
    const isValue = searchObject_v1(value_, value);
    if (!isValue) continue;
    return true;
  }
  return false;
}
