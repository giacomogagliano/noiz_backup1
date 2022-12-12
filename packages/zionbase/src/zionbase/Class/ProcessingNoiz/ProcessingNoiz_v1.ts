///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

import {
  decoratePlugin,
  fromScratch,
  functionality,
  makePlugin,
  plugin,
  processor,
  reducer,
} from ".";

export interface functionality_v1<T> {
  (a: T): T;
}

export interface processor_v1<T> {
  (x: T): (a: T) => T;
}

export interface plugin_v1<T, F = functionality<T>> {
  (next: F): F;
}

export interface reducer_v1<P> {
  (prevFn: P, currFn: P): P;
}

export interface decoratePlugin_v1<T> {
  (a: T): plugin<T>;
}

export interface fromScratch_v1<T> {
  (fn: functionality<T>): plugin<T>;
}

export interface makePlugin_v1<T> {
  (a: T): plugin<T>;
  (fn: functionality<T>): plugin<T>;
}

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

export interface IProcessingNoiz_v1 {
  name: string;
}

/**
 * ```ts
 * import {
 *   functionality,
 *   plugin,
 *   ProcessingNoiz,
 *   processor,
 * } from "@zionstate/zionbase";
 *
 * type aType = { name: string };
 * const blobProc: processor<aType> = mutator => a => {
 *   a.name = a.name + mutator.name;
 *   return a;
 * };
 *
 * let blob = new ProcessingNoiz(blobProc);
 *
 * let avulc: plugin<aType>,
 *   agirl: plugin<aType>,
 *   scratched: plugin<aType>;
 *
 * const simpleProcessor: functionality<aType> = (
 *   a: aType
 * ) => {
 *   return { name: a.name + "auch" };
 * };
 *
 * avulc = blob.makePlugin({ name: "🌋" });
 * agirl = blob.makePlugin({ name: "🧑" });
 * scratched = blob.makePlugin(simpleProcessor);
 *
 * const res3 = blob
 *   .use(avulc)
 *   .use(agirl)
 *   .use(scratched)
 *   .process({ name: "santa-" });
 * console.log(res3);
 *
 * // yelds { name: 'santa-🌋🧑auch' }
 * ```
 */
export interface ProcessingNoiz_v1<
  T = unknown,
  F extends functionality<T> = functionality<T>,
  P extends plugin<T, F> = plugin<T, F>,
  Proc extends processor<T> = processor<T>
> {
  use(next: P): this;
  proc: processor<T>;
  makePlugin: makePlugin<T>;
}
export class ProcessingNoiz_v1<
  T = unknown,
  F extends functionality<T> = functionality<T>,
  P extends plugin<T, F> = plugin<T, F>
> {
  #processors: P[] = [];

  #init?: functionality<T> = (a: T): T => a;

  #reducer: reducer<P> = (prev, curr) =>
    ((next: F) => curr(prev(next))) as P;

  #decorate: decoratePlugin<T> = x => {
    return next => {
      return a => {
        a = next(a);
        a = this.proc(x)(a);
        return a;
      };
    };
  };

  #fromScratch: fromScratch<T> = (
    fn: functionality<T>
  ) => {
    return (next: functionality<T>) => {
      return (a: T) => {
        a = next(a);
        a = fn(a);
        return a;
      };
    };
  };

  constructor(proc: processor<T>) {
    this.proc = proc;
  }

  use(next: P) {
    this.#processors.push(next);
    return this;
  }

  process(value: T) {
    if (!this.#init) throw new Error("no init");
    return this.#processors.reduce(this.#reducer)(
      this.#init as F
    )(value);
  }
  makePlugin: makePlugin<T> = (
    a: T | functionality<T>
  ) => {
    if (typeof a === "function") {
      return this.#fromScratch(a as functionality<T>);
    } else {
      return this.#decorate(a);
    }
  };
}

export type ProcessingNoiz_v1Ctor<T = unknown> = {
  new (proc: processor<T>): ProcessingNoiz_v1;
};

export const ProcessingNoiz_v1Ctor: ProcessingNoiz_v1Ctor =
  ProcessingNoiz_v1;
