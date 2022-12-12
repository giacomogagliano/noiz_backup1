import { Dispatch, SetStateAction } from "react";
import { getSignerAddress } from "../getSignerAddress";

export interface HandleAccountsChangedCallbackFactory {
  (
    setIsConnected: Dispatch<SetStateAction<boolean>>,
    setButtonMess: Dispatch<SetStateAction<string>>,
    provider: any
  ): (accounts: any[]) => void;
}

export const handleAccountsChangedCallbackFactory_v1: HandleAccountsChangedCallbackFactory =
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
