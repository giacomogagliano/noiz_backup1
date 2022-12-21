import { EVMweb } from "@zionstate/database/dist/EVM";
import { BigNumber } from "ethers";
import React, {
  Component,
  lazy,
  MouseEvent,
  ReactNode,
  Suspense,
} from "react";
import { wait } from ".";

interface GetterProps {
  instance: ReturnType<
    EVMweb["contractFactories"]["SimpleStorage"]["attach"]
  >;
  get_id: number;
  value: string | number;
  id: string;
  buttonMsg: string;
  methods: Map<number, (value: string | number) => void>;
}

export class Getter extends Component<GetterProps> {
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

  handleGetterOnClick =
    (
      id: number,
      methods: Map<
        number,
        (value: string | number) => void
      >
    ) =>
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const instance = this.props.instance;
      const method = methods.get(id);
      if (!method) return;
      if (id === 0) {
        instance
          .myString()
          .then(n => {
            method(n);
          })
          .catch(e => console.log(e));
      }
      if (id === 1) {
        instance
          .getNumber()
          .then(n => {
            const bigNumber = n;
            const number = this.bigNtoN(bigNumber);
            method(number);
            console.log(number);
          })
          .catch(e => console.log(e));
      }
    };

  Layout = ({
    get_id,
    value,
    id,
    buttonMsg,
    methods,
  }: GetterProps) => {
    const LazyString = this.Lazy;
    return (
      <div id={id}>
        <button
          onClick={this.handleGetterOnClick(
            get_id,
            methods
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
