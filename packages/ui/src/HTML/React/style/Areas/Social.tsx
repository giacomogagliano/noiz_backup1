import styled, { css } from "styled-components";
import { border1PxSolid_wo_top } from "../common/border";

type SocialStyled = {
  cardInfos?: boolean;
  cardSocial?: boolean;
};

const filled = css`
  width: 100%;
  height: 100%;
`;

const cardInfos = css`
  ${filled}
  grid-template-rows: 1fr 1fr;
  grid-template-areas: ". ." "like count";
  place-items: center;
`;

const cardSocial = css`
  ${border1PxSolid_wo_top}
  font-size: 14px;
  grid-template-columns: 1fr 1fr 1fr 3fr 3px;
  align-items: center;
`;

export const Social = styled.div<SocialStyled>`
  display: grid;
  width: 50%;
  ${props => props.cardInfos && cardInfos}
  ${props => props.cardSocial && cardSocial}
`;
