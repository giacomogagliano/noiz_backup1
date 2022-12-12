export type Step2_v1Data = "Step2_v1Data";
export type Step2_v1Booleans = "Step2_v1Booleans";
export type Step2_v1Props = "Step2_v1Props";
export type Step2_v1ClassProps = "Step2_v1ClassProps";
export type Step2_v1AsChild = "Step2_v1AsChild";
export const Step2_v1 = "Step2_v1";

import { Text } from "ink";
import React from "react";
import {
  StepConfiguration,
  Step,
  StepOption,
} from "../../../class/index";

export const question2Option1 = new StepOption(
  "boo",
  () => <Text></Text>
);
export const question2 = new StepConfiguration(
  "what about whatever?",
  [question2Option1],
  "open"
);
export const Step2 = Step(question2);
