import React from "react";
import Layout from "../../components/layout";
import { BasePropsFromApp } from "../_app";

export default function Failure(props: BasePropsFromApp) {
  return (
    <Layout nft {...props.layout}>
      <h1>Failure</h1>
    </Layout>
  );
}
