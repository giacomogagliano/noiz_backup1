import React from "react";
import styled from "styled-components";
import { Palette_v2 } from "../../Colors/classes/Palette";

const palette = new Palette_v2(315, "ryb");
palette.setSaturation(100).setBrightness(50);

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
  width: 35rem;
`;

export default function index() {
  return (
    <Div>
      <p id="primary">primary</p>
      <p id="secondary1">secondary1</p>
      <p id="primary2">primary2</p>
      <p id="secondary2">secondary2</p>
      <p id="primary3">primary3</p>
      <p id="secondary3">secondary3</p>
    </Div>
  );
}
