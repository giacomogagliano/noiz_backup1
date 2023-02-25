export interface handleAccountsChangedFactory_v1 {
  (
    listAccounts: any,
    provider: any,
    handleAccountsChangedCallbacks: any
  ): () => any;
}

export const handleAccountsChangedFactory_v1: handleAccountsChangedFactory_v1 =
  function handleAccountsChangedFactory(
    listAccounts,
    provider,
    handleAccountsChangedCallbacks
  ) {
    return function () {
      listAccounts(provider, [
        handleAccountsChangedCallbacks,
      ]);
    };
  };
