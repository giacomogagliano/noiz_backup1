import { ChangeEvent } from "react";
import { handleOnChangeProps } from "../page.types";

export const handleOnChange =
  ({ inputs, setInputs }: handleOnChangeProps) =>
  (id: string) =>
  (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let value = e.target.value;
    inputs.set(id, value);
    setInputs(inputs);
  };
