import { css } from "styled-components";

const defaultSize = css`
  width: 5.5vw;
  height: 5.5vw;
`;

export const checkSize_v1 = <
  T extends {
    size?: {
      auto?: boolean;
      width?: string;
      height?: string;
    };
  }
>(
  props: T
) => {
  if (props.size && props.size.auto) return css``;
  if (props.size)
    return css`
      width: ${props.size.width};
      height: ${props.size.height};
    `;
  else return defaultSize;
};
