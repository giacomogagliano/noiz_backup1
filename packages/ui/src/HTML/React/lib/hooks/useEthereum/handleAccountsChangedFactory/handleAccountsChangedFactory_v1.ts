export interface HandleAccoutsChangedFactory {
  (
    listAccounts: any,
    provider: any,
    handleAccountsChangedCallbacks: any
  ): () => any;
}

export const handleAccountsChangedFactory_v1: HandleAccoutsChangedFactory =
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
