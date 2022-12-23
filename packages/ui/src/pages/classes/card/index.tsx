import React from "react";
import styled from "styled-components";
import { Card } from "../../../HTML/React/classes";

const AreaCard = styled.div`
  display: grid;
  height: 100%;
  width: 57cqh;
`;

export default function index() {
  return (
    <AreaCard>
      <Card layout="main"></Card>
    </AreaCard>
  );
}
