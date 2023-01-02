import React from "react";
import styled from "styled-components";
import { H3 } from "../../../../HTML";

const StyledArea = styled.div`
  display: inline;
  padding: 2rem;
  h3 {
    display: inline;
    margin-left: 0.2rem;
  }
`;

export default function index() {
  return (
    <StyledArea>
      <H3 italic>Mi chiamo italic H3.</H3>
      <H3 dimmed>Sono un dimmed H3.</H3>
      <H3>Un H3 di default sono normale.</H3>
      <H3 underline>Un H3 di underline.</H3>
      <H3 lineTrough>Un H3 sbarrato.</H3>
    </StyledArea>
  );
}
