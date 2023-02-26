import { clone as cl } from "../page.types";

export let clone: cl = (type, source) => {
  if (type === "assign") return Object.assign({}, source);
  else return new Object(source);
};
