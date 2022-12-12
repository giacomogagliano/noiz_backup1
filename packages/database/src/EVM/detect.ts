import { detectEthereumProvider } from "./detectEthereumProvider";

export async function detect(window: Window) {
  if (window.ethereum) {
    const metamask = await detectEthereumProvider();
    return metamask;
  } else throw new Error("no metamask");
}
