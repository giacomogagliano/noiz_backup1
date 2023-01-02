import styled from "styled-components";
import {
  decoration,
  dimmed,
  italic,
  lineTrough,
  margin,
  margin0,
  underline,
} from "./H1";

export interface IH3Common {
  margin?: string;
  italic?: boolean;
  dimmed?: boolean;
}

export type IH3 = IH3Common & decoration;

export const H3 = styled.h3<IH3>`
  ${props => (props.margin ? margin(props) : margin0)}
  ${props => (props.dimmed ? dimmed(props) : null)}
  ${props => (props.italic ? italic : null)}
  ${props => (props.lineTrough ? lineTrough : null)}
  ${props => (props.underline ? underline : null)}
`;
