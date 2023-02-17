import {
  Label as LabelledInput,
  LabelProps as LabelledInputProps,
} from "../../classes/Basic";
import { ChangeEvent, FormEvent } from "react";
import styled, { css } from "styled-components";
import { dataGuard } from "@zionstate/zionbase/utils";

export interface Form_v3 {
  inputs: LabelledInputProps[];
  computeInputs(currInput: string): {
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

export function computeInputs(
  currInput: string,
  props: any
) {
  const cond = currInput !== "";
  const reset = props.reset;
  let value: string = "";
  let input: string = "";
  if (cond) input = reset ? "" : currInput;
  if (cond) value = currInput;
  return { input, value };
}
/**
 * builds inputs' handle changes
 */

export const LabelledInputs = (
  el: LabelledInputProps,
  id: number
) => <LabelledInput key={id} {...el}></LabelledInput>;

export const buildHandleChanges =
  (id: number) => (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let inputs = [...inputs];
    let inputToEdit = inputs[id];
    inputToEdit = dataGuard(inputToEdit, "");
    inputToEdit.input = e.target.value;
    setState({ inputs });
  };

export function buildInputs() {
  const inputs = inputs;
  inputs.forEach((input, idx) => {
    const curIn = inputs[idx];
    const safeInput = dataGuard(curIn, "");
    input.value = safeInput.input as NonNullable<string>;
    input.handleChange = buildHandleChanges(idx);
  });
  return inputs;
}

export function mapLabelledInputs() {
  const inputs = buildInputs();
  let mappedInputs = inputs.map(LabelledInputs);
  return <>{mappedInputs}</>;
}

const styledForm = css`
  display: grid;
  grid-auto-columns: max-content;
`;
const submitButton = css`
  display: none;
`;
const label = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const FormStyle = styled.div`
  ${styledForm}
  #submit-button {
    ${submitButton}
  }
  label {
    ${label}
  }
`;
