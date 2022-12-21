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
import { BigNumber } from "ethers";

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
  instanceMethodsInputValue: Map<number, string | number>;
  submittedString: string;
  submittedNumber: number;
  connectedContractAddress: string;
  attachedContractAddress: string;
  instance: ReturnType<
    EVMweb["contractFactories"]["SimpleStorage"]["attach"]
  >;
}
class SimpleStorageState {}

class SimpleStorage extends Component<
  SimpleStorageProps,
  SimpleStorageState
> {
  setMyString = (myString: string) =>
    this.setState({ myString });

  setMyNumber = (myNumber: number) =>
    this.setState({ myNumber });

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

  bigNtoN = (bigN: BigNumber) => {
    const number = new Number(bigN._hex);
    return number.valueOf();
  };

  handleGetterOnClick =
    (id: number) => (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const instance = this.state.instance;
      if (id === 0) {
        instance
          .myString()
          .then(n => {
            this.setMyString(n);
          })
          .catch(e => console.log(e));
      }
      if (id === 1) {
        instance
          .getNumber()
          .then(n => {
            const bigNumber = n;
            const number = this.bigNtoN(bigNumber);
            this.setMyNumber(number);
            console.log(number);
          })
          .catch(e => console.log(e));
      }
    };

  Getter = ({
    get_id,
    value,
    id,
    buttonMsg,
  }: {
    get_id: number;
    value: string | number;
    id: string;
    buttonMsg: string;
  }) => {
    const LazyString = this.Lazy;
    return (
      <div id={id}>
        <button onClick={this.handleGetterOnClick(get_id)}>
          {buttonMsg}
        </button>
        <LazyString value={value}></LazyString>
      </div>
    );
  };

  setInstanceMethodsInputValue = (
    instanceMethodsInputValue: Map<number, string | number>
  ) => this.setState({ instanceMethodsInputValue });

  setSubmittedString = (submittedString: string) =>
    this.setState({ submittedString });

  setSubmittedNumber = (submittedNumber: number) =>
    this.setState({ submittedNumber });

  handleFormSubmit =
    (id: number) => (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const values = this.state.instanceMethodsInputValue;
      const instance = this.state.instance;
      if (id === 0) {
        const input = values.get(0);
        this.setSubmittedString(input as string);
        instance
          .setString(input as string)
          .then(e => console.log(e))
          .catch(e => console.log(e));
      }
      if (id === 1) {
        let input = values.get(1);
        this.setSubmittedNumber(input as number);
        const bigNumber = BigNumber.from(input);
        instance
          .setNumber(bigNumber)
          .then(e => console.log(e))
          .catch(e => console.log(e));
      }
    };

  handleIMChange =
    (id: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const values = this.state.instanceMethodsInputValue;
      let input = values.get(id);
      input = e.target.value;
      values.set(id, input);
      this.setInstanceMethodsInputValue(values);
    };

  Setter = ({
    set_id,
    type,
    placeholder,
  }: {
    set_id: number;
    type: "text" | "number";
    placeholder: string;
  }) => {
    return (
      <div id="setter">
        <form
          id={`setter-form`}
          onSubmit={this.handleFormSubmit(set_id)}
        >
          <input
            type={type}
            placeholder={placeholder}
            onChange={this.handleIMChange(set_id)}
          ></input>
          <button type="submit">transact</button>
        </form>
      </div>
    );
  };

  setFactoryMethodsInputValue = (
    factoryMethodsInputValue: Map<number, string>
  ) => this.setState({ factoryMethodsInputValue });

  setConnectedContractAddress = (
    connectedContractAddress: string
  ) => this.setState({ connectedContractAddress });

  setAttachedContractAddress = (
    attachedContractAddress: string
  ) => this.setState({ attachedContractAddress });

  setInstance = (
    instance: ReturnType<
      EVMweb["contractFactories"]["SimpleStorage"]["attach"]
    >
  ) => this.setState({ instance });

  handleFMChange =
    (id: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const values = this.state.factoryMethodsInputValue;
      let input = values.get(id);
      input = e.target.value;
      values.set(id, input);
      this.setFactoryMethodsInputValue(values);
    };

  handleFMClick =
    (id: number) => (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const factory = this.props.factory;
      if (!factory) throw new Error("no factory");
      const values = this.state.factoryMethodsInputValue;
      const value = values.get(id);
      if (value === "" || value === undefined) return;
      if (id === 1) {
        this.setAttachedContractAddress(value);
        values.set(id, "");
        this.setFactoryMethodsInputValue(values);
        const SimpleStorage = factory.attach(value);
        this.setInstance(SimpleStorage);
      }
      if (id === 0) {
        this.setConnectedContractAddress(value);
        values.set(id, "");
        this.setFactoryMethodsInputValue(values);
      }

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
          <p>
            contract:
            0x338f4f701bf4d4175ace7d79c27d71cd998f12dc
          </p>
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
            get_id={0}
            value={myString}
            id="getter"
            buttonMsg="myString"
          />
          <GetNumber
            get_id={1}
            value={number}
            id="getter"
            buttonMsg="Get Number"
          />
          <SetString
            set_id={0}
            placeholder="setString"
            type="text"
          />
          <SetNumber
            set_id={1}
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
    state.attachedContractAddress = "";
    state.instanceMethodsInputValue = new Map<
      number,
      string
    >();
    state.instanceMethodsInputValue.set(0, "");
    state.instanceMethodsInputValue.set(1, "");
    state.submittedNumber = -1000;
    state.submittedString = "default-string";
    this.state = state;
  }

  componentDidUpdate(
    prevProps: Readonly<SimpleStorageProps>,
    prevState: Readonly<SimpleStorageState>,
    snapshot?: any
  ): void {
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
