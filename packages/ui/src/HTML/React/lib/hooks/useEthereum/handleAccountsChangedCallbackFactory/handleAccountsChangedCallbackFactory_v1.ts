import { Dispatch, SetStateAction } from "react";
import { getSignerAddress } from "../getSignerAddress";

export interface handleAccountsChangedCallbackFactory_v1 {
  (
    setIsConnected: Dispatch<SetStateAction<boolean>>,
    setButtonMess: Dispatch<SetStateAction<string>>,
    provider: any
  ): (accounts: any[]) => void;
}

export const handleAccountsChangedCallbackFactory_v1: handleAccountsChangedCallbackFactory_v1 =
  function (setIsConnected, setButtonMess, provider) {
    return function (accounts) {
      if (!accounts.length) setIsConnected(false);
      if (accounts.length)
        getSignerAddress(
          provider.getSigner(),
          [setButtonMess],
          setIsConnected
        );
    };
  };
