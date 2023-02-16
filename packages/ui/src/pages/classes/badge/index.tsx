import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../../../HTML/React/classes";

const width = 20;
const height = 6;
const ratio = width / height;
const smallSize = calculateSize(ratio, 3);
const midSize = calculateSize(ratio, 4);
const bigSize = calculateSize(ratio, 5);

function calculateSize(ratio: number, height: number) {
  const width = height * ratio;
  return css`
    width: ${width.toString()}rem;
    height: ${height.toString()}rem;
  `;
}

const checkSize = (props?: any) => {
  if (!props) return;
  if (!props.size) return BadgeStyle;
  if (props.size === "small") return smallSize;
  if (props.size === "mid") return midSize;
  if (props.size === "big") return bigSize;
};

const BadgeStyle = styled.div`
  display: grid;
  ${props => checkSize(props)}
  grid-template-columns: 10% 23% 57% 10%;
  grid-template-rows: 10% 80% 10%;
  grid-template-areas:
    ". . . ."
    ". logo infos ."
    ". . . .";
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.borderColor};
  background-color: #e5e5e5;
  border-radius: 4px;
  place-items: center;
  #logo {
    grid-area: logo;
    width: 100%;
    height: 100%;
    #badge-circle {
      border-radius: 100%;

      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      border: 2px solid
        ${props => props.theme.palette.grey};
      background-color: darkgrey;
      box-sizing: border-box;
    }
  }
  #badge-infos {
    grid-area: infos;
    text-align: center;
    color: ${props => props.theme.palette.grey};
    h3 {
      margin: 0;
    }
  }
`;

export default function index() {
  return (
    <BadgeStyle>
      <div id="logo">
        <div id="badge-circle">
          <Icon logoZion></Icon>
        </div>
      </div>
      <div id="badge-infos">
        <p>ZION 2</p>
        <h3>SILVER</h3>
      </div>
    </BadgeStyle>
  );
}
