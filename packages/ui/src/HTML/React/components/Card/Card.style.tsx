import styled, { css } from "styled-components";
import { roundDecimals } from "../../lib/util";
import { RemainingPercentage } from "../../lib/util/classes/RemainingPercentage";
import { DebugColor } from "../../lib/util/classes";

export interface CardProps {
  widthinblocks: number;
  totalHeightInBlocks: number;
  ratio: number;
  heightinblocks: number;
  heightinpercentage: number;
  heightInPercentage: number;
  percentage: RemainingPercentage;
  debug: boolean;
  CardHeadDebug: DebugColor;
  InfosDebug: DebugColor;
  titleDebug: DebugColor;
  floorPriceDebug: DebugColor;
  placeBidDebug: DebugColor;
  likesDebug: DebugColor;
  handleHeight(headHeight: number): void;
  clientHeight: number;
}
export const widthinblocks = 8;
export const totalHeightInBlocks = 14;
export const ratio = 4 / 5;
export const heightinblocks = widthinblocks / ratio;
export const debug = false;
export const heightinpercentage =
  heightinblocks / totalHeightInBlocks;
export const heightInPercentage = roundDecimals(
  heightinpercentage,
  1000
);
export const percentage = new RemainingPercentage(
  heightInPercentage
);
export const InfosDebug = new DebugColor(
  "hsl(105, 100%, 25%)",
  debug
);

export const CardHeadDebug = new DebugColor("red", debug);
export const titleDebug = new DebugColor("yellow", debug);
export const floorPriceDebug = new DebugColor(
  "#001eff",
  debug
);
export const placeBidDebug = new DebugColor(
  "#ff00e6",
  debug
);
export const likesDebug = new DebugColor("#0066ff", debug);

export const filled1 = css`
  height: 100%;
  width: 100%;
`;
export const grid = css`
  display: grid;
`;
export const styleHead = css<CardProps>`
  border-left: none;
  border-right: none;
  border-bottom: 1px solid
    ${props => props.theme.borderColor};
  border-top: none;
  display: grid;
  place-items: center;
  grid-template-columns:
    ${props => props.clientHeight.toString()}px
    1fr
    ${props => props.clientHeight.toString()}px;
`;
export const cardHeadCircle = css`
  border-radius: 100%;
  width: 60%;
  height: 60%;
  border: 0.05rem solid;
  background-color: #e5e5e5;
`;
export const cardBtnTransp = css`
  display: grid;
  background-color: transparent;
  border: none;
`;

export const styledInfosCard = css`
  display: grid;
  place-items: center;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid
    ${props => props.theme.borderColor};
  border-top: 1px solid ${props => props.theme.borderColor};
  grid-template-columns: 0.1fr 2fr 0.1fr;
  grid-template-rows: 0.2fr 3fr 0.2fr 1.5fr 0.2fr;
  grid-template-areas:
    ". . ."
    ". line1 ."
    ". . ."
    ". line2 ."
    ". . ."
    ". line3 ."
    ". . .";
`;

export const StInfCardLine1 = css`
  grid-template-columns: 0.02fr 1fr 0.02fr;
  grid-template-rows: 0.02fr 1fr 0.02fr;
  grid-template-areas:
    ". . ."
    ". title ."
    ". . .";
  grid-area: line1;
`;

export const cardlin1Title = css`
  grid-area: title;
  align-content: center;
  border: none;
`;

export const StInfCardLine2 = css`
  font-size: 80%;
  grid-template-columns: 0.06fr 1.8fr 0.06fr 1fr 0.06fr;
  grid-template-rows: 0.06fr 1fr 0.06fr;
  grid-template-areas:
    ". . . . ."
    ". floor . bid ."
    ". . . . .";
  grid-area: line2;
  border: none;
`;

export const floorPrice = css`
  grid-area: floor;
  ${floorPriceDebug.value};
  ${grid}
  align-content: center;
  border: none;
`;
export const placeBid = css`
  grid-area: bid;
  border: none;
  align-content: center;
`;
export const aline2card = css`
  place-self: end;
`;

export const stInfCardLine3 = css`
  font-size: 80%;
  grid-template-columns: 0.08fr 1fr 0.08fr 1fr 0.08fr;
  grid-template-rows: 0.4fr 1fr 0.4fr;
  grid-template-areas:
    ". . . . ."
    ". bid . likes ."
    ". . . . .";
  grid-area: line3;
`;

export const likes = css`
  align-content: center;
  grid-area: likes;
`;
export const content = css`
  display: inline-flex;
  place-content: end;
`;
export const contentap = css`
  margin-right: 0.3rem;
  height: auto;
`;

export const stylSocialdiv = css`
  overflow: auto;
`;
export const stylSocialSocial = css`
  display: grid;
  overflow: auto;
  grid-template-columns: 1fr 1fr 1fr 5fr 1fr;
  align-items: center;
  border: none;
`;
const stylSocialBtn = css`
  display: grid;
  width: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const stylSocialSvg = css`
  place-self: end;
  display: grid;
  place-items: center;
`;

export const StyledHead = styled.div<any>`
  ${CardHeadDebug.value};
  ${styleHead}
  #circle {
    ${cardHeadCircle}
  }
  button {
    ${cardBtnTransp}
  }
`;
export const StyledInfos = styled.div<any>`
  ${styledInfosCard}
  ${InfosDebug.value}
 #line1 {
    ${filled1}
    ${grid}
    ${StInfCardLine1}
      #title {
      ${cardlin1Title}
      ${titleDebug.value}
      ${grid}
    }
  }
  #line2 {
    ${filled1}
    ${grid}
    ${StInfCardLine2}
      #floor-price {
      ${floorPrice}
    }
    #place-bid {
      ${placeBid}
      ${placeBidDebug.value};
      ${grid}

      a {
        ${aline2card}
      }
    }
  }
  #line3 {
    ${filled1}
    ${grid}
    ${stInfCardLine3}
    #likes {
      ${grid}
      ${likes}
      ${likesDebug.value};
      #content {
        ${content}
        a {
          p {
            ${contentap}
          }
        }
      }
    }
  }
`;

export const StyledSocial = styled.div`
  div {
    ${stylSocialdiv}
  }
  #social {
    ${stylSocialSocial}

    button {
      ${stylSocialBtn}
      #svg {
        ${stylSocialSvg}
      }
    }
  }
`;
