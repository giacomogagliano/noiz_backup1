import { TransactionResponse } from "@ethersproject/abstract-provider";
import { BigNumber } from "ethers";
// FIXME #174 @giacomogagliano usata variabile per zittare ts, importarlo nel file
BigNumber;

export type retrieveDataReturn = {
  chainId: number;
  gasPrice: number | undefined;
  blockHash: string | undefined;
  blockNumber: number | undefined;
  from: string;
  hash: string;
  gasLimit: number;
};
export function retrieveTxDatas(
  transaction: TransactionResponse
): retrieveDataReturn {
  let {
    chainId,
    gasPrice: gp,
    blockHash,
    blockNumber,
    from,
    hash,
    gasLimit: gl,
  } = transaction;
  // if (!gp) gp=new BigNumber(0);
  // if (!blockHash) throw "error";
  // if (!blockNumber) throw "error";
  const gasPrice = gp?.toNumber();
  const gasLimit = gl.toNumber();
  return {
    chainId,
    gasPrice,
    blockHash,
    blockNumber,
    from,
    hash,
    gasLimit,
  };
}
