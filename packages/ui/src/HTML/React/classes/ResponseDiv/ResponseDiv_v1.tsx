export type ResponseDiv_v1Data = "ResponseDiv_v1Data";
export type ResponseDiv_v1Booleans =
  "ResponseDiv_v1Booleans";
export type ResponseDiv_v1ClassProps =
  "ResponseDiv_v1ClassProps";
export type ResponseDiv_v1AsChild =
  "ResponseDiv_v1AsChild";

import React from "react";
import { Component } from "react";
import styled from "styled-components";

interface ResponseDiv_v1Props {
  clicked: boolean;
  validation: "confirmed" | "negated" | "neutral";
}

export class ResponseDiv_v1 extends Component<ResponseDiv_v1Props> {
  Layout = (
    props: { className?: string } & ResponseDiv_v1Props
  ) => {
    return (
      <div className={props.className}>
        <div>
          <p>SONO IL MESSAGGERO</p>
        </div>
      </div>
    );
  };
  Style = styled(this.Layout)`
    color: #e5e0e0;
    width: 100%;
    display: grid;
    place-items: center;
    font-size: 12px;
    text-align: center;
    div {
      transition: top 0.5s;
      top: ${props => (props.clicked ? "0px" : "-100px")};
      position: absolute;
      z-index: 1;
      border-radius: 1rem;
      border: solid 0.1rem orange;
      margin-top: 0.5rem;
      width: 25rem;
      padding: 0.3rem;
      background-color: ${props => {
        const redbg = props.theme.palette.red;
        const orangebg = props.theme.palette.orange;
        const greenbg = props.theme.palette.green;
        const redborder = props.theme.palette.yellow;
        const orangeborder = props.theme.palette.blue;
        const greenborder = props.theme.palette.purple;

        let bg: string;
        let border: string;

        switch (props.validation) {
          case "confirmed":
            bg = greenbg;
            border = greenborder;
            break;
          case "negated":
            bg = redbg;
            border = redborder;
            break;
          case "neutral":
            bg = orangebg;
            border = orangeborder;
            break;

          default:
            bg = props.theme.backgroundColor;
            break;
        }

        return bg;
      }};
    }
  `;
  render() {
    return <this.Style {...this.props}></this.Style>;
  }
}
