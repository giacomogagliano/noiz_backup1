import styled from "styled-components";
import { MakeBooleansFromUnion } from "../../lib/global";
import { EnumToUnion } from "../../lib/utility";

export enum CardShapesEnum {
  landscape,
  portrait,
  square,
  slim,
  resource,
}
export type CardShapesTypes = EnumToUnion<
  typeof CardShapesEnum
>;

export type CardFormatsCssProp =
  MakeBooleansFromUnion<CardShapesTypes>;

type ShapeCss = {
  small?: boolean;
  mid?: boolean;
  big?: boolean;
  backgroundColor?: string;
} & CardFormatsCssProp;

export const Shape = styled.div<ShapeCss>`
  width: 100%;
`;

// export type ShapePropsOld = {
//   small: [width, height];
//   mid: [width, height];
// };

// export interface Shape {
//   (
//     props: ShapePropsOld & StyledDefault & CssStyled
//   ): StyledComponent<
//     "div",
//     any,
//     BasicShapeDivProps,
//     never
//   >;
// }
// /**
//  * This function creates the shapes for the cards which
//  * appear in the content area. Different shape will display
//  * different types of items.
//  * @param props
//  * @returns An area in in which cards can be composed.
//  */
// export const ShapeOld: Shape = function (props) {
//   const { small, mid } = props;
//   return styled.div<BasicShapeDivProps>`
//     grid-column: span
//       ${props => (props.small ? small[0] : mid[0])};
//     grid-row: span
//       ${props => (props.small ? small[1] : mid[1])};
//     background-color: ${props => props.backgroundColor};
//   `;
// };
