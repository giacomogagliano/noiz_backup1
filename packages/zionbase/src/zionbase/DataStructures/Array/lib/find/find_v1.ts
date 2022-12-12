// @ts-nocheck
export interface find1<T, L, K> {
  key: string;
  constructor: T;
  parameter: string;
  parsed: L;
  instance: K;
  callback: string;
}

export function find_v1<T, N, L, K>(
  key: string,
  constructor: T,
  parameter: string,
  parsed: L,
  instance: K,
  callback: string
): void;
export function find_v1<T, N, L, K>(
  key: string,
  constructor: T,
  parameter: string,
  parsed: L,
  instance: K,
  callback: string,
  paramToParse: string
): void;
export function find_v1<T, N, L, K>(
  key: string,
  constructor: T,
  parameter: string,
  parsed: L,
  instance: K,
  callback: string,
  paramToParse?: string
): void {
  if (parsed[parameter])
    parsed[parameter].map(parsedParam => {
      let res: N | undefined = constructor[parameter].find(
        item => item[key] === parsedParam
      );
      if (res) instance[callback](res);
    });
  if (paramToParse !== undefined) {
    let res: N | undefined = constructor[parameter].find(
      item => item[key] === parsed[paramToParse]
    );
    if (res) instance[callback](res);
  }
}
