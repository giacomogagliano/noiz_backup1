import styled, {
  css,
  DefaultTheme,
} from "styled-components";

export interface light {
  light?: true;
  lighter?: false;
  bold?: false;
  bolder?: false;
}

export interface lighter {
  lighter?: true;
  light?: false;
  bold?: false;
  bolder?: false;
}

export interface bold {
  bold?: true;
  bolder?: false;
  lighter?: false;
  light?: false;
}

export interface bolder {
  bolder?: true;
  bold?: false;
  lighter?: false;
  light?: false;
}

export interface IPCommon {
  dimmed?: boolean;
  italic?: boolean;
}

type weights = light | lighter | bold | bolder;

type IP = IPCommon & weights;

const italic = css`
  font-style: italic;
`;

const bold = css`
  font-weight: bold;
`;

const bolder = css`
  font-weight: bolder;
`;

const light = css`
  font-weight: 300;
`;

const lighter = css`
  font-weight: 300;
`;

const dimmed = (props: IP & { theme: DefaultTheme }) => {
  if (!props.dimmed)
    throw new Error("prop dimmed not present");
  return css`
    color: ${props.theme.palette.grey};
  `;
};

export const P = styled.p<IP & { theme: DefaultTheme }>`
  ${props => (props.light ? light : null)}
  ${props => (props.lighter ? lighter : null)}
  ${props => (props.bold ? bold : null)}
  ${props => (props.bolder ? bolder : null)}
  ${props => (props.dimmed ? dimmed(props) : null)}
  ${props => (props.italic ? italic : null)}
`;
