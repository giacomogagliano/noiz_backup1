import { Signer } from "ethers";
import { Dispatch, SetStateAction } from "react";

export interface getSignerAddress_v1 {
  (
    signer: Signer,
    callbacks: ((...args: any[]) => void)[],
    setIsConnected?: Dispatch<SetStateAction<boolean>>
  ): Promise<string>;
}

/**
 * Sets is connected to true and calls each callback with
 * the result of the query, hence the signer address.
 * @param signer
 * @param callbacks
 * @param setIsConnected
 * @returns
 */
export const getSignerAddress_v1: getSignerAddress_v1 =
  async function (signer, callbacks, setIsConnected?) {
    const result = await signer.getAddress();
    if (callbacks)
      callbacks.forEach(callback => callback(result));
    if (setIsConnected) setIsConnected(true);
    return result as string;
  };
