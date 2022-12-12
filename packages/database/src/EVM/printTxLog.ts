import fs from "fs";

export type TxLog = {
  filepath: string;
  contract_address: string;
  chainId: number;
  gasPrice: number | undefined;
  blockHash: string | undefined;
  blockNumber: number | undefined;
  from: string;
  hash: string;
  gasLimit: number;
  txCost: number;
};

export type printTxLogType = (args: TxLog) => TxLog & { success: boolean };

export const printTxLog: printTxLogType = function (args) {
  const { filepath, ...rest } = args;
  const data = JSON.stringify(rest);
  fs.writeFileSync(filepath, data);
  let result: (TxLog & { success: boolean })[] = [];
  result.push({ ...args, success: false });
  let success = result[0]?.success as boolean;
  if (success) success = fs.existsSync(filepath);
  const TxLog = result[0];
  if (!TxLog) throw new Error("no TxLog");
  return TxLog;
};
