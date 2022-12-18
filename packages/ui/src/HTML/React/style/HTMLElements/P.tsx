import styled from "styled-components";

interface IP {
  bold?: boolean;
  dimmed?: boolean;
}

export const P = styled.p<IP>`
  ${props => (props.bold ? "font-weight: bold;" : "")}
  ${props => (props.dimmed ? "color: grey;" : "")}
`;
