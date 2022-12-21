import { EVMweb } from "@zionstate/database/dist/EVM";
import type { types } from "@zionstate/database/Blockchain";
import {
  BigNumber,
  BigNumberish,
  Contract,
  ContractTransaction,
  Overrides,
} from "ethers";
import React, {
  ChangeEvent,
  Component,
  FormEvent,
} from "react";

export type PromiseOrValue<T> = T | Promise<T>;

interface SetterProps<C extends Contract> {
  instance: C;
  methods: Map<number, (value: string | number) => void>;
  instanceMethodsInputValue: Map<number, string | number>;
  set_id: number;
  type: "text" | "number";
  placeholder: string;
  setInputs: (
    instanceMethodsInputValue: Map<number, string | number>
  ) => void;
  methodName: keyof C;
}

export class Setter<C extends Contract> extends Component<
  SetterProps<C>
> {
  handleFormSubmit =
    (
      id: number,
      instanceMethodsInputValue: Map<
        number,
        string | number
      >,
      methods: Map<
        number,
        (value: string | number) => void
      >,
      methodName: keyof C
    ) =>
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const values = instanceMethodsInputValue;
      const instance = this.props.instance;
      const input = values.get(id);
      const method = methods.get(id);
      const instanceMethod: (
        myString_: PromiseOrValue<string | BigNumberish>,
        overrides?:
          | (Overrides & {
              from?:
                | PromiseOrValue<string | BigNumberish>
                | undefined;
            })
          | undefined
      ) => Promise<ContractTransaction> = instance[
        methodName
      ] as (
        myString_: PromiseOrValue<string | BigNumberish>,
        overrides?:
          | (Overrides & {
              from?:
                | PromiseOrValue<string | BigNumberish>
                | undefined;
            })
          | undefined
      ) => Promise<ContractTransaction>;
      if (!method) return;
      if (!input) return;
      method(input);
      if (typeof input === "string") {
        instanceMethod(input)
          .then(e => console.log(e))
          .catch(e => console.log(e));
      }
      if (typeof input === "number") {
        const bigNumber = BigNumber.from(input);
        instanceMethod(bigNumber)
          .then(e => console.log(e))
          .catch(e => console.log(e));
      }
    };

  handleIMChange =
    (
      id: number,
      setInputs: (
        instanceMethodsInputValue: Map<
          number,
          string | number
        >
      ) => void
    ) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const values = this.props.instanceMethodsInputValue;
      let input = values.get(id);
      input = e.target.value;
      values.set(id, input);
      setInputs(values);
    };

  Layout = ({
    set_id,
    type,
    placeholder,
    methods,
    instanceMethodsInputValue,
    methodName,
  }: SetterProps<C>) => {
    return (
      <div id="setter">
        <form
          id={`setter-form`}
          onSubmit={this.handleFormSubmit(
            set_id,
            instanceMethodsInputValue,
            methods,
            methodName
          )}
        >
          <input
            type={type}
            placeholder={placeholder}
            onChange={this.handleIMChange(
              set_id,
              this.props.setInputs
            )}
          ></input>
          <button type="submit">transact</button>
        </form>
      </div>
    );
  };
  render(): React.ReactNode {
    const Element = this.Layout;
    return <Element {...this.props} />;
  }
}
