import styled from "styled-components";

type IconStyled = {
  like?: boolean;
};

const likeIcon = styled.div`
  grid-area: like;
  place-items: end;
`;

export const Icon = styled.div<IconStyled>`
  width: 100%;
  display: grid;
  ${props => props.like && likeIcon}
`;
