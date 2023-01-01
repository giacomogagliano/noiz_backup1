import styled, { css } from "styled-components";
import { MouseEventHandler } from "react";
import { NoizProps } from "../../lib/types";
import { Position, Sizes } from "../../lib/global";

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

export interface IButton extends ButtonStyle {}

export const Button = styled.button<IButton>`
  font-size: 70%;
  place-self: center;
  border: 0;
  border-radius: 1rem;
  padding: 0.23rem 1.5rem;
  margin: 0;
  cursor: pointer;
  ${props => {
    const isPrimary = props.primary;
    if (isPrimary) {
      return css`
        background-color: ${props.theme.palette_ryb.blue_green.setBrightness(
          48
        ).value};
        border: 0.1rem solid
          ${props.theme.palette_ryb.blue_green.setColor(5)
            .value};
        color: ${props.theme.secondary.color};
      `;
    } else return null;
  }};

  &:hover {
    cursor: pointer;
    ${props => {
      const isPrimary = props.primary;
      if (isPrimary) {
        return css`
          background-color: ${props.theme.palette_ryb.blue_green.setBrightness(
            52
          ).value};
          border: 0.1rem solid
            ${props.theme.palette_ryb.blue_green.setBrightness(
              65
            ).value};
          color: ${props.theme.secondary.color};
        `;
      } else return null;
    }};
  }

  &:active {
    position: relative;
    top: 1px;
    left: 1px;
  }
`;
