// import {} from "@zionstate/database";

export interface detect_v1 {
  (
    window: Window & {
      ethereum?: any;
    },
    detectEthereumProvider: () => Promise<any>
  ): Promise<any>;
}

export async function detect_v1(
  window: Window & { ethereum?: any },
  detectEthereumProvider: () => Promise<any>
) {
  if (window.ethereum) {
    const metamask = await detectEthereumProvider();
    return metamask;
  } else throw new Error("no metamask");
}
