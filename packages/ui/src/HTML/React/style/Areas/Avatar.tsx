import styled from "styled-components";

type AvatarStyle = {
  css?: utility.ZionCss<"display", true>;
};

export const Avatar = styled.div<AvatarStyle>`
  display: grid;
`;
