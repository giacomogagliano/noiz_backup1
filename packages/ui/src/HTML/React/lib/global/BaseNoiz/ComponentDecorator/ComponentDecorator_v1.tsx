import styled from "styled-components";

export interface IComponentDecorator_v1 {}

export interface ComponentDecorator_v1<
  L,
  S,
  P extends BaseNoizProps<L, S> = BaseNoizProps<L, S>
> {
  component: GComponent<P>;
  decorate(component: GComponent<P>): this;
  with(style: StyledGComponent<P>): StyledGComponent<P>;
}
export class ComponentDecorator_v1<
  L,
  S,
  P extends BaseNoizProps<L, S> = BaseNoizProps<L, S>
> {
  component: GComponent<P> = props => (
    <div className={props.className}></div>
  );
  constructor(component?: GComponent<P>) {
    if (component) this.component = component;
    this.decorate = function (component) {
      this.component = component;
      return this;
    };
    this.with = function (StyledComp) {
      const decorated = (props: P) => (
        <StyledComp
          as={this.component as StyledGComponent<P>}
          {...props}
        >
          {props.children}
        </StyledComp>
      );
      const Styled = styled(decorated)``;
      return Styled;
    };
  }
}

export type ComponentDecorator_v1Ctor<
  L = string,
  S = string,
  P extends BaseNoizProps<L, S> = BaseNoizProps<L, S>
> = {
  new (component?: GComponent<P>): ComponentDecorator_v1<
    L,
    S,
    P
  >;
};

export const ComponentDecorator_v1Ctor: ComponentDecorator_v1Ctor =
  ComponentDecorator_v1;
