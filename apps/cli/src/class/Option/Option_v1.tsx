import { Component } from "react";

/////// TYPES

export type Option_v1Booleans = { small?: boolean };

export type Option_v1Props = {};

export type Option_v1ClassBooleans = {};

export type Option_v1ClassProps = {
  option: string;
  component: () => JSX.Element;
};

export type Option_v1AsChild = {};

export interface Option_v1 {
  value: [string, () => JSX.Element];
}
/////////////

////////CLASS
export class Option_v1 extends Component<Option_v1ClassProps> {
  constructor(props: Option_v1ClassProps) {
    super(props);
    this.value = [props.option, props.component];
  }
}
