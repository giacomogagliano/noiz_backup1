import styled, { keyframes } from "styled-components";
import {
  MakeAsChild,
  NoizDatas,
  NoizProps,
} from "../../../lib/types";
import { CssStyled, Flatten } from "../../../lib/utility";
///TODO #38 questa classe non riesco a capire bene come farla
/////// TYPES
export type Loading_v1Data = {};

export type Loading_v1Booleans = { display: boolean };

export type Loading_v1Props = NoizProps<
  Loading_v1Data & Loading_v1Booleans & CssStyled
>;

export type Loading_v1ClassBooleans = {
  waves?: boolean;
};

export type Loading_v1ClassProps = Flatten<
  NoizDatas<Loading_v1Props> & Loading_v1ClassBooleans
>;

export type Loading_v1AsChild = MakeAsChild<
  "Loading",
  Loading_v1ClassProps
>;
/////////////

////////CLASS
export class Loading_v1 extends BaseNoiz<
  Loading_v1Data & Loading_v1Booleans,
  Loading_v1ClassBooleans
> {
  constructor(props: Loading_v1ClassProps) {
    super(props);
  }

  Waves = (props: Loading_v1Props) => {
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

  LoadingAnimation = keyframes`
    0% {height:5px;transform:translateY(0px);background:#9b59b6;}
    25% {height:30px;transform:translateY(15px);background:#3498db;}
    50% {height:5px;transform:translateY(0px);background:#9b59b6;}
    100% {height:5px;transform:translateY(0px);background:#9b59b6;}
  `;

  WavesStyle = styled(this.Waves)`
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

  render() {
    let Element = this.Waves;
    // @ts-expect-error
    if (!this.props.datas[0]) throw new Error("No datas");
    // @ts-expect-error
    if (this.props.waves) Element = this.Waves;
    return (
      <Element
        // @ts-expect-error
        display={this.props.datas[0].display}
      ></Element>
    );
  }
}
