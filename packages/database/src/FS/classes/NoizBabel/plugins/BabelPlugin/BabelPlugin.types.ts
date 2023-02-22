import { Visitor } from "@babel/core";
import * as _BabelPlugin from "./";

const BabelPlugin: BabelPlugin = _BabelPlugin;

interface BabelPlugin {
  BabelPlugin: AbstractBabelPluginCtor;
  getTsPropSigName: any;
}

export abstract class AbstractBabelPlugin {
  abstract makeVisitor<T>(visitor: Visitor<T>): this;
}

interface AbstractBabelPluginCtor {
  new (): AbstractBabelPlugin;
}
