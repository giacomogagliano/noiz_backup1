export {};
type BaseObject = Record<string, string>;

type ValuesAsKeys<T extends BaseObject> = {
  [K in keyof T as T[K]]: number;
};

type Values<T> = T[keyof T];

function useValuesAsKeys<T extends BaseObject>(arg: T): ValuesAsKeys<T>;
function useValuesAsKeys<T extends BaseObject>(arg: T) {
  return (Object.values(arg) as Array<Values<T>>).reduce(
    (acc, elem) => ({
      ...acc,
      [elem]: 1,
    }),
    {}
  );
}

// Example use case
const obj = { key1: "value1", key2: "value2" } as const;

const result = useValuesAsKeys(obj); // Type of result is {value1: number; value2: number}
result.value1; //ok
