import React, { useEffect } from "react";
import Layout from "../components/layout";
import { BasePropsFromApp } from "./_app";
import { HTML } from "@zionstate/ui";
import { fetchMd } from "../lib/fetchMd";
const getStatic = HTML.Next.staticProps.getStatic;

export type LandingProps = {
  slug: string;
  name: string;
  shortname: string;
  description: string[];
};

const data: LandingProps = {
  slug: "underlords",
  name: "The Underlords", // used for Token long name
  shortname: "Underlords", // used for sorter displays
  description: [
    "The Underlords are Resistance. They are fighting back to bring the power back in the Under Worlds.",
    "It is a project built by Nate, John and Giacomo with the support of the Avriality Team, the Zion Community and <invetors who wants to be added here need to buy at least 200 tokens>",
    `Long ago, the Intergalactic Empire (IGE) was erected to conquer or terraform all known galaxies in this universe. The IGE has been manipulating us using a technology that they control which allows them to freely access the multiverse and edit our universe to their liking.

    They have been our overlords, and we, to them, are nothing but livestock. Their reign has been unquestionable and their acts of violence gone unpunished — until now. The citizens of the IGE have suffered this oppression long enough!

    Freedom Fighters! If we don't take the multiverse back, our universe is lost! This is a call to action. Will you stand with us and resist the cruelties and war crimes of our oppressors?`,
  ],
};

// TODO make sure that the length of the array containing
// datas for the landing page is long1. We also should make
// sure that the datas received are in the right format. I
// think that in order to work this out correctly we need to
// build a mixin library with all methods require built in
// the mixin to create composable classes to manage datas
// correctly.
const { getStaticProps: gsp } = getStatic<LandingProps>(
  "RAM",

  // TODO make an overload that acceps a single object, not
  // in a list. This may happen when the loaded page doesn't
  // need to show a list of datas.
  { data: [data] },
  "data",
  [data]
);
export const getStaticProps = gsp;

interface Landing {
  (props: BasePropsFromApp & { data: LandingProps }): JSX.Element;
}

const Pis = (props: { children: string[] }): JSX.Element => {
  const { children } = props;
  return (
    <>
      {children.map((child) => (
        <p key={child}>{child}</p>
      ))}
    </>
  );
};

const Landing: Landing = function Landing({ data, layout }) {
  const { name, description } = data[0];

  return (
    <Layout landing {...layout}>
      <div className="landing-page">
        <h1 className="landing-page-title">{name}</h1>
        <Pis>{description}</Pis>
      </div>
    </Layout>
  );
};

export default Landing;
