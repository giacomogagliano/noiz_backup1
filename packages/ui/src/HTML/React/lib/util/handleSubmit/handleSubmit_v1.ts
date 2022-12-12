import {
  Dispatch,
  FormEvent,
  SetStateAction,
} from "react";

export interface submitEventHandler {
  (e: FormEvent<HTMLFormElement>): void;
}
export interface gSubmitEventHandler<T> {
  (e: T): void;
}

export interface IhandleSubmit_v1 {
  <T>(
    callBacks: gSubmitEventHandler<T>[],
    value: T,
    reset?: Dispatch<SetStateAction<string>>,
    defaultValue?: string,
    preventDefault?: boolean
  ): submitEventHandler;
}

export const handleSubmit_v1: IhandleSubmit_v1 =
  (
    callBacks,
    value,
    reset?,
    defaultValue = "",
    preventDefault = true
  ) =>
  e => {
    if (preventDefault) e.preventDefault();
    callBacks.forEach(callBack => callBack(value));
    if (reset) reset(defaultValue);
  };
