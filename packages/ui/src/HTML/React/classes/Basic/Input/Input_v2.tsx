import { ChangeEvent } from "react";
import styled from "styled-components";
import { InputType } from "../../../lib/global";

enum layouts {
  main = "main",
}
enum styles {
  defaultStyle = "defaultStyle",
}
type layoutTypes = keyof typeof layouts;
type styleTypes = keyof typeof styles;

export interface Input_v2Props
  extends BaseNoizProps<layoutTypes, styleTypes> {
  type: InputType;
  placeholder: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number | readonly string[];
  preventDefault?: boolean;
  min?: number;
  max?: number;
  step?: number;
}
export class Input_v2Props extends BaseNoizProps<
  layoutTypes,
  styleTypes
> {}

export interface Input_v2State
  extends BaseNoizState<Input_v2Props> {}
export class Input_v2State extends BaseNoizState<Input_v2Props> {}

export interface Input_v2
  extends BaseNoiz<
    layoutTypes,
    styleTypes,
    Input_v2Props,
    Input_v2State
  > {
  onChange(
    props: Input_v2Props
  ): (e: ChangeEvent<HTMLInputElement>) => void;
}

export class Input_v2 extends BaseNoiz<
  layoutTypes,
  styleTypes,
  Input_v2Props,
  Input_v2State
> {
  static defaultProps: Input_v2Props = {
    layout: layouts.main,
    style: styles.defaultStyle,
    handleChange: () => {},
    placeholder: "placeholder",
    type: "text",
  };
  constructor(props: Input_v2Props) {
    super(props);
    let state = new Input_v2State();
    state.layout = () => <></>;
    state.style = styled(this.Html)``;
    this.state = state;
  }
  onChange =
    (props: Input_v2Props) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      if (props.preventDefault) e.preventDefault();
      return props.handleChange(e);
    };

  main = (props: Input_v2Props) => {
    return (
      <input
        className={props.className}
        // css={props.css}
        type={props.type}
        placeholder={props.placeholder}
        onChange={this.onChange(props)}
        value={props.value}
        min={props.min}
        max={props.max}
        step={props.step}
      />
    );
  };

  layouts = [
    new this.Layout({
      name: layouts.main,
      component: this.main,
    }),
  ];

  defaultStyle = styled(this.Html)``;

  styledlayouts = [
    new this.Style({
      name: styles.defaultStyle,
      style: this.defaultStyle,
    }),
  ];
}
