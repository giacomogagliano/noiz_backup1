export type FactoryMethod_v1Data = "FactoryMethod_v1Data";
export type FactoryMethod_v1Booleans =
  "FactoryMethod_v1Booleans";
export type FactoryMethod_v1ClassProps =
  "FactoryMethod_v1ClassProps";
export type FactoryMethod_v1AsChild =
  "FactoryMethod_v1AsChild";

import { EVMweb } from "@zionstate/database/dist/EVM";
import { ChangeEvent, Component, MouseEvent } from "react";

interface FactoryMethod_v1Props {
  id: number;
  title: string;
  type: "text" | "number";
  placeholder: string;
  factory: EVMweb["contractFactories"]["SimpleStorage"];
  factoryMethodsInputValue: Map<number, string>;
  setFactoryMethodsInputValue: (
    factoryMethodsInputValue: Map<number, string>
  ) => void;
  setAttachedContractAddress: (
    attachedContractAddress: string
  ) => void;
  setInstance: (
    instance: ReturnType<
      EVMweb["contractFactories"]["SimpleStorage"]["attach"]
    >
  ) => void;
  setConnectedContractAddress: (
    connectedContractAddress: string
  ) => void;
}

export class FactoryMethod_v1 extends Component<FactoryMethod_v1Props> {
  handleFMChange =
    (id: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const values = this.props.factoryMethodsInputValue;
      let input = values.get(id);
      input = e.target.value;
      values.set(id, input);
      this.props.setFactoryMethodsInputValue(values);
    };

  handleFMClick =
    (id: number) => (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const factory = this.props.factory;
      if (!factory) throw new Error("no factory");
      const values = this.props.factoryMethodsInputValue;
      const value = values.get(id);
      if (value === "" || value === undefined) return;
      if (id === 1) {
        this.props.setAttachedContractAddress(value);
        values.set(id, "");
        this.props.setFactoryMethodsInputValue(values);
        const SimpleStorage = factory.attach(value);
        this.props.setInstance(SimpleStorage);
      }
      if (id === 0) {
        this.props.setConnectedContractAddress(value);
        values.set(id, "");
        this.props.setFactoryMethodsInputValue(values);
      }
    };

  Layout = ({
    id,
    title,
    type,
    placeholder,
  }: FactoryMethod_v1Props) => (
    <div id="factory-method">
      <input
        type={type}
        placeholder={placeholder}
        onChange={this.handleFMChange(id)}
        value={this.props.factoryMethodsInputValue.get(id)}
      />
      <button onClick={this.handleFMClick(id)}>
        {title}
      </button>
    </div>
  );

  render() {
    const Element = this.Layout;
    return <Element {...this.props} />;
  }
}
