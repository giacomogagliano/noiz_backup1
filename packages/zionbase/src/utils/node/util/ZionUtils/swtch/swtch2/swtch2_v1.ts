import { swtch } from "..";

export const swtch2_v1: swtch = function (arr, opt, test) {
  if (!opt[0]) throw new Error("");
  if (!opt[1]) throw new Error("");
  switch (test) {
    case arr[0]:
      return opt[0];
    case arr[1]:
      return opt[1];
    default:
      return opt[0];
  }
};
