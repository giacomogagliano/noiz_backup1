import {
  css,
  FlattenSimpleInterpolation,
} from "styled-components";
import { Sizes } from "../../../../global";

const defaultSize = css`
  width: 100%;
  height: 100%;
`;

export interface checkSizeRatio_v1 {
  (props: {
    size?: Sizes;
    options?: { sizes?: {} };
  }): FlattenSimpleInterpolation;
}

export const checkSizeRatio_v1: checkSizeRatio_v1 =
  (props: {
    size?: Sizes;
    options?: { sizes?: {} };
  }): FlattenSimpleInterpolation => {
    let result: FlattenSimpleInterpolation;
    switch (props.size) {
      case "small":
        result = css`
          width: 50vw;
        `;
        break;
      case "mid":
        result = css`
          width: 60vw;
        `;
        break;
      case "big":
        result = css`
          width: 70vw;
        `;
        break;
      default:
        result = defaultSize;
        break;
    }
    return result;
  };
