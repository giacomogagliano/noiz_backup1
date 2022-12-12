import styled from "styled-components";
import { Button } from "../Button";

export type SVGButtonProps = {
  stroke?: string;
  fill?: string;
};

const SVGButtonArea = styled(Button)`
  width: auto;
  height: auto;
  background-color: transparent;
  border: none;
  border-radius: 0;
`;

export const SVGButton = styled(SVGButtonArea)``;
