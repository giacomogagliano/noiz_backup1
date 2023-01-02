import util from "util";
import { Condizioni } from "../Condizioni";
import {
  upperCaseFirst,
  splitAt,
  convertDecimalToFractionString,
  modulo,
  massimoComuneDivisore,
  quantiDecimaliDopoLaVirgola,
  chiamaNVolteCallback,
  changePosition,
  checkArrayElementsConstructor,
  checkArraysContent,
  checkObjectConstructor,
  extractSameElementsFromArray,
  hasArrayObjectElements,
  isArrayEmpty,
  popFirst,
  removeSpaceFromString,
  sliceArray,
  subtractArrays,
  sortDescending,
  stringifyBase64,
  removeDirectoryLevels,
  // joinPaths,
  // buildPathTuple,
  // buildPaths,
} from "../";
import { join } from "path";

interface IInspectArguments {
  object: any;
  showHidden?: boolean;
  depth?: number;
  color?: boolean;
}
export type DebugLogger = util.DebugLogger;

export interface IZionUtils_v1 {
  ////// util
  inspect(obj: IInspectArguments): string;
  debuglog(
    section: string,
    callback?:
      | ((fn: util.DebugLoggerFunction) => void)
      | undefined
  ): util.DebugLogger;
  promisify: <TCustom extends Function>(
    fn: util.CustomPromisify<TCustom>
  ) => TCustom;
  ////// zion
  // ARRAY
  checkArraysContent: <T>(
    array: T[],
    nextArray: T[]
  ) => boolean;
  checkArrayElementsConstructor<T>(
    array: T[],
    constructor: Function
  ): boolean;
  checkObjectConstructor(
    object: object,
    constructor: Function
  ): boolean;
  hasArrayObjectElements(
    array: object[]
  ): boolean | string;
  isArrayEmpty(array?: any[]): boolean;
  changePosition<T>(
    array: T[],
    old: number,
    new_pos: number
  ): T[] | string;
  extractSameElementsFromArray<
    T extends string | boolean | number
  >(
    array1: T[],
    array2: T[]
  ): T[];
  popFirst<T>(array: T[]): T[];
  removeSpaceFromString(
    type: number,
    string: string
  ): string;
  sliceArray<T>(size: number, array: T): T[][] | string;
  subtractArrays(arr1: string[], arr2: string[]): string[];
  // STRINGS
  splitAt(string: string, symbol: string): string[];
  upperCaseFirst(string: string): string;
  stringifyBase64(this: this): string;
  // SORTING
  sortDescending<T>(
    a: T[],
    b: T[],
    index: number
  ): number | undefined;
  // CALLBACK
  chiamaNVolteCallback<T>(
    volte: number,
    callback: Function
  ): T[];
  // MATH
  quantiDecimaliDopoLaVirgola(number: number): number;
  massimoComuneDivisore(a: number, b: number): number;
  modulo(a: number, b: number): number;
  convertDecimalToFractionString(decimale: number): string; //////////FATTO
  // PATHS
  removeDirectoryLevels(
    filePath: string,
    levels: number
  ): string;
  joinPaths(...paths: string[]): string;
  buildPathTuple(
    paths: string[],
    text: string
  ): [string, string];
  buildPaths(
    path: string,
    array: string[]
  ): [string, string][];
}

export class ZionUtils_v1 implements IZionUtils_v1 {
  condizioni: Condizioni;
  constructor() {
    this.condizioni = new Condizioni();
  }
  ////// Zionutils_v1
  inspect = util.inspect;
  debuglog = util.debuglog;
  promisify = util.promisify;
  ////// zion
  ////// arrays
  checkArraysContent = checkArraysContent;
  checkArrayElementsConstructor =
    checkArrayElementsConstructor;
  checkObjectConstructor = checkObjectConstructor;
  hasArrayObjectElements = hasArrayObjectElements;
  isArrayEmpty = isArrayEmpty;
  changePosition = changePosition;
  extractSameElementsFromArray =
    extractSameElementsFromArray;
  popFirst = popFirst;
  removeSpaceFromString = removeSpaceFromString;
  sliceArray = sliceArray;
  subtractArrays = subtractArrays;
  // strings
  splitAt = splitAt;
  upperCaseFirst = upperCaseFirst;
  stringifyBase64 = stringifyBase64;
  // sorting
  sortDescending = sortDescending;
  // callback
  chiamaNVolteCallback = chiamaNVolteCallback;
  // maths
  quantiDecimaliDopoLaVirgola =
    quantiDecimaliDopoLaVirgola;
  massimoComuneDivisore = massimoComuneDivisore;
  modulo = modulo;
  convertDecimalToFractionString =
    convertDecimalToFractionString;
  // paths
  removeDirectoryLevels = removeDirectoryLevels;
  joinPaths(...paths: string[]) {
    return join(...paths);
  }
  buildPathTuple(paths: string[], text: string) {
    let res: [string, string] = [
      this.joinPaths.bind(this)(...paths),
      text,
    ];
    return res;
  }
  buildPaths(path: string, array: string[]) {
    const res = array.map(item =>
      this.buildPathTuple.bind(this)([path, item], item)
    );
    return res;
  }
}
