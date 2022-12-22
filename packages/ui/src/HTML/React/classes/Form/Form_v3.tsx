import React from "react";
import { dataGuard } from "@zionstate/zionbase/utils";
import { ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import {
  Label as LabelledInput,
  LabelProps as LabelledInputProps,
} from "../Basic";

enum layouts {
  main = "main",
}
enum styles {
  defaultStyle = "defaultStyle",
}
type layoutTypes = keyof typeof layouts;
type styleTypes = keyof typeof styles;

class InputState {
  input = "";
  value = "";
}

export interface Form_v3Props
  extends BaseNoizProps<layoutTypes, styleTypes> {
  name: string;
  inputs: LabelledInputProps[];
  reset?: boolean;
}
export class Form_v3Props extends BaseNoizProps<
  layoutTypes,
  styleTypes
> {}

export interface Form_v3State
  extends BaseNoizState<Form_v3Props> {
  inputs: { input: string; value: string }[];
}
export class Form_v3State extends BaseNoizState<Form_v3Props> {}

export interface Form_v3
  extends BaseNoiz<
    layoutTypes,
    styleTypes,
    Form_v3Props,
    Form_v3State
  > {
  InputState: typeof InputState;
  inputs: LabelledInputProps[];
  newInputState(): InputState;
  computeInputs(currInput: string): {
    input: string;
    value: string;
  };
  buildNewInputState(
    _: any,
    index: number
  ): {
    input: string;
    value: string;
  };
  handleSubmit(e: FormEvent<HTMLFormElement>): void;
  handleChanges(
    id: number
  ): (e: ChangeEvent<HTMLInputElement>) => void;
  buildInputs(): LabelledInputProps[];
  LabelledInputs(
    el: LabelledInputProps,
    id: number
  ): JSX.Element;
  mapLabelledInputs(): JSX.Element;
  //// Html: GComponent<Form_v3Props>;
  ////// StyledHtml: StyledGComponent<Form_v3Props>;
}
export class Form_v3 extends BaseNoiz<
  layoutTypes,
  styleTypes,
  Form_v3Props,
  Form_v3State
> {
  static defaultProps: Form_v3Props = {
    layout: layouts.main,
    style: styles.defaultStyle,
    inputs: [],
    name: "name",
  };

  InputState = InputState;

  inputs;

  newInputState = () => new this.InputState();

  constructor(props: Form_v3Props) {
    super(props);
    let ins = props.inputs;
    this.inputs = props.inputs;
    let inputs = ins.map(this.newInputState);
    let state = new Form_v3State();
    state.layout = () => <></>;
    state.style = styled(this.Html)``;
    state.inputs = inputs;
    this.state = state;
  }

  computeInputs(currInput: string) {
    const cond = currInput !== "";
    const reset = this.props.reset;
    let value: string = "";
    let input: string = "";
    if (cond) input = reset ? "" : currInput;
    if (cond) value = currInput;
    return { input, value };
  }

  buildNewInputState = (_: any, index: number) => {
    let currInpState = this.state.inputs[index];
    let currInput = dataGuard(currInpState, "").input;
    let { input, value } = this.computeInputs(currInput);
    let nuInsState = { input, value };
    return nuInsState;
  };

  /**
   * handles form submit
   */
  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currIns = this.inputs;
    let inputs = currIns.map(this.buildNewInputState);
    this.setState({ inputs });
  };

  buildHandleChanges =
    (id: number) => (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      let inputs = [...this.state.inputs];
      let inputToEdit = inputs[id];
      inputToEdit = dataGuard(inputToEdit, "");
      inputToEdit.input = e.target.value;
      this.setState({ inputs });
    };

  /**
   * builds inputs' handle changes
   */
  buildInputs() {
    const inputs = this.inputs;
    inputs.forEach((input, idx) => {
      const curIn = this.state.inputs[idx];
      const safeInput = dataGuard(curIn, "");
      input.value = safeInput.input as NonNullable<string>;
      input.handleChange = this.buildHandleChanges(idx);
    });
    return inputs;
  }

  LabelledInputs = (
    el: LabelledInputProps,
    id: number
  ) => <LabelledInput key={id} {...el}></LabelledInput>;

  /**
   * builds labelled inputs React compon
   */
  mapLabelledInputs() {
    const inputs = this.buildInputs();
    let mappedInputs = inputs.map(this.LabelledInputs);
    return <>{mappedInputs}</>;
  }

  main = (props: Form_v3Props) => {
    let mappedLabelledInputs = this.mapLabelledInputs();
    return (
      <form
        className={props.className}
        onSubmit={this.handleSubmit}
      >
        {mappedLabelledInputs}
        <input type="submit" id="submit-button"></input>
        {props.children}
      </form>
    );
  };

  layouts = [
    new this.Layout({
      name: layouts.main,
      component: this.main,
    }),
  ];

  defaultStyle = styled(this.Html)`
    display: grid;
    grid-auto-columns: max-content;
    #submit-button {
      display: none;
    }
    label {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  `;

  styledlayouts = [
    new this.Style({
      name: styles.defaultStyle,
      style: this.defaultStyle,
    }),
  ];
}
