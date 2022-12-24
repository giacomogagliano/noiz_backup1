import styled from "styled-components";
import { ZionCss } from "../../lib/utility";

// FIX ts error
type AvatarStyle = {
  // @ts-ignore
  css?: ZionCss<"display", true>;
};

export const Avatar = styled.div<AvatarStyle>`
  display: grid;
`;
