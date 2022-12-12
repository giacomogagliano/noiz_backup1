import styled from "styled-components";
import { Button } from "../HTMLElements";

const ScrollToTopArea = styled(Button)`
  width: auto;
  height: auto;
  z-index: 2;
  background-color: transparent;
  position: ${props =>
    props.position ? "fixed" : "relative"};
  bottom: ${props =>
    props.position?.bottom
      ? props.position?.bottom
      : "10%"};
  right: ${props =>
    props.position?.right ? props.position?.right : "7%"};
  cursor: pointer;
  border: none;
  padding: 0;
  margin: 0;
  &:first-child {
    display: grid;
    justify-content: center;
    justify-items: center;
    justify-self: center;
    width: 100%;
    height: 100%;
  }
`;

export const ScrollToTopButton_v1 = styled(
  ScrollToTopArea
)``;
