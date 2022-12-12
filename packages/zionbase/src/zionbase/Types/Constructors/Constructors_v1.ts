/**
 * Basic constructor which instance is an empty object
 */
export type Constructor = new (...arg: any[]) => {};

/**
 * Generic type constructor. It accepts only one type
 * parameters which describe the interface of the returned
 * instance.
 */
export type GConstructor<T> = new (...arg: any[]) => T;

/**
 * Type which can describe any class. It can be used as type
 * for inputs which expect a constructor.
 */
export type AnyCtor_v1 = new (...args: any[]) => any;

/**
 * Type which can take 2 arguments to describe a constructor
 * @param T Type of the arguments as array of union
 * @param R Type which defines the return of the class which
 * usually is represented by an interface.
 */
export type NCtor<T, R> = new (...args: T[]) => R;

/**
 * Utility type which retrieves the type of the instance of
 * a given class
 */
export type InferInstance<
  t extends new (...args: any) => any
> = InstanceType<t> extends {}
  ? {
      [k in keyof InstanceType<t>]: InstanceType<t>[k];
    }
  : never;
