import React from "react";
import Layout from "../../components/layout";
import { BasePropsFromApp } from "../_app";

export default function Success(props: BasePropsFromApp) {
  // TODO add redirction timeout to collection page
  return (
    <Layout nft {...props.layout}>
      <h1>Success</h1>
    </Layout>
  );
}
