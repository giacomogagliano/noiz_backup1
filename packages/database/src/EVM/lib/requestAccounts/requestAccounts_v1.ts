import { ethers } from "ethers";
import "../detectEthereumProvider/detectEthereumProvider_v1";

export type IrequestAccounts_v1 = () => Promise<boolean>;

export const requestAccounts_v1: IrequestAccounts_v1 =
  async function () {
    if (!window.ethereum) return false;
    const provider = new ethers.providers.Web3Provider(
      window.ethereum
    );
    try {
      await provider.send("eth_requestAccounts", []);
    } catch (error) {
      console.log(
        "There was an error requesting the accounts"
      );
    }
    return true;
  };
