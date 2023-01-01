import styled from "styled-components";

export interface IP {
  bold?: boolean;
  dimmed?: boolean;
}

export const P = styled.p<IP>`
  ${props => (props.bold ? "font-weight: bold;" : "")}
  ${props => (props.dimmed ? "color: grey;" : "")}
  margin: 0;
`;
