import { Dispatch, SetStateAction } from "react";

export interface ListAccountsCallbacksFactory {
  (setIsConnected: Dispatch<SetStateAction<boolean>>): (
    accounts: string[]
  ) => void;
}

export const listAccountsCallbacksFactory_v1: ListAccountsCallbacksFactory =
  function (
    setIsConnected: Dispatch<SetStateAction<boolean>>
  ) {
    return function (accounts) {
      if (!accounts.length) setIsConnected(false);
      if (accounts.length) setIsConnected(true);
    };
  };
