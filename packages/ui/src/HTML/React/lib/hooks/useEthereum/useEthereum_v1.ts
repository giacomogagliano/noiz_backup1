import { handleAccountsChangedCallbackFactory } from "../useEthereum/handleAccountsChangedCallbackFactory";
import { handleAccountsChangedFactory } from "../useEthereum/handleAccountsChangedFactory";
import { handleNetworkChange } from "../useEthereum/handleNetworkChange";
import { getSignerAddress } from "../useEthereum/getSignerAddress";
import { requestAccounts } from "../useEthereum/requestAccounts";
import { listAccountsCallbacksFactory } from "../useEthereum/";
import { listAccounts } from "../useEthereum/listAccounts";
import {
  useEffect,
  useState,
  MouseEvent,
  Dispatch,
  SetStateAction,
} from "react";
import { detect } from "../useEthereum/detect";
import {
  detectEthereumProvider,
  MetaMaskEthereumProvider,
  IEVMweb,
  EVMweb,
} from "@zionstate/database/EVM";
import { ethers } from "ethers";

export type IevmUseState = IEVMweb | undefined;
export type MetamaskUseState =
  | MetaMaskEthereumProvider
  | undefined;
export type ContractUseState = ethers.Contract | undefined;
export type ProviderUseState =
  | ethers.providers.Web3Provider
  | undefined;

export type WindowEthRequired = Required<
  Pick<typeof window, "ethereum">
> &
  Exclude<typeof window, "ethereum">;

export interface UseEthereum_v1 {
  isMetamask: boolean;
  setIsMetamask: Dispatch<SetStateAction<boolean>>;
  contract: ethers.Contract | undefined;
  setContract: Dispatch<SetStateAction<ContractUseState>>;
  buttonMess: string;
  setButtonMess: Dispatch<SetStateAction<string>>;
  metamask: MetaMaskEthereumProvider | undefined;
  setMetamask: Dispatch<SetStateAction<MetamaskUseState>>;
  isConnected: boolean;
  setIsConnected: Dispatch<SetStateAction<boolean>>;
  evm: IEVMweb | undefined;
  setEvm: Dispatch<SetStateAction<IevmUseState>>;
  provider: ethers.providers.Web3Provider | undefined;
  setProvider: Dispatch<SetStateAction<ProviderUseState>>;
  signerAddress: string | undefined;
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
  setHandleClick: Dispatch<
    SetStateAction<
      (e: MouseEvent<HTMLButtonElement>) => void
    >
  >;
}

export type useEthereumData_v1 = {
  contractAddress: string;
  connectMetamaskMessage: string;
  metamaskNotInstalled: string;
};

export const useEthereum_v1 = (
  data: useEthereumData_v1 = {
    connectMetamaskMessage: "Connect Metamask",
    metamaskNotInstalled: "no Metamask",
    contractAddress:
      "0x7c544aC11d219d10Bcd3ef2A048f4a72588a2d59",
  },
  noMetamaskClick: (
    e: MouseEvent<HTMLButtonElement>
  ) => void = function () {
    console.log("clicked");
  }
): UseEthereum_v1 => {
  const [metamask, setMetamask] =
    useState<MetamaskUseState>(undefined);
  const [contract, setContract] =
    useState<ContractUseState>(undefined);
  const [provider, setProvider] =
    useState<ProviderUseState>(undefined);
  const [evm, setEvm] = useState<IevmUseState>(undefined);
  const [isMetamask, setIsMetamask] =
    useState<boolean>(false);
  const [buttonMess, setButtonMess] =
    useState("loading...");
  const [signerAddress, setSignerAddress] = useState<
    string | undefined
  >(undefined);
  const [isConnected, setIsConnected] = useState(false);
  const [handleClick, setHandleClick] = useState(
    () => noMetamaskClick
  );

  const listAccountsCallbacks =
    listAccountsCallbacksFactory(setIsConnected);

  const handleAccountsChangedCallbacks =
    handleAccountsChangedCallbackFactory(
      setIsConnected,
      setButtonMess,
      provider
    );

  const handleAccountsChanged =
    handleAccountsChangedFactory(
      listAccounts,
      provider,
      handleAccountsChangedCallbacks
    );

  useEffect(() => {
    detect(window, detectEthereumProvider)
      .then(metamask => {
        setMetamask(metamask);
        setIsMetamask(true);
      })
      .catch(() =>
        setButtonMess(data.metamaskNotInstalled)
      );
  });

  useEffect(() => {
    if (!isMetamask) return;
    const evm = new EVMweb({
      window: window as WindowEthRequired,
    });
    const factory =
      evm.contractFactories.ERC1155IndividualURI;
    const provider = evm.provider;
    provider.on("network", handleNetworkChange);
    setEvm(evm);
    setProvider(provider);
    setHandleClick(() => requestAccounts(provider));
    setContract(factory.attach(data.contractAddress));
  }, [isMetamask]);

  useEffect(() => {
    if (!metamask || !provider) return;
    listAccounts(provider, [listAccountsCallbacks]);
    metamask.on("accountsChanged", handleAccountsChanged);
  }, [metamask, provider]);

  useEffect(() => {
    if (
      !isConnected &&
      metamask &&
      data.connectMetamaskMessage
    )
      setButtonMess(data.connectMetamaskMessage);
    if (isConnected && evm)
      getSignerAddress(evm.signer, [
        setButtonMess,
        setSignerAddress,
      ]);
  }, [isConnected, metamask]);

  return {
    isMetamask,
    setIsMetamask,
    contract,
    setContract,
    buttonMess,
    setButtonMess,
    metamask,
    setMetamask,
    isConnected,
    setIsConnected,
    evm,
    setEvm,
    provider,
    setProvider,
    signerAddress,
    handleClick,
    setHandleClick,
  };
};
