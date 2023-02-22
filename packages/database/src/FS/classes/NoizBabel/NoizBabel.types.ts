import { Node as BabelNode } from "@babel/types";
import { PluginObj, Visitor } from "@babel/core";
import * as parser from "@babel/parser";
import * as _NoizBabel from ".";

const NoizBabel: NoizBabel = _NoizBabel;

type LoadedPlugins =
  keyof AbstractNoizBabelCtor["plugins"];

interface NoizBabel {
  NoizBabel: AbstractNoizBabelCtor;
}

abstract class AbstractNoizBabel {
  abstract code: string;
  abstract ast: BabelNode;
  abstract stringResult: string[];
  abstract parse_ops: parser.ParserOptions;
  abstract traverse(): this;
  abstract with(type: LoadedPlugins): this;
}

export interface NoizBabel_v1Props {
  code: string;
}

export interface BabelPlugin_v1<T = {}>
  extends PluginObj<T> {
  stringResult: string[];
  visitor: Visitor<T>;
  manipulateOptions?(opts: any): void;
  pre?(state: any): void;
  post?(state: any): void;
  makeVisitor<T>(visitor: Visitor<T>): this;
}

interface AbstractNoizBabelCtor {
  plugins: {
    getProperties: BabelPlugin_v1;
  };
  new (props: NoizBabel_v1Props): AbstractNoizBabel;
}
