import styled from "styled-components";

export type ImageCss = utility.ZionCss<
  undefined,
  true,
  "display" | "maxWidth"
>;

export const Img = styled.img<ImageCss>`
  max-width: ${props =>
    props.maxWidth ? props.maxWidth : "100%"};
  display: ${props =>
    props.display ? props.display : "block"};
  height: ${props =>
    props.height ? props.height : "auto"};
  ${props => props.width && `width: ${props.width};`};
`;
