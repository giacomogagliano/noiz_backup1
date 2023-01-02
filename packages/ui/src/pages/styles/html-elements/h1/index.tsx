import React from "react";
import styled from "styled-components";
import { H1 } from "../../../../HTML";

const StyledArea = styled.div`
  display: inline;
  padding: 2rem;
  h1 {
    display: inline;
    margin-left: 0.2rem;
  }
`;

export default function index() {
  return (
    <StyledArea>
      <H1 italic>Mi chiamo italic H1.</H1>
      <H1 dimmed>Sono un dimmed h1.</H1>
      <H1>Un h1 di default sono normale.</H1>
      <H1 underline>Un h1 di underline.</H1>
      <H1 lineTrough>Un h1 sbarrato.</H1>
    </StyledArea>
  );
}
