import React, { Suspense } from "react";
import {
  CardSection,
  DashboardPreview,
  FooterLinks,
  FullPageComponent,
  GettingStarted,
  JoinCommuny,
  ParallaxCards,
  ParallaxIcons,
  Preview,
  RollingCards,
  SingUp,
  SocialFeedback,
  SocialFeedback2,
  SocialLinks,
} from "../lib/style/FullPage.style";
import { Why } from "./Why";
import { Section } from "./Section";

const Example = Section;
const Overview = Section;

export const FullPage = () => {
  const CONTENT_WRAPPER_ID = "content-wrapper";
  return (
    <FullPageComponent>
      <div id={CONTENT_WRAPPER_ID}>
        <Suspense fallback={<div>loading</div>}>
          <Why></Why>
        </Suspense>
        <Suspense fallback={<div>loading</div>}>
          <Section></Section>
        </Suspense>
        <Example></Example>
        <CardSection>CARD SECTION</CardSection>
        <Overview></Overview>
        <ParallaxIcons>PARALLAX ICONS</ParallaxIcons>
        <Preview>PREVIEW</Preview>
        <RollingCards>ROLLING CARDS</RollingCards>
        <ParallaxCards>PARALLAX CARDS</ParallaxCards>
        <GettingStarted> GETTING STARTED</GettingStarted>
        <DashboardPreview> DASHBOARD PREVIEW</DashboardPreview>
        <SocialFeedback>SOCIAL FEEDBACK DARK BACKGROUND</SocialFeedback>
        <JoinCommuny>JOIN COMMUNITY</JoinCommuny>
        <SocialFeedback2>SOCIAL FEEDBACK LIGHT BACKGROUND</SocialFeedback2>
        <SingUp>SING UP</SingUp>
        <SocialLinks>SOCIAL LINKS </SocialLinks>
        <FooterLinks>FOTTER LINKS</FooterLinks>
      </div>
    </FullPageComponent>
  );
};
