import styled from "styled-components";
import { MouseEventHandler } from "react";
import { NoizProps } from "../../lib/types";
import { Position, Sizes } from "../../lib/global";
import { checkCss } from "../../lib/util";

export type ButtonStyle = NoizProps<
  {
    primary?: boolean;
    secondary?: boolean;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    size?: Sizes;
    position?: Position;
    zIndex?: string;
    gridArea?: string;
    child?: { justifySelf?: string };
  },
  true
>;

interface IButton extends ButtonStyle {}

export const Button = styled.button<IButton>`
  line-height: 1.2;
  font-size: 70%;
  place-self: center;
  border: 0;
  border-radius: 10px;
  text-align: center;
  overflow: hidden;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: grid;
  ${props => checkCss("gridArea", props)}
  ${props => checkCss("zIndex", props)}
  border: 1px solid ${props => {
    return props.theme.primary.borderColor;
  }};
  position: ${props =>
    props.position ? "fixed" : "static"};
  bottom: ${props => {
    if (!props.position) return;
    return props.position.bottom
      ? props.position.bottom
      : "10%";
  }};
  right: ${props => {
    if (!props.position) return;
    return props.position.right
      ? props.position.right
      : "7%";
  }};
  &:first-child {
    display: grid;
    justify-content: center;
    justify-items: center;
    justify-self: ${props => {
      if (!props.child || !props.child.justifySelf)
        return "center";
      return props.child.justifySelf;
    }};
  }
  &:hover {
    cursor: pointer;
  }
  text {
    margin: 0;
    place-self: center;
    font-size: x-small;
  }
`;
