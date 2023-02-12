export abstract class Strategy {
  abstract name: string;
  abstract method(...args: unknown[]): unknown;
}
