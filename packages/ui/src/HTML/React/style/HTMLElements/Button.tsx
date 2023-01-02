import styled, {
  css,
  DefaultTheme,
} from "styled-components";
import { MouseEventHandler } from "react";
import { NoizProps } from "../../lib/types";
import { Position, Sizes } from "../../lib/global";

const INTENT_ERROR =
  "Button component cannot be primary and secondary at the samte time";

interface Primary {
  primary?: true;
  secondary?: false;
}

interface Secondary {
  primary?: false;
  secondary?: true;
}

interface Props {
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: Sizes;
  position?: Position;
  zIndex?: string;
  gridArea?: string;
  child?: { justifySelf?: string };
}

export interface ButtonStylePrimary
  extends NoizProps<Primary & Props, true> {}

export interface ButtonStyleSecondary
  extends NoizProps<Secondary & Props, true> {}

export interface IButtonPrimary
  extends ButtonStylePrimary {}

export interface IButtonSecondary
  extends ButtonStyleSecondary {}

export type IButton = IButtonPrimary | IButtonSecondary;

const primary = (
  props: ButtonStylePrimary & { theme: DefaultTheme }
) => {
  let palette_ryb = props.theme.palette_ryb;
  let blue_green = palette_ryb.blue_green;
  let bg_color = blue_green.setBrightness(48).value;
  let border_color = blue_green.setBrightness(45).value;
  return css`
    background-color: ${bg_color};
    border: 0.1rem solid ${border_color};
    color: ${props.theme.palette.white};
  `;
};

const secondary = (
  props: ButtonStyleSecondary & { theme: DefaultTheme }
) => {
  let palette_ryb = props.theme.palette_ryb;
  let blue_green = palette_ryb.blue_green;
  let bg_color = props.theme.primary.backgroundColor;
  let color = blue_green.setBrightness(55).value;
  let border_color = blue_green.setBrightness(55).value;
  return css`
    background-color: ${bg_color};
    border: 0.1rem solid ${border_color};
    color: ${color};
  `;
};

const primary_hover = (
  props: ButtonStylePrimary & { theme: DefaultTheme }
) => {
  let palette_ryb = props.theme.palette_ryb;
  let blue_green = palette_ryb.blue_green;
  let bg_color = blue_green.setBrightness(52).value;
  let border_color = blue_green.setBrightness(65).value;
  return css`
    background-color: ${bg_color};
    border: 0.1rem solid ${border_color};
    color: ${props.theme.palette.white};
  `;
};
const secondary_hover = (
  props: ButtonStyleSecondary & { theme: DefaultTheme }
) => {
  let palette_ryb = props.theme.palette_ryb;
  let blue_green = palette_ryb.blue_green;
  let bg_color = props.theme.primary.backgroundColor;
  let border_color = blue_green.setBrightness(80).value;
  let color = blue_green.setBrightness(75).value;
  return css`
    background-color: ${bg_color};
    border: 0.1rem solid ${border_color};
    color: ${color};
  `;
};

export const Button = styled.button<IButton>`
  place-self: center;
  border: 0;
  border-radius: 1rem;
  padding: 0.23rem 1.5rem;
  margin: 0;
  cursor: pointer;

  ${props => {
    const isPrimary = props.primary;
    const isSecondary = props.secondary;
    if (isPrimary && isSecondary)
      throw new Error(INTENT_ERROR);

    if (isPrimary) {
      return primary(props);
    } else if (isSecondary) {
      return secondary(props);
    } else return null;
  }};

  &:hover {
    cursor: pointer;
    ${props => {
      const isPrimary = props.primary;
      const isSecondary = props.secondary;
      if (isPrimary) {
        return primary_hover(props);
      } else if (isSecondary) {
        return secondary_hover(props);
      } else return null;
    }};
  }

  &:active {
    position: relative;
    top: 1px;
    left: 1px;
  }
`;
