import { ComponentClass } from "react";
import styled from "styled-components";
import { StyledDefault } from "../../../lib/types/utility";
import { Icon } from "../../Icon";
import {
  // ImageProps,
  ImageState,
  Image,
} from "../../Image";

enum layouts {
  main = "main",
}
enum styles {
  defaultStyle = "defaultStyle",
}
type layoutTypes = keyof typeof layouts;
type styleTypes = keyof typeof styles;

export interface ItemPage_v2Props
  extends BaseNoizProps<layoutTypes, styleTypes> {
  src: string;
  layout?: layoutTypes;
  style?: styleTypes;
  data: {
    title: string;
    description: string;
    highestBid: string;
    info: string;
    creator: string;
    royalties: string;
    currency: string;
    collectionTitle: string;
  };
}
export class ItemPage_v2Props extends BaseNoizProps<
  layoutTypes,
  styleTypes
> {}

export interface ItemPage_v2State
  extends BaseNoizState<ItemPage_v2Props> {
  src: string;
  isLoading: boolean;
  imageLoaded: boolean;
}
export class ItemPage_v2State extends BaseNoizState<ItemPage_v2Props> {}

export interface ItemPage_v2
  extends BaseNoiz<
    layoutTypes,
    styleTypes,
    ItemPage_v2Props,
    ItemPage_v2State
  > {
  Image: ComponentClass<
    StyledDefault<{
      width?: string;
      height?: string;
      maxWidth?: string;
      backgroundColor?: string;
      borderTop?: string;
      gridArea?: string;
      display?: string;
      src: string;
      fullBorder?: boolean;
      image?: {
        width?: string;
        height?: string;
        maxWidth?: string;
      };
    }>,
    ImageState
  >;
}

export class ItemPage_v2 extends BaseNoiz<
  layoutTypes,
  styleTypes,
  ItemPage_v2Props,
  ItemPage_v2State
> {
  main = (props: ItemPage_v2Props) => {
    const { data } = props;
    // const src = this.state.src;
    // const Image = this.Image;
    const COLLECTION = "Collection";
    const CREATOR = "Creator";
    const ROYALTIES = "Royalties";
    const HIGHEST_BID = "highest bid:";

    return (
      <div className={props.className} css={props.css}>
        <div id="bg-upper"></div>
        <Image
          src={this.state.src}
          gridArea="image"
        ></Image>
        <div id="social">
          <button>
            <Icon like />
          </button>
          <button>
            <Icon more_normal />
          </button>
        </div>
        <div id="infos">
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <div id="infos-text">
            <p>{HIGHEST_BID}</p>
            <p id="bold">{data.highestBid}</p>
            <p id="bold">{data.currency}</p>
          </div>
        </div>
        <div id="links">
          <div id="sublink">
            <div id="sublink-text-area">
              <p id="creator-field">{CREATOR}</p>
              <p id="royalties">{data.royalties}</p>
              <p id="royalties">{ROYALTIES}</p>
            </div>
            <div id="profile">
              <div id="avatar"></div>
              <p id="profile-id">{data.creator}</p>
            </div>
          </div>
          <div id="sublink">
            <div id="sublink-text-area">
              <p id="collection-field">{COLLECTION}</p>
            </div>
            <div id="collection">
              <div id="avatar"></div>
              <p id="collection-id">
                {data.collectionTitle}
              </p>
            </div>
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

  defaultStyle = styled(this.chooseLayout())`
    display: grid;
    width: 100%;
    height: 100%;
    overflow: auto;
    grid-template-rows: 5% 45% 10% 30% 10%;
    grid-template-columns: 5% 90% 5%;
    @media only screen and (min-width: 367px) {
      grid-template-rows: 5% 5% 35% 5% 5% 30% 15%;
      grid-template-columns: 5% 7% 76% 7% 5%;
      grid-template-areas:
        ". . . . ."
        ". . . . ."
        ". . image . ."
        ". . . . ."
        ". social social social ."
        ". infos infos infos ."
        ". links links links .";
    }
    grid-template-areas:
      ". . ."
      ". image ."
      ". social ."
      ". infos ."
      ". links .";
    div  {
      overflow: auto;
    }
    #bg-upper {
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 60vw;
      max-height: 15rem;
      background-color: #c4c4c4;
    }
    #social {
      grid-area: social;
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 50%;
      place-items: center;
      place-self: center;
      button {
        display: grid;
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
    }
    #infos {
      grid-area: infos;
      display: inline;
      width: 100%;
      height: 100%;
      text-align: center;
      #infos-text {
        display: inline;
        p {
          display: inline;
          margin-right: 0.2rem;
          color: ${props => props.theme.palette.grey};
        }
        #bold {
          font-weight: bold;
          color: ${props => props.theme.palette.black};
        }
      }
    }
    #links {
      grid-area: links;
      font-size: 90%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      #sublink {
        display: grid;
        grid-template-rows: 1fr 2fr;
        div {
          display: inline-flex;
        }
        #sublink-text-area {
          #creator-field,
          #collection-field {
            font-weight: bold;
          }
          #collection-id,
          #profile-id {
            font-weight: bold;
          }
          #royalties {
            color: ${props =>
              props.theme.palette.darkgrey};
          }
          p {
            margin-right: 0.3rem;
          }
        }
        #collection-id,
        #profile-id {
          font-weight: bold;
        }
        #avatar {
          width: 24px;
          height: 24px;
          border-radius: 100%;
          background-color: red;
        }
        #profile,
        #collection {
          place-items: center;
          div {
            margin-right: 0.3rem;
          }
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

  Image: ComponentClass<
    StyledDefault<{
      width?: string;
      height?: string;
      maxWidth?: string;
      backgroundColor?: string;
      borderTop?: string;
      gridArea?: string;
      display?: string;
      // handleisLoading: Dispatch<SetStateAction<boolean>>;
      src: string;
      fullBorder?: boolean;
      // imageLoaded: boolean;
      image?: {
        width?: string;
        height?: string;
        maxWidth?: string;
      };
    }>,
    ImageState
  > = Image;

  constructor(props: ItemPage_v2Props) {
    super(props);
    let state = new ItemPage_v2State();
    state.isLoading = true;
    state.imageLoaded = false;
    state.src = props.src;
    state.layout = () => <></>;
    state.style = styled(this.Html)``;
    this.state = state;
  }

  setIsLoading = (isLoading: boolean) => {
    this.setState({ isLoading: isLoading });
  };
  setImageLoaded = (imageLoaded: boolean) => {
    this.setState({ imageLoaded: imageLoaded });
  };
  setSrc = (src: string) => {
    this.setState({ src: src });
  };

  checkLoadingStatus = () => {
    !this.state.isLoading
      ? this.setImageLoaded(true)
      : this.setImageLoaded(false);
    this.setSrc(this.props.src);
  };

  didMount() {
    this.checkLoadingStatus();
  }
}
