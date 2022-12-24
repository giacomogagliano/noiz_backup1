// @ts-nocheck
import { StaticImageData } from "next/image";
import Link from "next/link";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { HTML } from "@zionstate/ui";
import Layout from "../../components/layout";
import { OpenSeaMetadata } from "../api/Types/nfts";
import { BasePropsFromApp } from "../_app";
import styled from "styled-components";
import {
  FilterAlt,
  Like,
  More_Normal,
} from "../../components/Icons";

const TITLE = "CYBERDOG #010 - THE RIPPER";
const DESCRIPTION = `WARNING! This cyberdog is out of control! He is very dangerous, he
takes apart cyberdogs that enter his territory. He came here to find
a partner in the gang.`;
const HIGHESTBID = "highest bid:";
const INFOSUB = "Collection";
const INFOSUBCREATORFIELD = "Creator";
const INFOSUBROYALTIES = "10% Royalties";

const propsObj = {
  title: TITLE,
  description: DESCRIPTION,
  highestBid: HIGHESTBID,
  infosub: {
    info: INFOSUB,
    creatorField: INFOSUBCREATORFIELD,
    royalties: INFOSUBROYALTIES,
  },
};

const components = HTML.React.components;
const ContentArea = HTML.React.styled.layout.ContentArea;
const Image = components.GlobalSections.Image;
const Item = components.Pages.Item;
const getStatic = HTML.Next.staticProps.getStatic;

export interface NftsData {
  [key: string]: NftData;
}

export interface NftData {
  id: number;
  name: string;
  slug: string;
  [key: string]: string | number | StaticImageData[];
  src: string;
}

export type Data<D> = { data: D[] };

export const {
  getStaticPaths: gspt,
  getStaticProps: gsp,
} = getStatic<NftData, { id: string }>(
  "fetch",
  "http://localhost:3000/api/nfts",
  "data",
  undefined,
  { id: "" },
  "id"
);
export const getStaticPaths = gspt;
export const getStaticProps = gsp;

type dataByPath<T> = { data: T };

const Img = styled.img`
  width: 10rem;
  height: auto;
  display: "block";
`;

const Divdiv = styled.div``;

export const Nft: (
  props: dataByPath<OpenSeaMetadata> & BasePropsFromApp
) => JSX.Element = function (props) {
  const { data, layout } = props;
  const { name, image } = data;
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [src, setSrc] = useState("");

  const fill = {
    fill: props.layout.theme.primary.borderColor,
  };
  const LikeIcon = Like(fill);
  const More = More_Normal(fill);

  useEffect(() => {
    !isLoading
      ? setImageLoaded(true)
      : setImageLoaded(false);
    setSrc(props.data.image);
  }, [isLoading]);

  console.log(isLoading);

  const backgroundProps = {
    image: { backgroundColor: "#fafafa" },
    bottomBackgroundColor:
      props.layout.theme.secondary.color,
    bottomSpace: {
      infoSection: {
        infosubs: [
          {
            infoSubDetails: {
              avatar: {
                circle: {
                  borderColor:
                    props.layout.theme.primary.borderColor,
                },
              },
            },
          },
        ],
      },
    },
  };

  return (
    <Layout {...layout} nft>
      <Divdiv id="page">
        <Item
          data={{
            title: props.data.name,
            description: props.data.description,
            highestBid: propsObj.highestBid,
            infosub: propsObj.infosub,
          }}
          src={props.data.image}
          likeIcon={LikeIcon}
          menuIcon={More}
          background={backgroundProps}
        ></Item>
      </Divdiv>
    </Layout>
  );
};

export default Nft;
