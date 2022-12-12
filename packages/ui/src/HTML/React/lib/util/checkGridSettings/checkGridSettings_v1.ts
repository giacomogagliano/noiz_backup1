import {
  css,
  FlattenSimpleInterpolation,
} from "styled-components";

const ItemGridSetting = css`
  grid-template-rows: 1.5rem 90vw auto;
  grid-template-columns: 1fr 90vw 1fr;
  grid-template-areas: ". . ." ". image ." ". infos .";
`;

const ProfileGridSetting = css`
  grid-template-rows: 40vw 40vw auto auto auto auto;
  grid-template-columns: 1fr 40vw 1fr;
  grid-template-areas:
    ". . ."
    ". image ."
    ". infos ."
    ". social ."
    "navbar navbar navbar"
    ". content .";
`;

export const checkGridSettings_v1 = <
  T extends { profilePage: boolean }
>(
  props: T
): FlattenSimpleInterpolation => {
  let settings: FlattenSimpleInterpolation;
  if (props.profilePage) settings = ProfileGridSetting;
  else settings = ItemGridSetting;
  return settings;
};
