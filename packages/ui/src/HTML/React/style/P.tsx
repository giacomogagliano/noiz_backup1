import styled from "styled-components";

export type PStyle = StyledDefault<
  {
    bold?: boolean;
    dimmed?: boolean;
  } & utility.CssStyled
>;

export const P = styled.p<PStyle>`
  ${props => (props.bold ? "font-weight: bold;" : "")}
  ${props => (props.dimmed ? "color: grey;" : "")}
`;
