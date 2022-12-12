// TODO symbol.match type
// @ts-expect-error
export abstract class RegExpDescr implements RegExp {
  abstract exec(string: string): RegExpExecArray;
  abstract compile(pattern: string, flags?: string): this;
  abstract dotAll: boolean;
  abstract flags: string;
  abstract global: boolean;
  abstract ignoreCase: boolean;
  abstract lastIndex: number;
  abstract multiline: boolean;
  abstract source: string;
  abstract sticky: boolean;
  abstract test(string: string): boolean;
  abstract unicode: boolean;
  // abstract [Symbol.match];
  // abstract [Symbol.replace];
  // abstract [Symbol.search];
  // abstract [Symbol.split];
  // abstract [Symbol.matchAll];
}

export interface IZionRegExp extends RegExp {}

export class ZionRegExp_v1 extends RegExp implements IZionRegExp {
  static [key: string]: RegExp | unknown;
  static folderNameFromFolderPath = /\w+$/g;
  static valueBetweenSymbols = /((?<=[/]))(.*?)(?=\.)/;
  static getFileFromPath = /(?<=[/])\w*[.]\w*/g;
  static catchTheFirstWord = /^([\w]+)/g;
  static siCaseUnsensitive = /si/gi;
  static botCaseUnsensitive = /bot/gi;
  static checkFirstSlach = /(^\/)/i;
  static firstAndLast3 = /^.{3}?|.{3}?$/g;
  static everythingBetween = /\{(.*?)\}/g;
  static tsComment = /(\/\*.*\*\/)/g;
  static tsComment2 = /\/\/.*\,/g;
  static allTsComments = /(\/\**.*\*\/)/g;
  static fileExtensionWithPoint = /(\..*)/g;
  static betterAllTsComments = /(\/\/\**.*\*\/)|(?<=\s)\/\**.*\*\//g;
  static filenameFromPath = /[\w-_]+(?=\.)/g;
  static excludeGetAnd_ = /(?![get])(.*?)(?=_)/g;
  static uuid =
    /[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/g;
  static firstAndLastDyn = (string = "", span: number) => {
    let stringPattern = `^.{${span}}}?|.{${span}}?$`;
    const flag = "g";
    return string.match(new RegExp(stringPattern, flag));
  };
  static everythingBetweenDyn = (symbolA: string, symbolB: string): RegExp => {
    let regexp = `${symbolA}(.*?)${symbolB}`;
    return new RegExp(regexp, "g");
  };
  constructor(pattern: string | ZionRegExp_v1, flags?: string) {
    super(pattern, flags);
  }
}

export default ZionRegExp_v1;
