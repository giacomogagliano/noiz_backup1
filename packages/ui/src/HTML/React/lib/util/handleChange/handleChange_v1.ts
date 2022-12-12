import { ChangeEvent } from "react";

export interface changeEventHandler {
  (e: ChangeEvent<HTMLInputElement>): void;
}
export interface IhandleChange_v1 {
  (
    callBacks: changeEventHandler[],
    preventDefault?: boolean
  ): changeEventHandler;
}
/**
 * This helper creates a handleChange callback which are
 * meant to receive an event.
 * @param callBacks @changeEventHandler List of changeEventHandlers
 * @returns an handler function
 */
export const handleChange_v1: IhandleChange_v1 =
  (callBacks, preventDefault = true) =>
  e => {
    if (preventDefault) e.preventDefault();
    callBacks.forEach(callback => callback(e));
  };
