import styled from "styled-components";

interface IH1 {
  margin?: string;
}

export const H1 = styled.h1<IH1>`
  margin: ${props => (props.margin ? props.margin : "0")};
`;

/**Original File 
 * 
 * export type H1Style = StyledDefault<utility.CssStyled>;

const margin = css`
  margin: 0;
`;

export const H1 = styled.h1<H1Style>`
  ${props => new Css("margin", margin, props).value};
`;
 */
