import React from "react";
import styled from "styled-components";
import {
  Palette,
  RGB,
  CYM,
  RYB,
} from "../../Colors/classes/Palette";

const palette1 = new Palette(315, "ryb");
const palette2 = new Palette(350, "ryb");
const palette3 = new Palette(350, "rgb");
const palette4 = new Palette(350, "cym");
let rgb1 = new RGB(1);
let cym1 = new CYM(1);
let ryb1 = new RYB(-4);
ryb1.setBrightness(60);

let rgb = rgb1;
let cym = cym1;
let ryb = ryb1;
const palette = palette1;
palette.setSaturation(100).setBrightness(40);

const Div = styled.div`
  #primary {
    background-color: ${palette.primary1.setSaturation(100)
      .value};
  }
  #primary2 {
    background-color: ${palette.primary2.value};
  }
  #primary3 {
    background-color: ${palette.primary3.value};
  }
  #secondary1 {
    background-color: ${palette.secondary1.value};
  }
  #secondary2 {
    background-color: ${palette.complementary.value};
  }
  #secondary3 {
    background-color: ${palette.secondary3.value};
  }
  #tertiary1 {
    background-color: ${palette.tertiary1.value};
  }
  #tertiary2 {
    background-color: ${palette.tertiary2.value};
  }
  #tertiary3 {
    background-color: ${palette.tertiary3.value};
  }
  #tertiary4 {
    background-color: ${palette.tertiary4.value};
  }
  #tertiary5 {
    background-color: ${palette.tertiary5.value};
  }
  #tertiary6 {
    background-color: ${palette.tertiary6.value};
  }
  width: 35rem;
`;

const DivRgb = styled.div`
  #primary {
    background-color: ${rgb.red.value};
  }
  #primary2 {
    background-color: ${rgb.green.value};
  }
  #primary3 {
    background-color: ${rgb.blue.value};
  }
  #secondary1 {
    background-color: ${rgb.yellow.value};
  }
  #secondary2 {
    background-color: ${rgb.cyan.value};
  }
  #secondary3 {
    background-color: ${rgb.magenta.value};
  }
  #tertiary1 {
    background-color: ${rgb.red_yellow.value};
  }
  #tertiary2 {
    background-color: ${rgb.green_yellow.value};
  }
  #tertiary3 {
    background-color: ${rgb.green_cyan.value};
  }
  #tertiary4 {
    background-color: ${rgb.blue_cyan.value};
  }
  #tertiary5 {
    background-color: ${rgb.blue_magenta.value};
  }
  #tertiary6 {
    background-color: ${rgb.red_magenta.value};
  }
  width: 35rem;
`;

const DivCym = styled.div`
  #primary {
    background-color: ${cym.yellow.value};
  }
  #primary2 {
    background-color: ${cym.cyan.value};
  }
  #primary3 {
    background-color: ${cym.magenta.value};
  }
  #secondary1 {
    background-color: ${cym.green.value};
  }
  #secondary2 {
    background-color: ${cym.blue.value};
  }
  #secondary3 {
    background-color: ${cym.red.value};
  }
  #tertiary1 {
    background-color: ${cym.yellow_red.value};
  }
  #tertiary2 {
    background-color: ${cym.yellow_green.value};
  }
  #tertiary3 {
    background-color: ${cym.cyan_green.value};
  }
  #tertiary4 {
    background-color: ${cym.cyan_blue.value};
  }
  #tertiary5 {
    background-color: ${cym.magenta_blue.value};
  }
  #tertiary6 {
    background-color: ${cym.magenta_red.value};
  }
  width: 35rem;
`;

const DivRyb = styled.div`
  #primary {
    background-color: ${ryb.red.value};
  }
  #primary2 {
    background-color: ${ryb.yellow.value};
  }
  #primary3 {
    background-color: ${ryb.blue.value};
  }
  #secondary1 {
    background-color: ${ryb.orange.value};
  }
  #secondary2 {
    background-color: ${ryb.green.value};
  }
  #secondary3 {
    background-color: ${ryb.purple.value};
  }
  #tertiary1 {
    background-color: ${ryb.red_orange.value};
  }
  #tertiary2 {
    background-color: ${ryb.yellow_orange.value};
  }
  #tertiary3 {
    background-color: ${ryb.yellow_green.value};
  }
  #tertiary4 {
    background-color: ${ryb.blue_green.value};
  }
  #tertiary5 {
    background-color: ${ryb.blue_purple.value};
  }
  #tertiary6 {
    background-color: ${ryb.red_purple.value};
  }
  width: 35rem;
`;
let a = 4;
export default function index() {
  let Element;
  if (a === 1) Element = Div;
  if (a === 2) Element = DivRgb;
  if (a === 3) Element = DivCym;
  if (a === 4) Element = DivRyb;
  return (
    <Element>
      <p id="primary">primary</p>
      <p id="tertiary1">tertiary1</p>
      <p id="secondary1">secondary1</p>
      <p id="tertiary2">tertiary2</p>
      <p id="primary2">primary2</p>
      <p id="tertiary3">tertiary3</p>
      <p id="secondary2">secondary2</p>
      <p id="tertiary4">tertiary4</p>
      <p id="primary3">primary3</p>
      <p id="tertiary5">tertiary5</p>
      <p id="secondary3">secondary3</p>
      <p id="tertiary6">tertiary6</p>
    </Element>
  );
}
