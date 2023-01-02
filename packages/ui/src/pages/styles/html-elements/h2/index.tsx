import React from "react";
import styled from "styled-components";
import { H2 } from "../../../../HTML";

const StyledArea = styled.div`
  display: inline;
  padding: 2rem;
  h2 {
    display: inline;
    margin-left: 0.2rem;
  }
`;

export default function index() {
  return (
    <StyledArea>
      <H2 italic>Mi chiamo italic H2.</H2>
      <H2 dimmed>Sono un dimmed H2.</H2>
      <H2>Un H2 di default sono normale.</H2>
      <H2 underline>Un H2 di underline.</H2>
      <H2 lineTrough>Un H2 sbarrato.</H2>
    </StyledArea>
  );
}
