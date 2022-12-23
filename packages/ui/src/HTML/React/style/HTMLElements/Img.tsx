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

/** 
 * #TODO NON SONO SICURA DI AVER CREATO LA GIUSTA INTERFACCIA
 * questi sono i type che erano nel file di origine
export type ImageCss = utility.ZionCss<
  undefined,
  true,
  "display" | "maxWidth"
>; */
