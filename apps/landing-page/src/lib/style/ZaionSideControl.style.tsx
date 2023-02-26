"use client";
import styled from "styled-components";

export const ZionSideControlStyle = styled.div`
  //
  /* position: fixed; */
  container-type: inline-size;
  width: 40%;
  position: fixed;
  top: 0;
  input {
    display: none;
  }
  #side-bar-tainer {
    /* position: absolute; */
    position: relative;
    left: -100cqw;
    height: 100vh;
    /* width: max-content; */
    background-color: red;
  }
  #side-bar-selector:checked ~ #side-bar-tainer {
    background-color: yellow;
    left: 0;
  }
  label {
    position: absolute;
    right: -2rem;
    width: 2rem;
    height: 2rem;
    background-color: orange;
    border-radius: 5px;
  }
`;
export const ZionSideControlStyle2 = styled.div`
  p {
    margin: 0;
  }
  label {
    /* position: fixed; */
    /* top: 0; */
    /* left: -5rem; */
    background-color: red;
    height: 100vh;
    width: 5rem;
    margin: 0;
  }
  #outer {
    /* position: fixed; */
    /* top: 0; */
    /* left: -5rem; */
    background-color: red;
    height: 100vh;
    width: 5rem;
    margin: 0;
  }
  input {
    /* display: none; */
    /* position: absolute; */
    width: 1.5rem;
    /* top: 0; */
    /* right: -1.5rem; */
    margin: 0;
    &:hover {
      cursor: pointer;
    }
    &:checked + label {
      left: 0;
      transform: scale();
      background-color: yellow;
    }
  }
`;
