import React from "react";
import styled from "styled-components";
import {
  Icon,
  NavBar,
  NavInput,
  NavInputProps,
} from "../../../HTML/React/classes";

export default function index() {
  const input1 = new NavInputProps();
  input1.inputId = "biu";
  input1.inputName = "ok";

  const input2 = new NavInputProps();
  input2.inputId = "bello";
  input2.inputName = "ok";

  const input3 = new NavInputProps();
  input3.inputId = "Arianna";
  input3.inputName = "ok";

  const input4 = new NavInputProps();
  input4.inputId = "wow";
  input4.inputName = "ok";
  let NavArea = styled.div`
    width: inherit;
  `;
  const input5 = new NavInputProps();
  input5.inputId = "Bid";
  input5.inputName = "Bid";
  const input6 = new NavInputProps();
  input6.inputId = "Details";
  input6.inputName = "Details";
  const input7 = new NavInputProps();
  input7.inputId = "History";
  input7.inputName = "History";

  return (
    <NavArea>
      <NavBar text layout="main" style="borderOnTop">
        <NavInput {...input3} layout="icon" checked>
          <Icon arrowLeft />
        </NavInput>
        <NavInput {...input1} layout="text" />
        <NavInput {...input4} layout="icon" />
      </NavBar>
      <NavBar text layout="main" style="borderOnTop">
        <NavInput {...input5} layout="text" />
        <NavInput {...input6} layout="text" />
        <NavInput {...input7} layout="text" />
      </NavBar>
    </NavArea>
  );
}
