import styled, { css } from "styled-components";

type DivStyled = {
  empty?: boolean;
};

const emptyDiv = css<DivStyled>``;

export const Div = styled.div<DivStyled>`
  ${props => props.empty && emptyDiv}
`;
