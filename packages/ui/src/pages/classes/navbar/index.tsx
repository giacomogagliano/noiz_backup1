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
  input1.inputId = "lol";
  input1.inputName = "ok";

  const input2 = new NavInputProps();
  input2.inputId = "olo";
  input2.inputName = "ok";

  const input3 = new NavInputProps();
  input3.inputId = "ool";
  input3.inputName = "ok";

  const input4 = new NavInputProps();
  input4.inputId = "oool";
  input4.inputName = "ok";

  let NavArea = styled.div`
    width: inherit;
  `;

  return (
    <NavArea>
      <NavBar text layout="main" style="borderOnTop">
        <NavInput
          {...input3}
          layout="icon"
          checked
        ></NavInput>
        <NavInput {...input1} layout="icon" />
        <NavInput {...input4} layout="icon" />
      </NavBar>
    </NavArea>
  );
}
