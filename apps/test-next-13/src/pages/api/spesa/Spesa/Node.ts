export interface Node<T> {
  type: string;
  value: T;
}
export abstract class Node<T> implements Node<T> {
  value: T;
  constructor(p: T) {
    this.value = p;
  }
}
