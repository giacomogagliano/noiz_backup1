import { swtch } from "..";

export const swtch5_v1: swtch = function (arr, opt, test) {
  if (!opt[0]) throw new Error("");
  if (!opt[1]) throw new Error("");
  if (!opt[2]) throw new Error("");
  if (!opt[3]) throw new Error("");
  if (!opt[4]) throw new Error("");
  switch (test) {
    case arr[0]:
      return opt[0];
    case arr[1]:
      return opt[1];
    case arr[2]:
      return opt[2];
    case arr[3]:
      return opt[3];
    case arr[4]:
      return opt[4];
    default:
      return opt[0];
  }
};
