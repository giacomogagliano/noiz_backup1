"use client";
import styled, { css } from "styled-components";
import { Section } from "./StylesSheet";
import { Dark } from "./Why.style";

export const CardSection = styled.div``;
export const ParallaxIcons = styled.div``;
export const Preview = styled.div``;
export const RollingCards = styled.div``;
export const ParallaxCards = styled.div``;
export const GettingStarted = styled.div``;
export const DashboardPreview = styled.div``;
export const SocialFeedback = styled.div``;
export const JoinCommuny = styled.div``;
export const SocialFeedback2 = styled.div``;
export const SingUp = styled.div``;
export const SocialLinks = styled.div`
  /* ${Section}${Dark} */
`;
export const FooterLinks = styled.div``;

export const ContentWrapper = css`
  overflow: hidden;
  flex-wrap: wrap;
  > div {
    ${Section}
  }
  /* Seleziona tutti i div pari */
  > div:nth-of-type(even) {
    background-color: transparent;
  }
  /* Seleziona tutti i div dispari */
  > div:nth-of-type(odd) {
    ${Dark}
  }
`;
export const FullPageComponent = styled.div`
  #content-wrapper {
    ${ContentWrapper}
  }
`;
