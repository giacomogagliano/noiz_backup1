import React, { Component, MouseEvent } from "react";
import styled from "styled-components";

interface SimpleStorageProps {
  myString: string;
  number: number;
  className?: string;
}

class SimpleStorage extends Component<SimpleStorageProps> {
  handleGetterOnClick = (
    e: MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    console.log("clicked my-string-btn");
  };

  Getter = ({
    value,
    id,
    buttonMsg,
  }: {
    value: string | number;
    id: string;
    buttonMsg: string;
  }) => (
    <div id={id}>
      <button onClick={this.handleGetterOnClick}>
        {buttonMsg}
      </button>
      <p>{value}</p>
    </div>
  );

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
        <form id={`${id}-form`}>
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
          id="my-string"
          buttonMsg="myString"
        />
        <SetString
          id="set-string"
          placeholder="setString"
          type="text"
        />
        <GetNumber
          value={number}
          buttonMsg="Get Number"
          id="get-number"
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
    container-type: size;
    width: 35rem;
    height: auto;
    #my-string {
      display: inline-flex;
      p  {
        padding-left: 0.3rem;
      }
    }
    #set-string {
      #set-string-form {
        display: inline-flex;
        button {
          margin-left: 0.3rem;
        }
      }
    }
    #get-number {
      display: inline-flex;
      p  {
        padding-left: 0.3rem;
      }
    }
    #set-number {
      #set-number-form {
        display: inline-flex;
        button {
          margin-left: 0.3rem;
        }
      }
    }
  `;

  render() {
    const Element = this.StyledLayout;
    return <Element {...this.props} />;
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
