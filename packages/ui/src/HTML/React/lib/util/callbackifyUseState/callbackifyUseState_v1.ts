import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from "react";

export type callbackifyUseState_v1_type = (
  useStateDispatch: Dispatch<SetStateAction<string>>
) => (e: ChangeEvent<HTMLInputElement>) => void;

export const callbackifyUseState_v1: callbackifyUseState_v1_type =

    useStateDispatch =>
    (e: ChangeEvent<HTMLInputElement>) => {
      useStateDispatch(e.target.value);
    };
