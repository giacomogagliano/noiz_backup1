import React, {
  ChangeEvent,
  Component,
  FormEvent,
  lazy,
  MouseEvent,
  Suspense,
} from "react";
import styled from "styled-components";
import { EVM } from "@zionstate/database";

// first deployed contract: 0x338f4f701bf4d4175ace7d79c27d71cd998f12dc
type EVMweb = EVM.IEVMweb;

function wait(time: number) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

interface SimpleStorageProps {
  myString: string;
  number: number;
  className?: string;
  factory?: EVMweb["contractFactories"]["SimpleStorage"];
}

interface SimpleStorageState {
  myString: string;
  myNumber: number;
  factoryMethodsInputValue: Map<number, string>;
  connectedContractAddress: string;
}
class SimpleStorageState {}

class SimpleStorage extends Component<
  SimpleStorageProps,
  SimpleStorageState
> {
  setMyString = (myString: string) =>
    this.setState({ myString });

  handleGetNumber = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("clicked get-number-btn");
  };

  Lazy = ({ value }: { value: string | number }) => {
    const Lazy = lazy(() =>
      wait(2000).then(async () => ({
        default: () => <p>{value}</p>,
      }))
    );
    return (
      <Suspense fallback={<p>loading..</p>}>
        <Lazy></Lazy>
      </Suspense>
    );
  };

  handleGetterOnClick = (
    e: MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    console.log("clicked my-string-btn");
    this.setMyString("oh");
  };

  Getter = ({
    value,
    id,
    buttonMsg,
  }: {
    value: string | number;
    id: string;
    buttonMsg: string;
  }) => {
    const LazyString = this.Lazy;
    return (
      <div id={id}>
        <button onClick={this.handleGetterOnClick}>
          {buttonMsg}
        </button>
        <LazyString value={value}></LazyString>
      </div>
    );
  };

  handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submitted");
  };

  Setter = ({
    type,
    placeholder,
  }: {
    type: "text" | "number";
    placeholder: string;
  }) => {
    return (
      <div id="setter">
        <form
          id={`setter-form`}
          onSubmit={this.handleFormSubmit}
        >
          <input
            type={type}
            placeholder={placeholder}
          ></input>
          <button type="submit">transact</button>
        </form>
      </div>
    );
  };

  setFactoryMethodsInputValue = (
    factoryMethodsInputValue: Map<number, string>
  ) => this.setState({ factoryMethodsInputValue });

  handleFMChange =
    (id: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const values = this.state.factoryMethodsInputValue;
      let input = values.get(id);
      input = e.target.value;
      values.set(id, input);
      this.setFactoryMethodsInputValue(values);
    };

  setConnectedContractAddress = (
    connectedContractAddress: string
  ) => this.setState({ connectedContractAddress });

  handleFMClick =
    (id: number) => (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const factory = this.props.factory;
      if (!factory) throw new Error("no factory");
      if (id === 1)
        console.log("i will attach to a contract");

      const values = this.state.factoryMethodsInputValue;
      if (values.get(id) === "") return;
      this.setConnectedContractAddress(values.get(id)!);
      values.set(id, "");
      this.setFactoryMethodsInputValue(values);

      // this shall be used when the account is changed
      // factory.connect();
    };

  FactoryMethod = ({
    id,
    title,
    type,
    placeholder,
  }: {
    id: number;
    title: string;
    type: "text" | "number";
    placeholder: string;
  }) => (
    <div id="factory-method">
      <input
        type={type}
        placeholder={placeholder}
        onChange={this.handleFMChange(id)}
        value={this.state.factoryMethodsInputValue.get(id)}
      />
      <button onClick={this.handleFMClick(id)}>
        {title}
      </button>
    </div>
  );

  handleDeployClick = (
    e: MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const factory = this.props.factory;
    if (!factory) throw new Error("no factory");

    factory
      .deploy()
      .then(e => {
        const contract = e;
        const address = e.address;
      })
      .catch(e => console.log(e));
  };

  Layout = ({
    myString,
    number,
    className,
  }: SimpleStorageProps) => {
    const MyString = this.Getter;
    const SetString = this.Setter;
    const GetNumber = this.Getter;
    const SetNumber = this.Setter;
    const FactoryMethod = this.FactoryMethod;
    return (
      <div className={className}>
        <h1>Simple Storage</h1>
        <div id="factory-section">
          <h3>Factory Section</h3>
          <div id="deploy">
            <button onClick={this.handleDeployClick}>
              Deploy
            </button>
          </div>
          <FactoryMethod
            id={0}
            placeholder="contract address"
            title="Connect"
            type="text"
          />
          <FactoryMethod
            id={1}
            placeholder="contract address"
            title="Attach"
            type="text"
          />
        </div>
        <div id="instance-methods">
          <h3>Contract Methods</h3>
          <MyString
            value={myString}
            id="getter"
            buttonMsg="myString"
          />
          <GetNumber
            value={number}
            id="getter"
            buttonMsg="Get Number"
          />
          <SetString placeholder="setString" type="text" />
          <SetNumber
            placeholder="setNumber"
            type="number"
          />
        </div>
      </div>
    );
  };

  StyledLayout = styled(this.Layout)`
    padding: 2rem;
    border-radius: 1rem;
    background-color: #0d2832;
    > *:not(:last-child) {
      margin-bottom: 0.5rem;
    }
    h1 {
      text-align: center;
    }
    display: grid;
    width: 25rem;
    #factory-section {
      padding: 1rem;
      background-color: #0d2128;
      border-radius: 1rem;
      > *:not(:last-child) {
        margin-bottom: 0.2rem;
      }
      #deploy {
        display: grid;
        justify-content: center;
      }
      #factory-method {
        padding: 0.5rem;
        background-color: #0c191e;
        justify-content: space-between;
        border-radius: 1rem;
        display: flex;
        button {
          margin-left: 0.3rem;
        }
      }
    }
    button {
      padding: 0.5rem;
      border-radius: 2rem;
      min-width: 10rem;
      max-width: 10rem;
      border: 0.1rem solid #d4d4d4;
      :hover {
        background-color: #dcdcdc;
      }
      :active {
        background-color: #f9f9f7;
      }
    }
    #instance-methods {
      padding: 1rem;
      background-color: #0d2128;
      border-radius: 1rem;
      > *:not(:last-child) {
        margin-bottom: 0.2rem;
      }
      #getter {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        border-radius: 1rem;
        background-color: #0c191e;
        box-sizing: border-box;
        width: 100%;
        p  {
          padding-left: 0.3rem;
        }
      }
      #setter {
        padding: 1rem;
        border-radius: 1rem;
        background-color: #0c191e;
        #setter-form {
          display: inline-flex;
          input {
            padding: 0.3rem;
          }
          button {
            margin-left: 0.3rem;
          }
        }
      }
    }
  `;

  constructor(props: SimpleStorageProps) {
    super(props);
    let state = new SimpleStorageState();
    state.myNumber = props.number;
    state.myString = props.myString;
    state.factoryMethodsInputValue = new Map<
      number,
      string
    >();
    state.factoryMethodsInputValue.set(0, "");
    state.factoryMethodsInputValue.set(1, "");
    state.connectedContractAddress = "";
    this.state = state;
  }

  componentDidUpdate(
    prevProps: Readonly<SimpleStorageProps>,
    prevState: Readonly<SimpleStorageState>,
    snapshot?: any
  ): void {
    console.log(this.state.factoryMethodsInputValue);
    console.log(this.state.connectedContractAddress);
    const changeContractMethod =
      prevProps.myString === this.props.myString;
    if (changeContractMethod) {
    }
  }

  render() {
    const Element = this.StyledLayout;
    return (
      <Element
        className={this.props.className}
        myString={this.state.myString}
        number={this.state.myNumber}
        factory={this.props.factory}
      />
    );
  }
}

export function getStaticProps(): {
  props: { data: SimpleStorageProps };
} {
  return {
    props: {
      data: {
        myString: "i will show the string",
        number: 10,
      },
    },
  };
}

export default function index({
  data,
  evm,
}: {
  data: SimpleStorageProps;
  evm: EVMweb;
}) {
  return (
    <SimpleStorage
      {...data}
      factory={evm?.contractFactories.SimpleStorage}
    />
  );
}
