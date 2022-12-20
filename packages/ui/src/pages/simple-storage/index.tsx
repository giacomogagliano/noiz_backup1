import React, {
  Component,
  FormEvent,
  lazy,
  MouseEvent,
  Suspense,
} from "react";
import styled from "styled-components";

function wait(time) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

interface SimpleStorageProps {
  myString: string;
  number: number;
  className?: string;
}

interface SimpleStorageState {
  myString: string;
  myNumber: number;
}
class SimpleStorageState {}

class SimpleStorage extends Component<
  SimpleStorageProps,
  SimpleStorageState
> {
  setMyString = (myString: string) =>
    this.setState({ myString });

  handleGetterOnClick = (
    e: MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    console.log("clicked my-string-btn");
    this.setMyString("oh");
  };

  handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submitted");
  };

  handleGetNumber = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("clicked get-number-btn");
  };

  handleDeployClick = (
    e: MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    console.log("i will deploy");
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

  FactoryMethod = ({
    title,
    type,
    placeholder,
  }: {
    title: string;
    type: "text" | "number";
    placeholder: string;
  }) => (
    <div id="factory-method">
      <input type={type} placeholder={placeholder} />
      <button>{title}</button>
    </div>
  );

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
            placeholder="contract address"
            title="Connect"
            type="text"
          />
          <FactoryMethod
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
    this.state = state;
  }

  render() {
    const Element = this.StyledLayout;
    return (
      <Element
        className={this.props.className}
        myString={this.state.myString}
        number={this.state.myNumber}
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
}: {
  data: SimpleStorageProps;
}) {
  return <SimpleStorage {...data} />;
}
