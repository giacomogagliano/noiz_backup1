import styled from "styled-components";

interface Layout<L, P> {
  name: L;
  component: (p: P) => JSX.Element;
}
class Layout<L, P> {}

interface StyledLayout<S, P> {
  name: S;
  style: StyledGComponent<P>;
}
class StyledLayout<S, P> {
  constructor(props: StyledLayout<S, P>) {
    this.name = props.name;
    this.style = props.style;
  }
}

export interface testSipProps extends BaseNoizProps {}
export class testSipProps extends BaseNoizProps {}

export interface testSipState {}
export class testSipState {}

enum testSipLayouts {
  main = "main",
  istia = "istia",
}
type testSipLayoutTypes = keyof typeof testSipLayouts;
class testLayout extends Layout<
  testSipLayoutTypes,
  testSipProps
> {}
const main = new testLayout();
main.name = testSipLayouts.main;
main.component = (p: testSipProps) => (
  <div>
    {p.children}
    <p>1</p>
  </div>
);
const testlay2 = new testLayout();
main.name = testSipLayouts.istia;
main.component = (props: testSipProps) => (
  <div>
    {props.children}
    <p>2</p>
  </div>
);

enum testSipStyles {
  fiesta = "fiesta",
  grande = "grande",
}
type testSipStyleTypes = keyof typeof testSipStyles;
class testStyle extends StyledLayout<
  testSipStyleTypes,
  testSipProps
> {
  constructor(props: testStyle) {
    super(props);
  }
}

export interface testSip
  extends BaseNoiz<
    testSipProps,
    testSipState,
    testLayout,
    testStyle
  > {}
export class testSip extends BaseNoiz<
  testSipProps,
  testSipState,
  testLayout,
  testStyle
> {
  layouts = [main, testlay2];
  styles = [
    new testStyle({
      name: testSipStyles.fiesta,
      style: styled(this.chooseLayout())``,
    }),
  ];
  render() {
    let Element = this.StyledHtml;
    return <Element {...this.props}></Element>;
  }
}
