import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ItemsArea } from "../../../HTML/React/classes";

const date = new Date();
const secs = date.getSeconds();

const Div = styled.div.attrs<{ color_number: number }>(
  props => ({
    style: {
      backgroundColor: `hsl(${props.color_number},50%,50%)`,
    },
  })
)<{ color_number: number }>``;

export default function index() {
  const array10 = new Array(300).fill("");

  return (
    <ItemsArea
      avatarSize={0}
      height={0}
      layout="main"
      style="defaultStyle"
    >
      <>
        {array10.map((_, idx) => (
          <Div color_number={idx * 2} key={idx}></Div>
        ))}
      </>
    </ItemsArea>
  );
}
