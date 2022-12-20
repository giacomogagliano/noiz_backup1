import styled from "styled-components";
import { ZionCss } from "../../lib/utility";

type AvatarStyle = {
  css?: ZionCss<"display", true>;
};

export const Avatar = styled.div<AvatarStyle>`
  display: grid;
`;
