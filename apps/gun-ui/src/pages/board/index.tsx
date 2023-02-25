import React, {
  ChangeEvent,
  createRef,
  FormEvent,
  KeyboardEvent,
  RefObject,
} from "react";
import Gun from "gun/gun";
import "gun/sea";
import "gun/lib/open.js";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { CreateUser } from "../../components/CreateUser";
const board = "bapwaqrwoi9";

const host = "http://192.168.1.203:8080/gun";
const gun = Gun(host);

interface State {
  board: string;
  messages: { [k: string]: { message: string; date: string } };
  input: string;
  number: number;
  location: string | Location;
  textMessages: { [k: string]: { text: string; date: string } };
}

const Area = styled.div`
  display: grid;
  h2 {
    color: red;
    text-align: center;
  }
  a,
  a:visited {
    color: white;
  }
  form {
    display: inline;
  }
  button {
    background-color: white;
    border-radius: 2px;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    width: 150px;
    margin: 10px;
    cursor: pointer;
  }
  button:focus {
    outline: 0;
  }
  #content {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  button:active {
    outline: 0;
  }
`;

export default class Index extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      board: "",
      messages: { [""]: { message: "", date: "" } },
      input: "",
      number: 0,
      location: "",
      textMessages: { [""]: { text: "", date: "" } },
    };
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleSubtractOne = this.handleSubtractOne.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.handleNumberForm = this.handleNumberForm.bind(this);
    this.hs2 = this.hs2.bind(this);
    this.input2 = createRef();
    this.numberInput = createRef();
  }

  render() {
    const messages = this.state.messages;
    const textMessages = this.state.textMessages;
    const board = this.state.board;
    return (
      <Layout>
        <Area>
          <h1>gun Next.js example</h1>
          <CreateUser node={Gun("http://192.168.1.203:8080/gun")} />
          <div id="number">
            <h2>{this.state.number}</h2>
            <form onSubmit={this.handleNumberForm}>
              <input type="number" ref={this.numberInput} />
            </form>
            <button onClick={this.handleClearStorage}>Clear Storage</button>
          </div>
          <input
            type="text"
            onChange={this.handleInputChange}
            onKeyDown={this.handleInputSubmit}
            value={this.state.input}
          ></input>
          <button onClick={this.handleSubtractOne}>Subtract 1</button>
          <button onClick={this.handleAddOne}>Add 1</button>
          <form onSubmit={this.hs2}>
            <input type="text" ref={this.input2} />
          </form>
          <div id="content">
            <div>
              {Object.values(messages)
                .map((m, id) => <p key={id}>{m.message}</p>)
                .reverse()}
            </div>
            <div>
              {Object.values(textMessages)
                .map((m, id) => (
                  <p key={id}>
                    {m.text}-{new Date(m.date).getMinutes()}
                  </p>
                ))
                .reverse()}
            </div>
          </div>
          <p>
            <a
              href={this.state.location as string}
            >{`${this.state.location}`}</a>
          </p>
          <button onClick={this.handleClearStorage}></button>
        </Area>
      </Layout>
    );
  }

  async componentDidMount() {
    this.setState({ board: board, location: location });
    gun.get(board).open(state => {
      if (state !== undefined) {
        Object.keys(state)
          .filter(key => key !== "_")
          .forEach(async key => {
            const updatedState: State = { [key]: state[key] } as State;
            this.setState(updatedState);
          });
      }
    });
  }

  input2: RefObject<HTMLInputElement>;
  numberInput: RefObject<HTMLInputElement>;

  hs2(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let value = this.input2.current.value;
    const board = this.state.board;
    const date = new Date().toJSON();
    gun.get(board).get("textMessages").set({ text: value, date });
    this.input2.current.value = "";
  }

  handleClearStorage() {
    localStorage.clear();
  }

  handleNumberForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let value = this.numberInput.current.value;
    const board = this.state.board;
    // gun.get(board).put({ input: value });
    this.numberInput.current.value = "";
  }

  handleInputSubmit(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      const board = this.state.board;
      const date = new Date();
      date.toJSON();
      gun.get(board).get("messages").set({ message: this.state.input, date });
      gun.get(board as string).put({ input: "" });
    }
  }

  handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const board = this.state.board;
    gun.get(board).put({ input: value });
  }

  handleAddOne() {
    const board = this.state.board;
    const number = this.state.number;
    const newNumber = number + 1;
    gun.get(board).put({ number: newNumber });
  }

  handleSubtractOne() {
    const board = this.state.board;
    const number = this.state.number;
    const newNumber = number - 1;
    gun.get(board).put({ number: newNumber });
  }
}
