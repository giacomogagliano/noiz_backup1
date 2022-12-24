import styled from "styled-components";
import { P } from "../../../style";
import { BaseNoizProps } from "../../../lib/global";
import { Icon } from "../../Icon";

enum layouts {
  main = "main",
  text = "text",
  icon = "icon",
  "key-value" = "key-value",
}
type layoutTypes = keyof typeof layouts;
enum styles {
  defaultStyle = "defaultStyle",
}
type styleTypes = keyof typeof styles;

export interface NavInput_v4Props
  extends BaseNoizProps<layoutTypes, styleTypes> {
  inputId: string;
  inputName: string;
  IconComponent?: () => JSX.Element;
  value?: string;
  checked?: boolean;
}
export class NavInput_v4Props extends BaseNoizProps<
  layoutTypes,
  styleTypes
> {}

export interface NavInput_v4State
  extends BaseNoizState<NavInput_v4Props> {}
export class NavInput_v4State extends BaseNoizState<NavInput_v4Props> {}

export interface NavInput_v4
  extends BaseNoiz<
    layoutTypes,
    styleTypes,
    NavInput_v4Props,
    NavInput_v4State
  > {}
export class NavInput_v4 extends BaseNoiz<
  layoutTypes,
  styleTypes,
  NavInput_v4Props,
  NavInput_v4State
> {
  static defaultProps: NavInput_v4Props = {
    layout: layouts.text,
    style: styles.defaultStyle,
    inputId: "input id",
    inputName: "input name",
    value: "value",
    IconComponent: () => <Icon logoZion></Icon>,
  };

  static getDerivedStateFromProps(
    props: NavInput_v4Props,
    state: NavInput_v4State
  ) {
    console.log(props, state);
  }

  constructor(props: NavInput_v4Props) {
    super(props);
    let state = new NavInput_v4State();
    state.layout = () => <></>;
    state.style = styled(this.Html)``;
    this.state = state;
  }

  main = (props: NavInput_v4Props) => {
    return <h1>{props.children}blabl</h1>;
  };

  KeyValue = (props: NavInput_v4Props) => {
    const {
      inputId,
      inputName,
      checked,
      className,
      value,
    } = props;
    const RADIO = "radio";
    return (
      <>
        <input
          className={className}
          type={RADIO}
          id={inputId}
          name={inputName}
          defaultChecked={checked}
        ></input>
        <label htmlFor={inputId}>
          <div>
            <P bold>{inputId}</P>
            <P dimmed>{value}</P>
          </div>
        </label>
      </>
    );
  };

  Text = (props: NavInput_v4Props) => {
    const { inputId, inputName, checked, className } =
      props;
    const RADIO = "radio";
    return (
      <>
        <input
          className={className}
          type={RADIO}
          id={inputId}
          name={inputName}
          defaultChecked={checked}
        ></input>
        <label htmlFor={inputId}>
          <P>{inputId}</P>
        </label>
      </>
    );
  };

  Icon = (props: NavInput_v4Props) => {
    const {
      inputId,
      inputName,
      checked,
      className,
      IconComponent,
    } = props;
    const RADIO = "radio";
    // let SafeIconComponent = dataGuard(
    //   IconComponent,
    //   "no component was passed"
    // );
    if (!IconComponent) return <>where is the icon???</>;
    return (
      <>
        <input
          className={className}
          type={RADIO}
          id={inputId}
          name={inputName}
          defaultChecked={checked}
        />
        <label htmlFor={inputId}>
          <div>
            {/* <SafeIconComponent /> */}
            {props.children}
            <IconComponent />
          </div>
          <p>{inputId.toLocaleUpperCase()}</p>
        </label>
      </>
    );
  };

  layouts = [
    new this.Layout({
      name: layouts.main,
      component: this.main,
    }),
    new this.Layout({
      name: layouts.text,
      component: this.Text,
    }),
    new this.Layout({
      name: layouts.icon,
      component: this.Icon,
    }),
    new this.Layout({
      name: layouts["key-value"],
      component: this.KeyValue,
    }),
  ];
}
