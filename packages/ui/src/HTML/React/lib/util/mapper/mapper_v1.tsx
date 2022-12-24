import { FC } from "react";

type mapper_v1Props<P> = { datas: P[] };

export type mapper_v1Return<
  P,
  D extends mapper_v1Props<P> = mapper_v1Props<P>
> = (props: D) => JSX.Element;

/**
 * ```ts
 * function Foo(props: props) {
 *   return <div>{props.name}</div>;
 * }
 *
 * const FooFactory = Factory(Foo);
 *
 * function Renderer(props: { datas: props[] }) {
 *   return <FooFactory {...props}></FooFactory>;
 * }
 * ```
 * @param Component
 * @returns
 */
export function mapper_v1<
  P extends { className?: string },
  C extends P & { className?: string },
  ComplexDatas extends {
    datas: C[];
    className?: string;
  } = { datas: C[]; className?: string },
  SimplerDatas extends {
    datas: P[];
    className?: string;
  } = { datas: P[]; className?: string },
  D extends ComplexDatas | SimplerDatas =
    | ComplexDatas
    | SimplerDatas
>(Component: FC<P>): mapper_v1Return<P, D> {
  return function (props: D): JSX.Element {
    return (
      <>
        {props.datas.map((data, i) => (
          <Component
            key={i}
            {...data}
            className={props.className}
          ></Component>
        ))}
      </>
    );
  };
}
