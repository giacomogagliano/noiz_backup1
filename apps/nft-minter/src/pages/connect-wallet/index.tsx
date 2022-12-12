import Link from "next/link";
import React from "react";
import Layout from "../../components/layout";
import { BasePropsFromApp } from "../_app";

export default function ConnectWallet(props: BasePropsFromApp) {
  return (
    <Layout {...props.layout}>
      <h1>Wallet Connection</h1>
      <p>please confirm the connection with your wallet</p>
      <Link href="/collection">Collection</Link>
    </Layout>
  );
}
