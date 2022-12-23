import React from "react";
import { IconPath, Icons } from "../../IconPath";

export type Queue_v1Data = "Queue_v1Data";
export type Queue_v1Booleans = "Queue_v1Booleans";
export type Queue_v1Props = "Queue_v1Props";
export type Queue_v1ClassProps = "Queue_v1ClassProps";
export type Queue_v1AsChild = "Queue_v1AsChild";

export const Queue_v2 = (
  <>
    <path d="M14 6H4C3.45 6 3 6.45 3 7C3 7.55 3.45 8 4 8H14C14.55 8 15 7.55 15 7C15 6.45 14.55 6 14 6ZM14 10H4C3.45 10 3 10.45 3 11C3 11.55 3.45 12 4 12H14C14.55 12 15 11.55 15 11C15 10.45 14.55 10 14 10ZM4 16H10C10.55 16 11 15.55 11 15C11 14.45 10.55 14 10 14H4C3.45 14 3 14.45 3 15C3 15.55 3.45 16 4 16ZM19 6C17.9 6 17 6.9 17 8V14.18C16.69 14.07 16.35 14 16 14C14.16 14 12.72 15.64 13.05 17.54C13.26 18.75 14.25 19.74 15.46 19.95C17.36 20.28 19 18.84 19 17V8H21C21.55 8 22 7.55 22 7C22 6.45 21.55 6 21 6H19Z" />
  </>
);

const queue_ = new IconPath();
queue_.name = Icons.queue;
queue_.JsxPath = Queue_v2;
queue_.filled = true;

export const queue = queue_;
