import styled from "styled-components";

export const Path = styled.path<{
  options?: { fill?: boolean; stroke?: boolean };
}>`
  fill: ${props =>
    props.options?.fill
      ? props.theme.primary.borderColor
      : ""};
  stroke: ${props =>
    props.options?.stroke
      ? props.theme.primary.borderColor
      : ""};
`;
