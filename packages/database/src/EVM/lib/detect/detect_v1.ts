import { detectEthereumProvider } from "../detectEthereumProvider";
import { MetaMaskEthereumProvider } from "../detectEthereumProvider/detectEthereumProvider_v1";

export interface Idetect_v1 {
  (window: Window): MetaMaskEthereumProvider | null;
}

export async function detect_v1(window: Window) {
  if (window.ethereum) {
    const metamask = await detectEthereumProvider();
    return metamask;
  } else throw new Error("no metamask");
}
