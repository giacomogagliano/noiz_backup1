// @ts-nocheck
import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  MakeAsChild,
  NoizDatas,
  NoizProps,
} from "../../../lib/types";
import { Flatten } from "../../../lib/utility";
import { Image } from "../../Image";

// TODO @giacomogagliano mettere apposto
/////// TYPES
export type ItemPage_v1Data = {
  src: string;
  likeIcon: JSX.Element;
  data: {
    title: string;
    description: string;
    highestBid: string;
    info: string;
    creatorField: string;
    royalties: string;
    currency: string;
  };
};

export type ItemPage_v1Booleans = {
  small?: boolean;
  mid?: boolean;
  big?: boolean;
};

export type ItemPage_v1Props = NoizProps<
  ItemPage_v1Data & ItemPage_v1Booleans
>;

export type ItemPage_v1ClassBooleans = {};

export type ItemPage_v1ClassProps = Flatten<
  NoizDatas<ItemPage_v1Props> & ItemPage_v1ClassBooleans
>;

export type ItemPage_v1AsChild = MakeAsChild<
  "ItemPage",
  ItemPage_v1ClassProps
>;
/////////////

////////CLASS
export class ItemPage_v1 extends BaseNoiz<
  ItemPage_v1Data & ItemPage_v1Booleans,
  ItemPage_v1ClassBooleans
> {
  constructor(props: ItemPage_v1ClassProps) {
    super(props);
  }
  Html = (props: ItemPage_v1Props) => {
    const COLLECTION = "Collection";
    const CREATOR = "Creator";
    const ROYALTIES = "Royalties";
    const HIGHEST_BID = "highest bid:";
    const [isLoading, setIsLoading] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [src, setSrc] = useState("");

    useEffect(() => {
      !isLoading
        ? setImageLoaded(true)
        : setImageLoaded(false);
      setSrc(props.src);
    }, [isLoading]);

    return (
      <div className={props.className} css={props.css}>
        <div id="bg-upper"></div>
        <Image
          datas={[
            {
              src,
              imageLoaded,
              handleisLoading: setIsLoading,
              gridArea: "image",
            },
          ]}
          imageLoaded={imageLoaded}
          // src={src}
          // imageLoaded={imageLoaded}
          // handleisLoading={setIsLoading}
          // gridArea="image"
        ></Image>
        <div id="social">
          <button>{props.likeIcon}</button>
          <button>{props.likeIcon}</button>
        </div>
        <div id="infos">
          <h1>{props.data.title}</h1>
          <p>{props.data.description}</p>
          <div id="infos-text">
            <p>{HIGHEST_BID}</p>
            <p id="bold">{props.data.highestBid}</p>
            <p id="bold">{props.data.currency}</p>
          </div>
        </div>
        <div id="links">
          <div id="sublink">
            <div id="sublink-text-area">
              <p>{CREATOR}</p>
              <p>{props.data.royalties}</p>
              <p>{ROYALTIES}</p>
            </div>
            <div id="profile">
              <div id="avatar"></div>
              <p id="profile-id">Profile Name</p>
            </div>
          </div>
          <div id="sublink">
            <div id="sublink-text-area">
              <p>{COLLECTION}</p>
            </div>
            <div id="collection">
              <div id="avatar"></div>
              <p id="collection-id">Collection Name</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  Style = styled(this.Html)`
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
      font-size: 60%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      #sublink {
        display: grid;
        grid-template-rows: 1fr 2fr;
        div {
          display: inline-flex;
        }
        #sublink-text-area {
          p {
            margin-right: 0.3rem;
          }
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

  Mapper = ItemPage_v1.mapperFactory(this.Style);

  render() {
    return <this.Mapper {...this.props}></this.Mapper>;
  }
}
