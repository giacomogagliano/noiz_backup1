import React, { Component } from "react";
import styled from "styled-components";
import { BaseNoizProps } from "../../HTML/React/lib/global";

enum layouts {
  main = "main",
  inside = "inside",
}
type layoutTypes = keyof typeof layouts;

enum styles {
  normal = "normal",
  bold = "bold",
}
type styleTypes = keyof typeof styles;

export interface LifeCycle2Props
  extends BaseNoizProps<layoutTypes, styleTypes> {}
export class LifeCycle2Props extends BaseNoizProps<
  layoutTypes,
  styleTypes
> {}

export interface LifeCycle2State
  extends BaseNoizState<LifeCycle2Props> {
  status: 0 | 1;
  pieceOfState: string;
}
export class LifeCycle2State extends BaseNoizState<LifeCycle2Props> {}

class LifeCycleLayout extends BaseNoizLayout<
  layoutTypes,
  LifeCycle2Props
> {
  constructor(props?: {
    name: layoutTypes;
    component: GComponent<LifeCycle2Props>;
  }) {
    super();
    if (!props) return;
    this.name = props.name;
    this.component = props.component;
  }
}
const main = new LifeCycleLayout();
main.name = layouts.main;
main.component = function () {
  console.log("i am the this in main component", this);
  // this state is undefined
  return (
    <div>
      i am the external component which would like to
      access the state:
      <p>the state is : {this ? this : "undefined"}</p>
    </div>
  );
};

export interface LifeCycle2
  extends BaseNoiz<
    layoutTypes,
    styleTypes,
    LifeCycle2Props,
    LifeCycle2State
  > {}
export class LifeCycle2 extends BaseNoiz<
  layoutTypes,
  styleTypes,
  LifeCycle2Props,
  LifeCycle2State
> {
  InsideComponent = (props: LifeCycle2Props) => {
    console.log("i am the this in inside component", this);
    // this state is defined
    return (
      <div className={props.className}>
        inside component with an arrow funcition, and i can
        access the state: <p>{this.state.pieceOfState}</p>
      </div>
    );
  };

  layouts = [
    main,
    new LifeCycleLayout({
      name: layouts.inside,
      component: this.InsideComponent,
    }),
  ];

  bold = () => {
    console.log("bold style building");
    return styled(this.chooseStyle())`
      font-weight: bold;
    `;
  };

  styledlayouts = [
    new this.Style({
      name: styles.bold,
      style: this.bold(),
    }),
  ];

  method(mess: string) {
    console.log("Method", "called by", mess);
  }

  decorator: (
    component: GComponent<LifeCycle2Props>
  ) => StyledGComponent<LifeCycle2Props> = (
    component: GComponent<LifeCycle2Props>
  ) => {
    console.log("calledDecorator");

    return styled(component)`
      p {
        font-weight: bold;
      }
    `;
  };

  boo = this.method("boo"); // 2
  foo = this.method("foo"); // 3
  variable = console.log("variable just before ctor"); // 4

  constructor(p: LifeCycle2Props) {
    super(p);
    console.log("Ctor start"); // 5
    this.method("constructor"); // 6
    this.variable = console.log(
      "variable mess changed in ctor"
    ); // 7;
    this.state = {
      status: 0,
      pieceOfState: "I am the piece of state",
      layout: this.chooseLayout(),
      style: this.chooseStyle(),
    };
    // passes to super // 8
  }

  static getDerivedStateFromProps(props, state) {
    console.log(
      "i am getDerived in lifecycle",
      props,
      state
    );
    console.log("getDerived props: ", props);
    console.log("getDerived state: ", state);

    return state;
  }

  render() {
    let Component = this.chooseLayout();
    let Style = this.decorator(Component);
    Component = Style;
    // const Style = this.chooseStyle();
    // Component = Style;

    console.log("I am in the render method"); // 9
    this.variable = console.log(
      "i am variable, my mess has changed in the render method" // 10
    );
    const PieceOfState =
      this.componentHoldingPieceOfState.bind(this);
    return (
      <div>
        ciao
        <button onClick={this.switch.bind(this)}>
          switch
        </button>
        <button
          onClick={this.handlePieceOfState.bind(this)}
        >
          piece of state switcher
        </button>
        <p>My state is: {this.state.status}</p>
        <PieceOfState />
        <Component
          layout={this.props.layout}
          style={this.props.style}
        />
      </div>
    );
  }

  switch() {
    console.log("I am the switch");
    const currentStatus = this.state.status;
    const updatedStatus = currentStatus === 0 ? 1 : 0;
    this.setState({ status: updatedStatus });
  }

  stateHolder() {
    console.log(
      "I am state holder, i log state",
      this.state
    );
  }

  componentHoldingPieceOfState() {
    return <p>{this.state.pieceOfState}</p>;
  }

  handlePieceOfState() {
    console.log("I am handlePieceOfState");

    this.setState({
      pieceOfState: "changed piece of state",
    });
  }

  componentDidMount() {
    console.log("I am component did mount");
  }
}

export default function index() {
  console.log("Next page"); // 1
  return <LifeCycle2 layout="inside" style="bold" />;
}
