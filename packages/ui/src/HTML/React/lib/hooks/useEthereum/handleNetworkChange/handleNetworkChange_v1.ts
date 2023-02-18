interface Network {
  chainId: number;
  ensAddress: string;
  name: string;
}

export interface handleNetworkChange_v1 {
  (newNetwork: Network, oldNetwork: Network): void;
}

export function handleNetworkChange_v1(
  newNetwork: Network,
  oldNetwork: Network
) {
  console.log(newNetwork);

  if (oldNetwork) {
    console.log(
      "switched from: " +
        oldNetwork.name +
        " to " +
        newNetwork.name
    );
  } else {
    console.log(
      "this function shall implement interactivity when networs are switched. At the moment you are connected on:",
      newNetwork.name
    );
  }
}
