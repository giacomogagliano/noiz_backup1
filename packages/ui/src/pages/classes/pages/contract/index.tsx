import { EVMweb } from "@zionstate/database/EVM";
import React from "react";
import { Contract } from "../../../../HTML/React";

export default function index({ evm }: { evm: EVMweb }) {
  return (
    <Contract
      contractAddr="0x121f1241f..14fa"
      supply={1000}
      owner="0x03fd0..3bd5"
      price={Math.round((35 / 50) * 100) / 100}
      currency="USDC"
      evm={evm}
    ></Contract>
  );
}
