import styled, { keyframes } from "styled-components";

enum layouts {
  main = "main",
  wavesLayout = "wavesLayout",
}
enum styles {
  defaultStyle = "defaultStyle",
  wavesStyle = "wavesStyle",
}
type layoutTypes = keyof typeof layouts;
type styleTypes = keyof typeof styles;

export interface Loading_v2Props
  extends BaseNoizProps<layoutTypes, styleTypes> {}

export class Loading_v2Props extends BaseNoizProps<
  layoutTypes,
  styleTypes
> {
  display?: boolean;
}

export interface Loading_v2State
  extends BaseNoizState<Loading_v2Props> {}

export class Loading_v2State extends BaseNoizState<Loading_v2Props> {}

export interface Loading_v2
  extends BaseNoiz<
    layoutTypes,
    styleTypes,
    Loading_v2Props,
    Loading_v2State
  > {}

export class Loading_v2 extends BaseNoiz<
  layoutTypes,
  styleTypes,
  Loading_v2Props,
  Loading_v2State
> {
  // TODO #39 @ariannatnl provare loading
  static defaultProps: Loading_v2Props = {
    layout: layouts.wavesLayout,
    style: styles.wavesStyle,
  };
  constructor(props: Loading_v2Props) {
    super(props);
    let state = new Loading_v2State();
    state.layout = () => <></>;
    state.style = styled(this.Html)``;
    this.state = state;
  }
  WavesLayout = (props: Loading_v2Props) => {
    return (
      <div className={props.className}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  };
  main = (props: Loading_v2Props) => {
    return <h1>{props.children}cicc</h1>;
  };
  layouts = [
    new this.Layout({
      name: layouts.main,
      component: this.main,
    }),
    new this.Layout({
      name: layouts.wavesLayout,
      component: this.WavesLayout,
    }),
  ];

  defaultStyle = styled(this.Html)``;

  LoadingAnimation = keyframes`
    0% {height:5px;transform:translateY(0px);background:#9b59b6;}
    25% {height:30px;transform:translateY(15px);background:#3498db;}
    50% {height:5px;transform:translateY(0px);background:#9b59b6;}
    100% {height:5px;transform:translateY(0px);background:#9b59b6;}
  `;

  WavesStyle = styled(this.Html)`
    display: ${props =>
      props.display ? "block" : "none"};
    position: relative;
    right: 4.5px;
    place-self: center;
    span {
      display: block;
      bottom: 0px;
      width: 9px;
      height: 5px;
      background: #9b59b6;
      position: absolute;
      place-self: center;
      animation: ${this.LoadingAnimation} 1.5s infinite
        ease-in-out;
      animation-delay: 0.2s;
    }
    span:nth-child(2) {
      left: 11px;
      animation-delay: 0.3s;
    }
    span:nth-child(3) {
      left: 22px;
      animation-delay: 0.4s;
    }
    span:nth-child(4) {
      left: -11px;
      animation-delay: 0.1s;
    }
    span:nth-child(5) {
      left: -22px;
      animation-delay: 0s;
    }
  `;
  styledlayouts = [
    new this.Style({
      name: styles.defaultStyle,
      style: this.defaultStyle,
    }),
    new this.Style({
      name: styles.wavesStyle,
      style: this.WavesStyle,
    }),
  ];
}
