import styled from "styled-components";

interface ICircle {}

export const Circle = styled.circle<ICircle>`
  stroke: ${props => props.theme.primary.borderColor};
`;
