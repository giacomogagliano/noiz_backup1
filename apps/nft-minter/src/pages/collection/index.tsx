import React, { CSSProperties as CSS } from "react";
import { Profile } from "../../components/Profile";
import Layout from "../../components/layout";
import { Data, NftData } from "../nft/[id]";
import { BasePropsFromApp } from "../_app";
import { HTML } from "@zionstate/ui";
import styled from "styled-components";

const getStatic = HTML.Next.staticProps.getStatic;

export type CollectionProps = Data<NftData> &
  BasePropsFromApp;

export const { getStaticProps: gsp } = getStatic<NftData>(
  "fetch",
  "http://localhost:3000/api/nfts",
  "data"
);

export const getStaticProps = gsp;

const HiddenProfile = styled(Profile)`
  display: ${props =>
    props.layout.loading ? "none" : "grid"};
`;

export default function Collection(
  props: CollectionProps
) {
  const v1 = (
    <Layout {...props.layout}>
      <Profile {...props}></Profile>
    </Layout>
  );

  const v2 = (
    <Layout {...props.layout}>
      {!props.layout.loading ? (
        <Profile {...props}></Profile>
      ) : (
        <></>
      )}
    </Layout>
  );

  const v3 = (
    <Layout {...props.layout}>
      <HiddenProfile {...props}></HiddenProfile>
    </Layout>
  );
  return <>{v1}</>;
}
