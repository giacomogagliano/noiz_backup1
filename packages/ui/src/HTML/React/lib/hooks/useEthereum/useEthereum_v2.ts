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

const step2 =
  (
    data: useEthereumData_v2,
    isMetamask: boolean,
    EVMweb_: typeof EVMweb,
    contract: EVMweb["contractFactories"][number],
    setEvm: Dispatch<SetStateAction<IevmUseState>>,
    setProvider: Dispatch<
      SetStateAction<ProviderUseState>
    >,
    setHandleClick: Dispatch<
      SetStateAction<
        (e: MouseEvent<HTMLButtonElement>) => void
      >
    >,
    setContract: Dispatch<SetStateAction<ContractUseState>>
  ) =>
  () => {
    if (!isMetamask) return;
    const evm = new EVMweb_({
      window: window as WindowEthRequired,
    });
    // @ts-expect-error
    const factory = evm.contractFactories[contract];

    const provider = evm.provider;
    provider.on("network", handleNetworkChange);
    setEvm(evm);
    setProvider(provider);
    setHandleClick(() => requestAccounts(provider));
    setContract(factory.attach(data.contractAddress));
  };

/**
 * trying to upgrade this file.
 * - make better interface (describing arguments)
 * - create HOC hooks to configure how hooks actually work
 */

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

export interface UseEthereum_v2 {
  (
    data: useEthereumData_v2,
    noMetamaskClick: (
      e: MouseEvent<HTMLButtonElement>
    ) => void
  ): {
    isMetamask: boolean;
    setIsMetamask: Dispatch<SetStateAction<boolean>>;
    contract: ethers.Contract | undefined;
    setContract: Dispatch<
      SetStateAction<ContractUseState>
    >;
    buttonMess: string;
    setButtonMess: Dispatch<SetStateAction<string>>;
    metamask: MetaMaskEthereumProvider | undefined;
    setMetamask: Dispatch<
      SetStateAction<MetamaskUseState>
    >;
    isConnected: boolean;
    setIsConnected: Dispatch<SetStateAction<boolean>>;
    evm: IEVMweb | undefined;
    setEvm: Dispatch<SetStateAction<IevmUseState>>;
    provider: ethers.providers.Web3Provider | undefined;
    setProvider: Dispatch<
      SetStateAction<ProviderUseState>
    >;
    signerAddress: string | undefined;
    handleClick: (
      e: MouseEvent<HTMLButtonElement>
    ) => void;
    setHandleClick: Dispatch<
      SetStateAction<
        (e: MouseEvent<HTMLButtonElement>) => void
      >
    >;
  };
}

export type useEthereumData_v2 = {
  contractAddress: string;
  connectMetamaskMessage: string;
  metamaskNotInstalled: string;
};

export const useEthereum_v2: UseEthereum_v2 = (
  data,
  noMetamaskClick = function () {
    console.log("clicked");
  }
) => {
  const [metamask, setMetamask] = //
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

  const step2Callback = step2(
    data,
    isMetamask,
    EVMweb,
    // @ts-expect-error
    "ERC1155IndividualURI",
    setEvm,
    setProvider,
    setHandleClick,
    setContract
  );

  useEffect(step2Callback, [isMetamask]);

  useEffect(() => {
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
