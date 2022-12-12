import React, { Children } from "react";
import styled, { StyledComponent } from "styled-components";

const ratio45 = (width: number) => {
  return (width / 4) * 5;
};

const width = 10;

const CardArea = styled.div<{ width: number; height: number }>`
  border: 1px solid;
  width: ${(props) => props.width}rem;
  height: ${(props) => props.height}rem;
`;

type Parent = (props: { children: JSX.Element }) => JSX.Element;
const Portrait: Parent = ({ children }) => {
  return (
    <CardArea width={width} height={ratio45(width)}>
      {children}
    </CardArea>
  );
};

const Square: Parent = ({ children }) => {
  return (
    <CardArea width={width} height={width}>
      {children}
    </CardArea>
  );
};

const Tweet = (props?: { base?: Parent; children?: JSX.Element | string }) => {
  // return props.parent({ children: <>testPage</> });

  return (
    <props.base>
      <>
        <div>Tweet</div>
      </>
    </props.base>
  );
};

function decorate(
  Foo: (props: { children?: any }) => JSX.Element,
  Boo: (props: { children: any }) => JSX.Element
) {
  return (
    <Boo>
      <Foo></Foo>
    </Boo>
  );
}

function Boo(props: { children: JSX.Element }) {
  return <div>Boo{props.children}</div>;
}
function Foo(props: { children: JSX.Element }) {
  return <div>Foo{props.children}</div>;
}
function Coo(props: { children: JSX.Element }) {
  return <div>Coo{props.children}</div>;
}

// class Decorator {
//   constructor(public Base?: JSX.Element) {}
//   decorate(Base: (props?: { children?: JSX.Element }) => JSX.Element) {
//     this.Base = <Base></Base>;
//     return this;
//   }
//   with(Decorator: (props?: { children?: JSX.Element }) => JSX.Element) {
//     const El = () => this.Base;
//     const Decorated = (
//       <Decorator>
//         <El></El>
//       </Decorator>
//     );

//     this.Base = Decorated;
//     return this;
//   }
// }

// const FooBoo = () => new Decorator().decorate(Boo).Base;
// const FooBooCoo = () => decorate(Coo, FooBoo);

export default function TestPage() {
  // return <TweetDecorator parent={Portrait}></TweetDecorator>;
  return (
    <>
      {/* <FooBoo></FooBoo> */}
      {/* <FooBooCoo></FooBooCoo> */}
      <Tweet base={Portrait}>ohi</Tweet>
      <Tweet base={Square}>bidi</Tweet>
    </>
  );
}
