import React, {
  Component,
  PropsWithChildren,
} from "react";
interface BProps {}
interface BState {
  counter: number;
}
interface method {
  (value: number): void;
}
interface B
  extends Component<PropsWithChildren<BProps>, BState> {
  plus: method;
  minus: method;
}

class B extends Component<
  PropsWithChildren<BProps>,
  BState
> {
  constructor(props: BProps) {
    super(props);
    this.state = { counter: 0 };
    this.plus = value =>
      this.setState({
        counter: value,
      });
    this.minus = value =>
      this.setState({
        counter: value,
      });
  }
  render() {
    return (
      <div>
        <A
          name="mimmo"
          handleMinus={this.minus}
          handlePlus={this.plus}
          counter={this.state.counter}
        ></A>
        <h3>{this.state.counter}</h3>
      </div>
    );
  }
}

interface AProps {
  name: string;
  counter: number;
  handlePlus: method;
  handleMinus: method;
}
interface AState {
  counter: number;
}
class A extends Component<AProps, AState> {
  constructor(props: AProps) {
    super(props);
    this.state = { counter: 0 };
  }
  plus = () => {
    const current = this.state.counter;
    const next = current + 1;
    this.setState({ counter: next });
    this.props.handlePlus(this.props.counter + 1);
  };
  minus = () => {
    const current = this.state.counter;
    const next = current - 1;
    this.setState({ counter: next });
    this.props.handleMinus(this.props.counter - 1);
  };
  Html = () => (
    <section>
      <button onClick={this.plus}>+</button>
      <button onClick={this.minus}>-</button>
      <p>{this.props.name}</p>
      <p>{this.state.counter}</p>
    </section>
  );
  override render() {
    return <this.Html></this.Html>;
  }
}

export default function index() {
  return <B></B>;
}
