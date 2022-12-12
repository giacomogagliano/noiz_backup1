export function requestAccounts_v1(provider: any) {
  return async () => {
    await provider.send("eth_requestAccounts", []);
  };
}
