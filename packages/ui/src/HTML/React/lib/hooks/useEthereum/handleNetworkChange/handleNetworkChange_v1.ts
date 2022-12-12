// TODO define arguments
export function handleNetworkChange_v1(
  newNetwork: any,
  oldNetwork: any
) {
  if (oldNetwork)
    console.log(
      "switched from: " +
        oldNetwork.name +
        " to " +
        newNetwork.name
    );
  else
    console.log(
      "this function shall implement interactivity when networs are switched. At the moment you are connected on:",
      newNetwork.name
    );
}
