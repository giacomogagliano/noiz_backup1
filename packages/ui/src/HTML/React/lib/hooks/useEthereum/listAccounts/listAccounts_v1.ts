export interface listAccounts_v1 {
  (provide: any, callbacks: any[]): any;
}

export const listAccounts_v1: listAccounts_v1 =
  async function (
    provider,
    callbacks: ((...arg: any[]) => any)[]
  ) {
    const result = await provider.listAccounts();
    if (callbacks)
      callbacks.forEach(callback => callback(result));
    return result;
  };
