import React from "react";
import {
  Form,
  FormProps,
  LabelProps as LabelledInputProps,
} from "../../../HTML/React/classes";

let input1 = new LabelledInputProps();
input1.name = "bodl";
input1.placeholder = "bolder";
input1.type = "text";
input1.handleChange = () => {};

let input2 = new LabelledInputProps();
input2.name = "bolt";
input2.placeholder = "bolter";
input2.type = "text";
input2.handleChange = () => {};

let input3 = new LabelledInputProps();
input3.name = "input 3";
input3.placeholder = "sdflter";
input3.type = "text";
input3.handleChange = () => {};

let input4 = new LabelledInputProps();
input4.name = "input 4";
input4.placeholder = "sdflter";
input4.type = "text";
input4.handleChange = () => {};

let formProps = new FormProps();
formProps.inputs = [input1, input2, input3, input4];
formProps.name = "myform";
formProps.reset = true;

export default function index() {
  return <Form {...formProps}></Form>;
}
