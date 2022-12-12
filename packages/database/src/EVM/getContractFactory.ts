import { ethers } from "ethers";

export interface getContractFactoryType {
  (
    abi: ethers.ContractInterface,
    bytecode: ethers.utils.BytesLike,
    signer?: ethers.Signer
  ): Promise<ethers.ContractFactory>;
}

export const getContractFactory: getContractFactoryType = async function (
  abi,
  bytecode,
  signer?
) {
  const ContractFactory = ethers.ContractFactory;
  let contractFactory: ethers.ContractFactory;
  if (signer) contractFactory = new ContractFactory(abi, bytecode, signer);
  contractFactory = new ContractFactory(abi, bytecode);
  return contractFactory;
};
