import React from "react";
import { Text } from "ink";
import { StepOption } from "../../class/index";

export const checkOptions_v1 =
  (options: StepOption["value"][]) => (input: string) => {
    let response = () => <Text>waiting</Text>;
    options.forEach(option => {
      if (input === option[0]) response = option[1];
    });
    return response;
  };
