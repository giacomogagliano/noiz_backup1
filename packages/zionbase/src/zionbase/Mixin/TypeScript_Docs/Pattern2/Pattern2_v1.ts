/**
 * Alternative pattern from the Typescript documentation.
 * This pattern relies on interface merging.
 *
 * Usage:
 * ```ts
 * // first create the interfaces to be mixed:
 * // Each mixin is a traditional ES class
 * class Jumpable {
 *   jump() {}
 * }
 *
 * class Duckable {
 *   duck() {}
 * }
 *
 * // Including the base
 * class Sprite {
 *   x = 0;
 *   y = 0;
 * }
 *
 * // Then you create an interface which merges
 * // the expected mixins with the same name as your base
 * interface Sprite extends Jumpable, Duckable {}
 * // Apply the mixins into the base class via
 * // the JS at runtime
 * applyMixins(Sprite, [Jumpable, Duckable]);
 *
 * let player = new Sprite();
 * player.jump();
 * console.log(player.x, player.y);
 *
 * ```
 * @param derivedCtor A
 * @param constructors
 */
export function applyMixins_v1(
  derivedCtor: any,
  constructors: any[]
) {
  constructors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(
      name => {
        Object.defineProperty(
          derivedCtor.prototype,
          name,
          Object.getOwnPropertyDescriptor(
            baseCtor.prototype,
            name
          ) || Object.create(null)
        );
      }
    );
  });
}

export type Pattern2_v1Ctor = {
  (derivedCtor: any, constructors: any[]): void;
};

export const Pattern2_v1Ctor: Pattern2_v1Ctor =
  applyMixins_v1;
