// @ts-nocheck

export const get_variable_ = (
  signer: Signer
): _variable___factory =>
  new ethers.ContractFactory(
    contract.abi,
    contract.bytecode,
    signer
  ) as _variable___factory;
