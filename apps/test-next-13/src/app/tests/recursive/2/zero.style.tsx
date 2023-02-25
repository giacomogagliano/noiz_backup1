"use client";

import styled from "styled-components";

export const Zero = styled.div`
  display: flex;
  width: max-content;
  background-color: antiquewhite;
  #node-tainer {
    display: flex;
    width: max-content;
    background-color: azure;
  }
  ul {
    display: flex;
    width: max-content;
    background-color: aquamarine;
  }
  #zero:checked ~ #ground {
    background-color: red;
    display: block;
  }
  #zero {
  }
  #ground {
    display: none;
    margin: 0;
  }
`;
