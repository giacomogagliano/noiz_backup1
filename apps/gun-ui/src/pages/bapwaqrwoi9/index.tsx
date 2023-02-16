import React, { Component } from "react";
import Gun from "gun/gun";
import "../../../node_modules/gun/lib/open.js";
import styled from "styled-components";
import Head from "next/head.js";
import Script from "next/script.js";
import "gun/sea";

const host = "http://192.168.1.203:8080/gun";
const gun = Gun(host);
const board = "bapwaqrwoi9";

interface State {
  number: number;
  // board: string;
  // messages: { [k: string]: { message: string; date: string } };
  // input: string;
  // location: string | Location;
  // textMessages: { [k: string]: { text: string; date: string } };
}

const Area = styled.div`
  margin: 0;
  width: max-content;
  padding: 1rem;
  background-color: #9ff1f1;
  h1 {
    margin: 0;
    padding: 0;
  }
  p {
    display: inline;
  }
  #btns {
    display: flex;
    justify-content: space-between;
  }
`;

export default class Index extends Component<{}, State> {
  constructor(p) {
    super(p);
    this.state = { number: 0 };
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
  }
  render(): React.ReactNode {
    return (
      <Area>
        <h1>Test Gun</h1>
        <p>number:</p>
        <p>{this.state.number}</p>
        <div id="btns">
          <button onClick={this.minus}>minus</button>
          <button onClick={this.plus}>plus</button>
        </div>
      </Area>
    );
  }
  componentDidMount(): void {
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
  plus() {
    const currNum = this.state.number;
    gun.get(board).put({ number: currNum + 1 });
  }
  minus() {
    const currNum = this.state.number;
    gun.get(board).put({ number: currNum - 1 });
  }
}
