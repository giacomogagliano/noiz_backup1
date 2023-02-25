import { createRef, ReactNode, RefObject } from "react";
import styled, { keyframes } from "styled-components";

enum layouts {
  main = "main",
}
enum styles {
  defaultStyle = "defaultStyle",
}
type layoutTypes = keyof typeof layouts;
type styleTypes = keyof typeof styles;

export interface Image_v2Props
  extends BaseNoizProps<layoutTypes, styleTypes> {
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  backgroundColor?: string;
  borderTop?: string;
  gridArea?: string;
  display?: string;
  // handleisLoading: Dispatch<SetStateAction<boolean>>;
  src: string;
  fullBorder?: boolean;
  aspectRatio?: "landscape" | "portrait" | null;
  // imageLoaded: boolean;
  image?: {
    width?: string;
    height?: string;
    maxWidth?: string;
  };
}

export class Image_v2Props extends BaseNoizProps<
  layoutTypes,
  styleTypes
> {}
export interface Image_v2State
  extends BaseNoizState<Image_v2Props> {
  isLoading: boolean;
  src: string;
  aspectRatio: "landscape" | "portrait" | null;
  img: RefObject<HTMLImageElement>;
}

export class Image_v2State extends BaseNoizState<Image_v2Props> {}

export class Image_v2 extends BaseNoiz<
  layoutTypes,
  styleTypes,
  Image_v2Props,
  Image_v2State
> {
  img: RefObject<HTMLImageElement>;

  static defaultProps: Image_v2Props = {
    layout: layouts.main,
    style: styles.defaultStyle,
    src: "",
  };

  constructor(props: Image_v2Props) {
    super(props);
    this.img = createRef<HTMLImageElement>();
    let state = new Image_v2State();
    state.isLoading = true;
    state.layout = () => <></>;
    state.src = "";
    state.style = styled(this.Html)``;
    state.aspectRatio = null;
    state.img = this.img;
    this.state = state;
  }

  setAspectRatio = (
    aspectRatio: "landscape" | "portrait"
  ) => this.setState({ aspectRatio });

  handleIsLoading = (isLoading: boolean) => {
    this.setState({ isLoading });
  };

  LogoImage = (props: Image_v2Props) => {
    return (
      <div
        className={props.className}
        // css={props.css}
      >
        <circle />
      </div>
    );
  };

  LogoImageStyled = styled(this.LogoImage)`
    place-items: center;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-left: 1px solid;
    border-right: 1px solid;
    div {
      ${BaseNoiz.styles.getCommonStyle("sixty")}
      border-radius: 100%;
      border: 0.05rem solid;
      background-color: transparent;
      border-radius: 100%;
    }
  `;

  main = (props: Image_v2Props) => {
    console.log(props.aspectRatio);
    const handleOnLoad = () => {
      this.handleIsLoading(false);
    };
    return (
      <div
        className={props.className}
        // css={props.css}
      >
        <img
          onLoad={handleOnLoad}
          src={props.src}
          id="image"
          ref={this.state.img}
        ></img>

        <div id="loading-waves-container">
          <div id="loading-waves">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  };

  layouts = [
    new this.Layout({
      name: layouts.main,
      component: this.main,
    }),
  ];

  LoadingAnimation = keyframes`
  0% {height:5px;transform:translateY(0px);background:#9b59b6;}
  25% {height:30px;transform:translateY(15px);background:#3498db;}
  50% {height:5px;transform:translateY(0px);background:#9b59b6;}
  100% {height:5px;transform:translateY(0px);background:#9b59b6;}
  `;
  // #25 aggiungere qui
  defaultStyle = styled(this.Html)`
    z-index: 1;
    overflow: hidden;
    place-content: center;
    place-items: center;
    justify-content: center;
    justify-items: center;
    grid-area: ${props => props.gridArea};
    background-color: ${props =>
      props.backgroundColor
        ? props.backgroundColor
        : "transparent"};
    //
    ${props => {
      if (props.borderTop)
        return `border-top: ${props.borderTop} solid;`;
    }}
    border-top: ${props =>
      props.fullBorder ? "1px" : undefined};
    display: grid;
    container-type: size;
    #image {
      object-fit: contain;
      object-position: center;
      border-image: none;
      place-self: center;
      display: ${() =>
        !this.state.isLoading ? "block" : "none"};
      max-width: ${props => props.image?.maxWidth};
      ${props => {
        const isLandscape =
          props.aspectRatio === "landscape";
        if (isLandscape) {
          return `height: 100cqh`;
        } else {
          return `width: 100cqw`;
        }
      }};
      /* max-width: ${props =>
        props.maxWidth ? props.maxWidth : "100%"}; */
      /* max-height: ${props =>
        props.maxHeight ? props.maxHeight : "100cqh"}; */
      display: ${props =>
        props.display ? props.display : "block"};
      height: ${props =>
        props.height ? props.height : "auto"};
      ${props => props.width && `width: ${props.width};`};
    }
    #loading-waves-container {
      place-self: center;

      #loading-waves {
        display: ${() => {
          return !this.state.isLoading ? "none" : "block";
        }};
        position: relative;
        span {
          display: block;
          bottom: 0px;
          width: 9px;
          height: 5px;
          background: #9b59b6;
          position: absolute;
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
      }
    }
  `;
  styledlayouts = [
    new this.Style({
      name: styles.defaultStyle,
      style: this.defaultStyle,
    }),
  ];

  render(): ReactNode {
    let Layout: GComponent<Image_v2Props> =
      this.state.layout;
    let Style = this.state.style;
    Layout = Style;
    return (
      <Layout
        {...this.props}
        aspectRatio={this.state.aspectRatio}
      >
        {this.props.children}
      </Layout>
    );
  }

  didUpdate: (
    prevProps: Readonly<Image_v2Props>,
    prevState: Readonly<Image_v2State>,
    snapshot?: any
  ) => void = (_, __, ___) => {
    const currImage = this.state.img;
    if (currImage.current) {
      if (this.state.aspectRatio === null) {
        const rect =
          currImage.current.getBoundingClientRect();
        const imgw = rect.width;
        const imgh = rect.height;
        const ratio = imgw / imgh;
        const aspectRatio: "landscape" | "portrait" =
          ratio >= 1 ? "landscape" : "portrait";
        this.setAspectRatio(aspectRatio);
      }
    }
  };
}
