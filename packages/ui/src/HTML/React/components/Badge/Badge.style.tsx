import styled, {
  css,
  DefaultTheme,
  FlattenSimpleInterpolation,
  StyledComponent,
} from "styled-components";
import { circleGridBorder } from "../../style/common/logo";

export interface BadgeStyle {
  size?: "small" | "mid" | "big";
}

const width = 20;
const height = 6;
const ratio = width / height;
const smallSize = calculateSize(ratio, 3);
const midSize = calculateSize(ratio, 4);
const bigSize = calculateSize(ratio, 5);

function calculateSize(ratio: number, height: number) {
  const width = height * ratio;
  return css`
    width: ${width.toString()}rem;
    height: ${height.toString()}rem;
  `;
}

const checkSize = (
  props?: BadgeStyle
):
  | FlattenSimpleInterpolation
  | undefined
  | StyledComponent<"div", DefaultTheme, {}, never> => {
  if (!props) return;
  if (!props.size) return BadgeStyle;
  if (props.size === "small") return smallSize;
  if (props.size === "mid") return midSize;
  if (props.size === "big") return bigSize;
};

export const BadgeStyle = styled.div<BadgeStyle>`
  display: grid;
  ${props => checkSize(props)}
  grid-template-columns: 10% 23% 57% 10%;
  grid-template-rows: 10% 80% 10%;
  grid-template-areas:
    ". . . ."
    ". logo infos ."
    ". . . .";
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.borderColor};
  background-color: #e5e5e5;
  border-radius: 4px;
  place-items: center;
  #logo {
    grid-area: logo;
    width: 100%;
    height: 100%;
    #badge-circle {
      ${circleGridBorder}
    }
  }
  #badge-infos {
    grid-area: infos;
    text-align: center;
    color: ${props => props.theme.palette.grey};
    h3 {
      margin: 0;
    }
  }
`;
