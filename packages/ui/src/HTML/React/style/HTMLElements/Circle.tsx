import styled from "styled-components";

export interface ICircle {}

export const Circle = styled.circle<ICircle>`
  stroke: ${props => props.theme.primary.borderColor};
`;
