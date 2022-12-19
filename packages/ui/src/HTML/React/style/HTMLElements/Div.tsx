import styled, { css } from "styled-components";

const emptyDiv = css<IDiv>``;

interface IDiv {
  empty?: boolean;
}

export const Div = styled.div<IDiv>`
  ${props => props.empty && emptyDiv}
`;

/**
 * Original file
  import styled, { css } from "styled-components";

type DivStyled = {
  empty?: boolean;
};

const emptyDiv = css<DivStyled>``;

export const Div = styled.div<DivStyled>`
  ${props => props.empty && emptyDiv}
`;
 * 
 */
