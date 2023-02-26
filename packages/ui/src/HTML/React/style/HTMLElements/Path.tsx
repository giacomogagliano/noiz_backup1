import styled from "styled-components";

export interface IPath {
  options?: { fill?: boolean; stroke?: boolean };
}

export interface PathProps {
  options?: { fill?: boolean; stroke?: boolean };
}

export const Path = styled.path<PathProps>`
  fill: ${props =>
    props.options?.fill
      ? props.theme.primary.borderColor
      : ""};
  stroke: ${props =>
    props.options?.stroke
      ? props.theme.primary.borderColor
      : ""};
`;
