export type Getter_v1Data = "Getter_v1Data";
export type Getter_v1Booleans = "Getter_v1Booleans";
export type Getter_v1ClassProps = "Getter_v1ClassProps";
export type Getter_v1AsChild = "Getter_v1AsChild";

import {
  BigNumber,
  CallOverrides,
  Contract,
} from "ethers";
import {
  Component,
  lazy,
  MouseEvent,
  ReactNode,
  Suspense,
} from "react";

export interface Getter_v1Props<C extends Contract> {
  instance: C;
  get_id: number;
  value: string | number;
  id: string;
  buttonMsg: string;
  methods: Map<number, (value: string | number) => void>;
  methodName: keyof C;
}

function wait(time: number) {
  return new Promise<void>(resolve => {
    setTimeout(resolve, time);
  });
}

export class Getter_v1<
  C extends Contract
> extends Component<Getter_v1Props<C>> {
  constructor(props: Getter_v1Props<C>) {
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
  }: Getter_v1Props<C>) => {
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
        <p>{value}</p>
      </div>
    );
  };
  render(): ReactNode {
    const Layout = this.Layout;
    return <Layout {...this.props} />;
  }
}
