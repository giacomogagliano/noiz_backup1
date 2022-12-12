import { ethers } from "ethers";

export type requestAccountsType = () => Promise<boolean>;

export const requestAccounts: requestAccountsType = async function () {
  if (!window.ethereum) return false;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  try {
    await provider.send("eth_requestAccounts", []);
  } catch (error) {
    console.log("There was an error requesting the accounts");
  }
  return true;
};
