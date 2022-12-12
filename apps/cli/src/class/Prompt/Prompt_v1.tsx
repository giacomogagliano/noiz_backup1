export type Prompt_v1Data = "Prompt_v1Data";
export type Prompt_v1Booleans = "Prompt_v1Booleans";
export type Prompt_v1Props = "Prompt_v1Props";
export type Prompt_v1ClassProps = "Prompt_v1ClassProps";
export type Prompt_v1AsChild = "Prompt_v1AsChild";
import { Text } from "ink";
import React, { Component } from "react";

export type PromptTypes_v1 = "simple" | "usrInput";

export const Prompt_v1 = (
  question: string,
  type: PromptTypes_v1 = "simple"
) =>
  class extends Component<{ input: string | string[] }> {
    type = type;
    constructor(props: { input: string | string[] }) {
      super(props);
    }

    PromptWithUsrInput = (props: {
      input: string | string[];
    }) => (
      <Text>
        {question} {props.input}
      </Text>
    );

    PromptSimple = (props?: {
      input: string | string[];
    }) => {
      if (props) {
      }
      return <Text>{question}</Text>;
    };

    override render(): React.ReactNode {
      let Element = (props: {
        input: string | string[];
      }) => (
        <Text>
          {question} {props.input}
        </Text>
      );
      if (this.type === "simple")
        Element = this.PromptSimple;
      if (this.type === "usrInput")
        Element = this.PromptWithUsrInput;
      return <Element input={this.props.input} />;
    }
  };
