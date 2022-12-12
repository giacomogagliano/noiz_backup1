import Link from "next/link";
import React, { useState } from "react";
import Layout from "../../components/layout";
import { HTML } from "@zionstate/ui";
import { Data } from "../nft/[id]";
import { BasePropsFromApp } from "../_app";

const TextArea = HTML.React.components.Pages.sections.TextArea;

export type MintProps = Data<{}> & BasePropsFromApp;

export default function Mint(props: MintProps) {
  const [balance, setBalance] = useState([0, "0"]);
  const evm = props.layout.metamask.evm;
  if (evm) {
    const ERC1155IndividualURI = evm.contractFactories.ERC1155IndividualURI;
    const underlord_test = ERC1155IndividualURI.attach(
      "0x7c544aC11d219d10Bcd3ef2A048f4a72588a2d59"
    );
    underlord_test.functions
      .balanceOf(evm.signer.getAddress(), 1)
      .then((res) => setBalance([1, res.toString()]));
  }

  return (
    <Layout {...props.layout}>
      <h1>Mint</h1>
      <TextArea>
        <p>Token Supply:</p> <>I'll tell you the supply soon</>
      </TextArea>
      <br />
      <TextArea>
        <p>Your balance of ID 1:</p> <p>{balance[1]}</p>
        <p>Your balance of ID :</p> <p>{balance[1]}</p>
      </TextArea>
      <br />
      <Link href="/success">Confirm</Link>
      <br />
      <Link href="/failure">Fail</Link>
    </Layout>
  );
}
