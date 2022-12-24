import styled from "styled-components";
import { ZionCss } from "../../lib/utility";

type ProfileIdStyle = {
  // FIX ts error
  // @ts-ignore
  css?: ZionCss<"color", true>;
};

export const ProfileId = styled.div<ProfileIdStyle>``;
