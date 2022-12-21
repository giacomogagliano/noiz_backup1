import { EVMweb } from "@zionstate/database/dist/EVM";
import { BigNumber, CallOverrides } from "ethers";
import React, {
  Component,
  lazy,
  MouseEvent,
  ReactNode,
  Suspense,
} from "react";
import { wait } from ".";

interface GetterProps<
  I extends ReturnType<newT>,
  K extends keyof EVMweb["contractFactories"] = keyof EVMweb["contractFactories"],
  Interface extends EVMweb["contractFactories"][K] = EVMweb["contractFactories"][K],
  newT extends Interface["attach"] = Interface["attach"]
> {
  instance: I;
  get_id: number;
  value: string | number;
  id: string;
  buttonMsg: string;
  methods: Map<number, (value: string | number) => void>;
  methodName: keyof I;
}

type a = ReturnType<
  EVMweb["contractFactories"]["SimpleStorage"]["attach"]
>;

export class Getter<
  I extends ReturnType<newT>,
  K extends keyof EVMweb["contractFactories"] = keyof EVMweb["contractFactories"],
  Interface extends EVMweb["contractFactories"][K] = EVMweb["contractFactories"][K],
  newT extends Interface["attach"] = Interface["attach"]
> extends Component<GetterProps<I, K>> {
  constructor(props: GetterProps<I, K>) {
    super(props);
  }
  Lazy = ({ value }: { value: string | number }) => {
    const Lazy = lazy(() =>
      wait(2000).then(async () => ({
        default: () => <p>{value}</p>,
      }))
    );
    return (
      <Suspense fallback={<p>loading..</p>}>
        <Lazy></Lazy>
      </Suspense>
    );
  };

  bigNtoN = (bigN: BigNumber) => {
    const number = new Number(bigN._hex);
    return number.valueOf();
  };

  getString = (
    v: string,
    method: (value: string) => void
  ) => {
    method(v);
  };

  getBigNumber = (
    n: BigNumber,
    method: (value: number) => void
  ) => {
    const number = this.bigNtoN(n);
    method(number);
  };

  handleGetterOnClick =
    (
      id: number,
      methods: Map<
        number,
        (value: string | number) => void
      >,
      methodOnInstanceName: keyof this["props"]["instance"]
    ) =>
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const instance = this.props.instance;
      const methodOnInstance2: (
        overrides?: CallOverrides | undefined
      ) => Promise<string | BigNumber> = instance[
        methodOnInstanceName
      ] as (
        overrides?: CallOverrides | undefined
      ) => Promise<string | BigNumber>;
      const method = methods.get(id);
      if (!method) return;
      methodOnInstance2().then(r => {
        let big: BigNumber = r as BigNumber;
        if (big._isBigNumber) {
          this.getBigNumber(big, method);
        }
        if (typeof r === "string") {
          this.getString(r, method);
        }
      });
    };

  Layout = ({
    get_id,
    value,
    id,
    buttonMsg,
    methods,
    methodName,
  }: GetterProps<I, K>) => {
    const LazyString = this.Lazy;
    return (
      <div id={id}>
        <button
          onClick={this.handleGetterOnClick(
            get_id,
            methods,
            methodName
          )}
        >
          {buttonMsg}
        </button>
        <LazyString value={value}></LazyString>
      </div>
    );
  };
  render(): ReactNode {
    const Layout = this.Layout;
    return <Layout {...this.props} />;
  }
}
