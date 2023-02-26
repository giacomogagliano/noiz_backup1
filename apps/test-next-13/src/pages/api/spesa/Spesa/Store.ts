import { Node } from "./Node";

export interface StoreValue {
  name: string;
  link: string;
}
export abstract class Store
  extends Node<StoreValue>
  implements Node<StoreValue>
{
  type: "store" = "store";
  abstract kind: string;
}
