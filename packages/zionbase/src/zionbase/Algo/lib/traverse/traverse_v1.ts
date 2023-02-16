const BIGINT_ERROR = "cannot traverse a bigint value";
const BOOLEAN_ERROR = "cannot traverse a boolean value";
const FUNCTION_ERROR = "cannot traverse a function";
const NUMBER_ERROR = "cannot traverse a number value";
const STRING_ERROR =
  "cannot traverse a string value, at least not yet";
const SYMBOL_ERROR = "cannot traverse a symbol value";
const UNDEFINED_ERROR =
  "cannot traverse an undefined value";

type value = string | number;
function simpleRecurse(obj: object | value, value: value) {
  if (typeof obj !== "object") {
    return obj === value;
  }
  for (let key in obj) {
    if (!obj.hasOwnProperty(key)) return false;
    const value_ = obj[key as keyof typeof obj];
    if (!simpleRecurse(value_, value)) continue;
    if (simpleRecurse(value_, value)) return true;
  }
  return false;
}

interface traverseArray {
  (a: Array<unknown>, cb: () => unknown): Array<unknown>;
}
const traverseArray: traverseArray = function (a) {
  let popped = a.pop();
  let stack: unknown[] = [popped];
  let res: unknown[] = [];
  let edges: Map<string, unknown[]> = new Map<
    string,
    unknown[]
  >();
  while (stack.length) {
    let curr = stack.pop();
    res.push(curr);
    if (curr && typeof curr === "object") {
      // object
      // every key is an edge
      for (let key in curr) {
        if (key in curr) {
          const value = curr[key as keyof typeof curr];
          const store = edges.get(value);
          if (!store) throw new Error("");
          store.push(value);
          edges.set(key, store);
        }
      }
    }
    if (curr) {
      // array
    }
  }
  return res;
};

type arrayType = Array<unknown>;
type objectType = {
  [k: string | number | symbol]: unknown;
};
type data = arrayType | objectType;

function checkType(data: data): data {
  if (Array.isArray(data)) {
    return data;
  } else if (typeof data === "object") {
    return data;
  } else {
    switch (typeof data) {
      case "bigint":
        throw new Error(BIGINT_ERROR);
      case "boolean":
        throw new Error(BOOLEAN_ERROR);
      case "function":
        throw new Error(FUNCTION_ERROR);
      case "number":
        throw new Error(NUMBER_ERROR);
      case "string":
        throw new Error(STRING_ERROR);
      case "symbol":
        throw new Error(SYMBOL_ERROR);
      case "undefined":
        throw new Error(UNDEFINED_ERROR);
      default:
        return data;
    }
  }
}

function isArrayType(
  data: arrayType | any
): data is arrayType {
  if (Array.isArray(data)) return true;
  else return false;
}

function isObjectType(
  data: objectType | any
): data is objectType {
  if (Array.isArray(data)) return true;
  else return false;
}

export interface Itraverse_v1 {
  (data: data): unknown;
}

export const traverse_v1: Itraverse_v1 = function (data) {
  const safedata = checkType(data);
  const isArray = isArrayType(data);
  const isObject = isObjectType(data);
  if (isArray) {
    data.forEach;
  }
  if (isObject) {
    data;
  }
};

const testArray = [
  [1, 2, 1],
  [2, 4, 2],
];
