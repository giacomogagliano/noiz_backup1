export function add_v1Path(
  this: string[],
  fileInFolder: { name: string; path: string }
) {
  this.push(fileInFolder.path);
}

export type Parameter = string;
export type Key = string;

export function add_v1<T>(
  obj1: unknown,
  key: string,
  obj: unknown,
  parameter: string
): T;
export function add_v1<T>(
  obj1: T,
  key: string,
  obj: unknown,
  parameter: string,
  map: boolean
): T;
export function add_v1<T>(
  obj1: T,
  key: string,
  obj: unknown,
  parameter: string,
  map: boolean,
  path: string[]
): T;
export function add_v1<T>(
  obj1: T,
  key: string,
  obj: unknown,
  parameter: string,
  map?: boolean,
  path?: string[]
): T {
  if (!map && !path) {
    //@ts-expect-error
    obj1[key] = obj[parameter];
  } else if (!map) {
    //@ts-expect-error
    if (obj[parameter]) obj1[key] = obj[path[0]][path[1]];
  }
  return obj1;
}
// TODO #157 @giacomogagliano cancellare e rifare
