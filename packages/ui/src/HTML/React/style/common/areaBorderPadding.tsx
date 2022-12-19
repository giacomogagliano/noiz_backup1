import { css } from "styled-components";

export const areaBordePadding = css`
  padding: 2rem;
  border-radius: 1rem;
  background-color: ${props => props.theme.palette.blue};
  > *:not(:last-child) {
    margin-bottom: 0.2rem;
  }
`;
