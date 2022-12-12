export { useEthereum_v2 as v2 } from "./useEthereum_v2";
import {
  useEthereum_v1 as v1,
  type UseEthereum_v1 as v1Props,
} from "./useEthereum_v1";
//// detect
export * from "./detect";

//// getSignerAddress
export * from "./getSignerAddress";

//// handleAccountsChangedCallbackFactory
export * from "./handleAccountsChangedCallbackFactory";

//// handleAccountsChangedFactory
export * from "./handleAccountsChangedFactory";

//// handleNetworkChange
export * from "./handleNetworkChange";

//// listAccounts
export * from "./listAccounts";

//// listAccountsCallbacksFactory
export * from "./listAccountsCallbacksFactory";

//// requestAccounts
export * from "./requestAccounts";

export const useEthereum_v1 = v1;
export type useEthereum_v1Props = v1Props;
