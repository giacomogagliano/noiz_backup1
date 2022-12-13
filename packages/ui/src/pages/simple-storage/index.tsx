import React, {
  ChangeEvent,
  Component,
  FormEvent,
  FormEventHandler,
  MouseEvent,
} from "react";
import styled from "styled-components";
import { Icon } from "../../HTML/React/classes";

type LayoutProps = {
  className?: string;
  children?: React.ReactNode;
};

interface LayoutState {
  input: string;
  number: string;
  isCollapsed?: boolean;
}
class LayoutState {}

class SmartContract extends Component<
  LayoutProps,
  LayoutState
> {
  constructor(props: LayoutProps) {
    super(props);
    let state = new LayoutState();
    state.input = "";
    state.number = "";
    state.isCollapsed = true;
    this.state = state;
  }

  setInput = (input: string) => this.setState({ input });

  setNumber = (number: string) =>
    this.setState({ number });

  setIsCollapsed = (isCollapsed: boolean) =>
    this.setState({ isCollapsed });

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setInput(e.target.value);
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setNumber(this.state.input);
  };

  handleCollapse = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.setIsCollapsed(!this.state.isCollapsed);
  };

  Collapsed = () => (
    <form onSubmit={this.handleSubmit}>
      <div id="write-function">
        <div id="input-clpsd">
          <button id="field">setNumber</button>
          <input
            id="argument"
            type="number"
            onChange={this.handleChange}
          />
        </div>
        <button
          id="expand-button"
          onClick={this.handleCollapse}
        >
          <Icon arrowBack></Icon>
        </button>
      </div>
    </form>
  );

  Expanded = () => (
    <form onSubmit={this.handleSubmit}>
      <div id="write-function-exp">
        <div id="title-exp">
          <p id="title-text">setNumber</p>
          <button
            id="expand-button"
            onClick={this.handleCollapse}
          >
            <Icon arrowBack></Icon>
          </button>
        </div>
        <div id="input-exp">
          <div id="field-exp">number_:</div>
          <input
            id="argument-exp"
            type="text"
            onChange={this.handleChange}
          ></input>
        </div>
        <div id="button-exp">
          <button id="transact-btn">transact</button>
        </div>
      </div>
    </form>
  );

  Layout = (props: LayoutProps) => (
    <div className={props.className}>
      <div id="area">{props.children}</div>
    </div>
  );

  Style = styled(this.Layout)`
    #area {
      width: 25rem;
      padding: 2rem;
      form {
        width: 100%;
        display: flex;
        justify-content: space-between;

        #write-function:not(:first-child) {
          padding-top: 0.5rem;
        }
        #write-function {
          position: relative;
          display: inline-flex;
          width: 100%;
          justify-content: space-between;
          #input-clpsd:not(:last-child) {
            padding: 0.3rem;
          }
          #input-clpsd {
            * {
              padding: 0.7rem;
            }
            width: 100%;
            #field {
              width: 30%;
              background-color: #ef830f;
              border-radius: 0.3rem 0 0 0.3rem;
              color: #eef2f2;
              border-color: #f3f1ef;
              border-right: none;
              border-left: 0.1rem solid;
              border-top: 0.1rem solid;
              border-bottom: 0.1rem solid;
              font-size: 100%;
            }
            #field:hover  {
              background-color: #e49a10;
            }
            #field:focus {
              background-color: #faa609;
            }
            #field:active {
              background-color: #f63513;
            }
            #argument {
              width: 62%;
              border: none;
              border-radius: 0 0.3rem 0.3rem 0;
            }
          }
          svg {
            height: 24px;
            width: 24px;
          }
          #expand-button {
            padding: 0;
            background-color: transparent;
            border: none;
          }
        }
        #write-function-exp {
          width: 100%;
          height: 100%;
          color: #617279;
          #title-exp {
            display: flex;
            justify-content: space-between;
            place-items: center;
            padding-bottom: 0.5rem;
            p {
              padding-left: 0.5rem;
            }
            #title-text {
              grid-area: title;
            }
            #expand-button {
              padding: 0;
              background-color: transparent;
              border: none;
            }
            svg {
              width: 24px;
              height: 24px;
            }
          }
          #input-exp {
            display: flex;
            justify-content: flex-end;
            padding-bottom: 0.5rem;
            * {
              padding: 0.7rem;
            }
            #field-exp {
              grid-area: smallTitle;
            }
            #argument-exp {
              grid-area: input;
            }
          }
          #button-exp {
            display: flex;
            justify-content: flex-end;
            #transact-btn {
              border: none;
              padding-left: 1rem;
              padding-right: 1rem;
              font-size: 100%;
              background-color: #ef830f;
              padding: 0.7rem;
              border-radius: 0.3rem;
              color: #f3f1ef;
            }
          }
        }
      }
      /* * {
        padding-right: 2rem;
        padding-left: 2rem;
      }
      &:first-child {
        padding-top: 2rem;
      }
      &:last-child {
        padding-bottom: 2rem;
      } */
      border: 0.1rem solid;
      border-color: #344850;
      background-color: #052b3b;
      border-radius: 0.3rem;
    }
  `;

  render() {
    console.log(this.state.isCollapsed);

    return (
      <this.Style>
        {this.state.isCollapsed ? (
          <this.Collapsed />
        ) : (
          <this.Expanded />
        )}
      </this.Style>
    );
  }
}

const qualsiasicosa = <SmartContract></SmartContract>;

export default function index() {
  return qualsiasicosa;
}
