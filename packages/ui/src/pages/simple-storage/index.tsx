import React, { Component, MouseEvent } from "react";
import styled from "styled-components";

interface SimpleStorageProps {
  myString: string;
  className?: string;
}

class SimpleStorage extends Component<SimpleStorageProps> {
  MyString = ({ myString }: { myString: string }) => (
    <div id="my-string">
      <button onClick={this.handleMyStringBtn}>
        myString
      </button>
      <p>{myString}</p>
    </div>
  );

  SetString = () => {
    return (
      <div id="set-string">
        <form id="set-string-form">
          <input
            type="text"
            placeholder="myString"
          ></input>
          <button type="submit">transact</button>
        </form>
      </div>
    );
  };

  Layout = ({
    myString,
    className,
  }: SimpleStorageProps) => {
    const MyString = this.MyString;
    const SetString = this.SetString;
    return (
      <div className={className}>
        <h1>Simple Storage</h1>
        <MyString myString={myString} />
        <SetString />
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
          padding-left: 0.3rem;
        }
      }
    }
  `;

  handleMyStringBtn = (
    e: MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    console.log("clicked myString btn");
  };

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
      data: { myString: "i will show the string" },
    },
  };
}

export default function index({
  data: { myString },
}: {
  data: SimpleStorageProps;
}) {
  return <SimpleStorage myString={myString} />;
}
