"use client";

import styled from "styled-components";

export const GrandP = styled.div`
  //
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: inline-block;
    position: relative;
    width: 100%;
  }
  #grandparent-selector2:checked ~ .grandparent {
    background: #1d2de8;
  }
  #grandparent-selector:checked ~ .grandparent {
    background: #1d2de8;
  }
  #parent-selector2:checked ~ .parent {
    background: #1d2de8;
  }
  #parent-selector:checked ~ .parent {
    background: #1d2de8;
  }
  /* input[type="checkbox"] {
    display: none;
  } */
  label {
    background: #8b93f1;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
  label:hover {
    background: black;
    color: white;
  }
  .grandparent {
    text-align: center;
  }
  .parent {
    width: 200px;
    margin: 30px;
    padding: 30px;
  }
  .grandparent,
  .parent {
    background: #c7c8dc;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
`;
