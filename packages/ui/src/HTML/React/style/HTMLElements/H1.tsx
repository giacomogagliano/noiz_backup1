import styled, {
  css,
  DefaultTheme,
} from "styled-components";

export interface lineTrough {
  lineTrough?: true;
  underline?: false;
}
export interface underline {
  lineTrough?: false;
  underline?: true;
}

export type decoration = lineTrough | underline;

export interface IH1Common {
  margin?: string;
  italic?: boolean;
  dimmed?: boolean;
}

export type IH1 = IH1Common & decoration;

export const margin0 = css`
  margin: 0;
`;

export const italic = css`
  font-style: italic;
`;
export const lineTrough = css`
  text-decoration: line-through;
`;
export const underline = css`
  text-decoration: underline;
`;

export const margin = (props: IH1) => {
  return css`
    margin: ${props.margin};
  `;
};

export const dimmed = (
  props: IH1 & { theme: DefaultTheme }
) => {
  if (!props.dimmed)
    throw new Error("prop dimmed not present");
  return css`
    color: ${props.theme.palette.grey};
  `;
};

export const H1 = styled.h1<IH1>`
  ${props => (props.margin ? margin(props) : margin0)}
  ${props => (props.dimmed ? dimmed(props) : null)}
  ${props => (props.italic ? italic : null)}
  ${props => (props.lineTrough ? lineTrough : null)}
  ${props => (props.underline ? underline : null)}
`;

/**Original File 
 * 
 * export type H1Style = StyledDefault<utility.CssStyled>;



export const H1 = styled.h1<H1Style>`
  ${props => new Css("margin", margin, props).value};
`;
 */
