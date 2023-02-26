import { ID, List, ListValue } from "./List";
import { Node } from "./Node";
import { ProductValue } from "./Product";

export class SpesaList extends List {
  constructor(v: ListValue) {
    super(v);
  }
  addProduct(product: ID, qty: number): this {
    this.value.products.set(product, qty);
    return this;
  }
  removeProduct(product: Node<ProductValue>): void {
    window.console.log("ill remove");
  }
  closeList(): void {
    window.console.log("ill close");
  }
  total(): number {
    window.console.log("ill total");
    return 0;
  }
}
