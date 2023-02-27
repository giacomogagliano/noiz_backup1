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
  const JUMP_TO_COMMUNITY = "jump_community";
  const JUMP_TO_SINGUP = "jump_singup";
  const JUMP_TO_PREVIEW = "jump_preview";
  const JUMP_TO_DASHBOARD = "jump_dashboard";
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
        <Preview id={JUMP_TO_PREVIEW}>PREVIEW</Preview>
        <RollingCards>ROLLING CARDS</RollingCards>
        <ParallaxCards>PARALLAX CARDS</ParallaxCards>
        <GettingStarted> GETTING STARTED</GettingStarted>
        <DashboardPreview id={JUMP_TO_DASHBOARD}>
          DASHBOARD PREVIEW
        </DashboardPreview>
        <SocialFeedback>SOCIAL FEEDBACK DARK BACKGROUND</SocialFeedback>
        <JoinCommuny id={JUMP_TO_COMMUNITY}>JOIN COMMUNITY</JoinCommuny>
        <SocialFeedback2>SOCIAL FEEDBACK LIGHT BACKGROUND</SocialFeedback2>
        <SingUp id={JUMP_TO_SINGUP}>SING UP</SingUp>
        <SocialLinks>SOCIAL LINKS </SocialLinks>
        <FooterLinks>FOTTER LINKS</FooterLinks>
      </div>
    </FullPageComponent>
  );
};
