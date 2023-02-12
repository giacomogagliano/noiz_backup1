type createReturnTypes = number | string | symbol;

export abstract class CreateRandom {
  abstract create(length?: number): createReturnTypes;
  constructor(public length?: number) {}
}
