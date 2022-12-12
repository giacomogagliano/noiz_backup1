export type Step1_v1Data = "Step1_v1Data";
export type Step1_v1Booleans = "Step1_v1Booleans";
export type Step1_v1Props = "Step1_v1Props";
export type Step1_v1ClassProps = "Step1_v1ClassProps";
export type Step1_v1AsChild = "Step1_v1AsChild";

import { Text } from "ink";
import React from "react";
import {
  StepConfiguration,
  Step,
  Option,
} from "../../../class/index.js";

export const Folder = () => (
  <Text color={"green"}>Ooook</Text>
);

export const File = () => (
  <Text color={"red"}>Notter ok</Text>
);

const question =
  "Do you want to create a file or a folder?";

const folder = new Option({
  option: "folder",
  component: Folder,
});

const file = new Option({
  option: "file",
  component: File,
});

export const question1 = new StepConfiguration(
  question,
  [folder, file],
  "radio"
);

export const Step1_v1 = Step(question1);
