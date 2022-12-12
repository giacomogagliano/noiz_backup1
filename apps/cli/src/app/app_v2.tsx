import { Box } from "ink";
import React, { Component } from "react";
import { StepConfiguration } from "../class/index";
import {
  checkOptions,
  useBasicInput,
  useCheck,
} from "../hooks/index";
import { Step1 } from "./Steps/index";
import {
  File,
  Folder,
  question1,
} from "./Steps/Step1/Step1_v1";
import { question2 } from "./Steps/Step2/Step2_v1";

const questions: StepConfiguration[] = [
  question1,
  question2,
];

questions.map(question => {
  if (!question.value[1][0]?.value) return;
  if (!question.value[1][1]?.value) return;
  const checkYesNo = checkOptions([
    question.value[1][0]?.value,
    question.value[1][1]?.value,
  ]);
  if (!question) return;
  if (!question.value[0]) return;
  return checkYesNo(question.value[0]);
});

const checkYesNo = checkOptions([
  ["yes", Folder],
  ["no", File],
]);

export type NoizState = {
  completedSteps: number[];
  currentStep: number;
  RenderedSteps: () => JSX.Element;
};
export class Noiz_v2 extends Component<{}, NoizState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentStep: 0,
      completedSteps: [],
      RenderedSteps: () => <></>,
    };
  }

  handleSteps = (props: {
    isCompleted: boolean;
    RenderedSteps: () => JSX.Element;
  }) => {
    const nextStep =
      new Number(this.state.currentStep).valueOf() + 1;
    if (props.isCompleted) {
      this.setState({ currentStep: nextStep });
      this.setState({
        RenderedSteps: props.RenderedSteps,
      });
    }
  };

  Html = (props: {
    RenderedSteps: () => JSX.Element;
    handleSteps: (props: {
      isCompleted: boolean;
      RenderedSteps: () => JSX.Element;
    }) => void;
  }) => {
    let { inputUpdate, answers, usrKey } = useBasicInput();
    const { botCheck } = useCheck(answers, checkYesNo);
    const { RenderedSteps, handleSteps } = props;
    return (
      <Box flexDirection="column">
        <RenderedSteps />
        <Step1
          input={inputUpdate}
          usrKey={usrKey}
          handleSteps={handleSteps}
        ></Step1>
        {botCheck}
      </Box>
    );
  };

  override render() {
    const { RenderedSteps } = this.state;
    return (
      <this.Html
        RenderedSteps={RenderedSteps}
        handleSteps={this.handleSteps}
      ></this.Html>
    );
  }
}
