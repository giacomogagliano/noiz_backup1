import { Strategy } from "../../../../zionbase/Types/Class/Strategy";
import {
  CreateRandom,
  createRandomType,
  arg1,
  returnType,
} from "../../../../zionbase/Types/lib";
// import type {createRandom} from "../../Types/lib"

class RandomCreationStrategy extends Strategy {
  private strategy = (...args: unknown[]) => {
    args;
  };
  name: string = "create-random";
  // @ts-expect-error
  method(arg1: number): unknown {
    return this.strategy();
  }
}

const mathNumberRandom = new RandomCreationStrategy();
mathNumberRandom.method = (length: number) => {
  if (length > 15) throw new Error("max length 15");
  const multiplier = length ? length : 15;
  return Math.round(Math.random() * 10 ** multiplier);
};

const mathStringRandom = new RandomCreationStrategy();
mathStringRandom.method = (length: number) => {
  const multiplier = 15;
  const gen = () =>
    Math.round(Math.random() * 10 ** multiplier);
  let res = "";
  while (res.length < 10) {
    res = gen().toString(36);
    if (length === 10) {
      if (res.length === 10) return res;
    } else if (length > 10) {
      throw new Error("to many characters");
    } else {
      return res.slice(-length + res.length);
    }
  }
};

class CreateRandomNumber extends CreateRandom {
  constructor(length?: number) {
    super(mathNumberRandom, length);
  }
  create(): number {
    return this.strategy.method(this.length) as number;
  }
}

class CreateRandomString extends CreateRandom {
  constructor(length?: number) {
    super(mathStringRandom, length);
  }
  create(): string {
    if (!this.length)
      return this.strategy.method(10) as string;
    else
      return this.strategy.method(this.length) as string;
  }
}

class CreateRandomSymbol extends CreateRandom {
  constructor(length?: number) {
    super(mathStringRandom, length);
  }
  create(lenght?: number): string | number | symbol {
    lenght;
    return "to be implemented";
  }
}

export const createRandom_v1 = (
  arg1: arg1,
  arg2?: number
): returnType => {
  const options = new Map<
    string,
    | typeof CreateRandomSymbol
    | typeof CreateRandomNumber
    | typeof CreateRandomString
  >();
  options.set("symbol", CreateRandomSymbol);
  options.set("number", CreateRandomNumber);
  options.set("string", CreateRandomString);
  const Creator = options.get(arg1);
  if (!Creator) throw new Error("something went wrong");
  const responses = new Map();
  responses.set(undefined, () => {
    throw new Error(
      "wrong argument passed, try with 'string' or 'number'"
    );
  });
  responses.set(CreateRandomSymbol, () => {});
  responses.set(CreateRandomNumber, () => {});
  responses.set(CreateRandomString, () => {});
  responses.get(Creator)();
  // @ts-ignore
  return new Creator(arg2).create() as returnType;
};
export const typeChecker: createRandomType =
  createRandom_v1;

interface createRandom {
  (type: "symbol", lenght?: number): CreateRandomSymbol;
  (type: "string", lenght?: number): CreateRandomString;
  (type: "number", lenght?: number): CreateRandomNumber;
}

export const createRandom: createRandom =
  createRandom_v1 as any;
