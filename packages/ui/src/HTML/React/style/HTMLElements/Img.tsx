import styled from "styled-components";

export interface IImg {
  maxWidth?: string;
  display?: string;
}

export const Img = styled.img<IImg>`
  max-width: ${props =>
    props.maxWidth ? props.maxWidth : "100%"};
  display: ${props =>
    props.display ? props.display : "block"};
  height: ${props =>
    props.height ? props.height : "auto"};
  ${props => props.width && `width: ${props.width};`};
`;
