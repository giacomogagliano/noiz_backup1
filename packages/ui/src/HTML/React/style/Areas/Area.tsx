// import { ImageProps } from "next/image";
import { RefObject } from "react";
import styled, { css } from "styled-components";
// import {
//   InfosProps,
// } from "../../components/Items";
import { border1PxSolid_wo_top } from "../common/border";

// type AreaTypes = {
//   cardHead?: boolean;
//   cardInfos?: boolean;
//   image?: boolean;
//   infos?: boolean;
//   itemArea?: boolean;
// };

export type AreaStyle = {
  width?: number;
  height?: number;
  blockSize?: number;
  columns?: number;
  avatarSize?: number;
  ref?: RefObject<HTMLDivElement>;
};

const defaultArea = css<AreaStyle>`
  height: 100%;
  overflow: auto;
  width: ${props => props.width}px;
  grid-auto-rows: ${props => props.blockSize + "px"};
  grid-template-columns: repeat(
    ${props => props.columns},
    ${props => props.blockSize + "px"}
  );
`;

type CardAreaProps = AreaStyle;

const cardHeadArea = css<CardAreaProps>`
  z-index: 1;
  grid-template-columns: ${props => props.avatarSize}px 4fr 1fr;
  grid-template-rows: 1fr;
  border-top: 1px solid;
  ${border1PxSolid_wo_top}
`;

type CardInfosProps = AreaStyle;
const cardInfos = styled.div<CardInfosProps>`
  ${border1PxSolid_wo_top}
  grid-template-columns: 1fr 1fr;
`;

type InfosProps_ = AreaStyle;
const infos = styled.div<InfosProps_>`
  width: 100%;
  height: 100%;
  grid-template-rows: 2fr 1fr 1fr;
`;

type ImageProps = {
  backgroundColor: string;
  borderTop: string;
  gridArea: string;
};

const image = css<ImageProps>`
  z-index: 1;
  background-color: ${props =>
    props.backgroundColor
      ? props.backgroundColor
      : "transparent"};
  //
  ${props => {
    if (props.borderTop)
      return `border-top: ${props.borderTop} solid;`;
  }}
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
  display: grid;
  place-items: center;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  overflow: hidden;
  ${props => {
    if (props.gridArea)
      return `grid-area: ${props.gridArea};`;
  }}
`;

// const itemArea = styled.div`
//   display: grid;
//   place-items: none;
// `;

type AreaProps = {
  cardHead: boolean;
  cardInfos: boolean;
  infos: boolean;
  image: boolean;
} & ImageProps &
  AreaStyle;

export const Area = styled.div<AreaProps>`
  display: grid;
  /* place-items: center; */
  ${props => {
    if (props.cardHead) return cardHeadArea;
    if (props.cardInfos) return cardInfos;
    if (props.infos) return infos;
    else {
      if (props.image) return image;
      else return defaultArea;
    }
  }}
`;

export const Area2 = styled.div<any>`
  z-index: 1;
  background-color: ${props =>
    props.backgroundColor
      ? props.backgroundColor
      : "transparent"};
  //
  ${props => {
    if (props.borderTop)
      return `border-top: ${props.borderTop} solid;`;
  }}
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
  display: grid;
  place-items: center;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  overflow: hidden;
  ${props => {
    if (props.gridArea)
      return `grid-area: ${props.gridArea};`;
  }}
`;

export const Area3 = styled.div<any>`
  place-items: center;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
`;
