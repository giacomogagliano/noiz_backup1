import { Dispatch, SetStateAction } from "react";

export interface listAccountsCallbacksFactory_v1 {
  (setIsConnected: Dispatch<SetStateAction<boolean>>): (
    accounts: string[]
  ) => void;
}

export const listAccountsCallbacksFactory_v1: listAccountsCallbacksFactory_v1 =
  function (
    setIsConnected: Dispatch<SetStateAction<boolean>>
  ) {
    return function (accounts) {
      if (!accounts.length) setIsConnected(false);
      if (accounts.length) setIsConnected(true);
    };
  };
