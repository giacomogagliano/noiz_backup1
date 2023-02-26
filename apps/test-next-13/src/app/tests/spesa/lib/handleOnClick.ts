import { MouseEvent } from "react";
import { actions, handleOnClickProps } from "../page.types";

export const handleOnClick =
  ({ setContent }: handleOnClickProps) =>
  (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let elementID: actions = e.currentTarget.getAttribute("id") as actions;
    setContent(elementID);
  };
