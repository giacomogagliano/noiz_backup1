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

  handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submitted");
  };

  Input = ({
    id,
    type,
    placeholder,
  }: {
    id: string;
    type: "text" | "number";
    placeholder: string;
  }) => {
    return (
      <div id={id}>
        <form
          id={`${id}-form`}
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

  handleGetNumber = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("clicked get-number-btn");
  };

  Layout = ({
    myString,
    number,
    className,
  }: SimpleStorageProps) => {
    const MyString = this.Getter;
    const SetString = this.Input;
    const GetNumber = this.Getter;
    const SetNumber = this.Input;
    return (
      <div className={className}>
        <h1>Simple Storage</h1>
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
        <SetString
          id="set-string"
          placeholder="setString"
          type="text"
        />
        <SetNumber
          id="set-number"
          placeholder="setNumber"
          type="number"
        />
      </div>
    );
  };

  StyledLayout = styled(this.Layout)`
    *:not(:last-child) {
      padding-bottom: 0.5rem;
    }
    display: grid;
    width: 25rem;
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
    #getter {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      p  {
        padding-left: 0.3rem;
      }
    }
    #set-string {
      #set-string-form {
        display: inline-flex;
        input {
          padding: 0.3rem;
        }
        button {
          margin-left: 0.3rem;
        }
      }
    }
    #set-number {
      #set-number-form {
        display: inline-flex;
        input {
          padding: 0.3rem;
        }
        button {
          margin-left: 0.3rem;
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
