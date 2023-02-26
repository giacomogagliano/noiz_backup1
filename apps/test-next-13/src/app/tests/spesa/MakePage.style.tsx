"use client";
import styled from "styled-components";

export const ProductsArea = styled.div`
  padding: 1rem;
  border: 1px solid black;
  font-size: small;
  * {
    margin: 0;
  }
  > div {
    display: grid;
    grid-template-columns: repeat(2, 10rem);
  }
  #heading {
    border-bottom: 0.03rem solid black;
  }
`;
