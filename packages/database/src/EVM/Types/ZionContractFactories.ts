import { ethers, Signer } from "ethers";
import { Factories, types } from "../../Blockchain";
import {
  Membership__factory,
  ProvaMaster__factory,
  USDC__factory,
  ZERC1155TokenShop__factory,
  SimpleStorage__factory,
} from "../../Blockchain/src/types/contracts";

export type ERC1155IndividualURI_Factory =
  types.ZionContractsTypeScript.ERC1155IndividualURI__factory;

export type ERC1155IndividualURI =
  types.ZionContractsTypeScript.ERC1155IndividualURI;

export type ContractFactory = ethers.ContractFactory;

// TODO mettere questi codici nelle cartelle delle classi non nei tipi
export class ZionContractFactories {
  contractFactories: {
    ERC1155IndividualURI: ERC1155IndividualURI_Factory;
    ERC1155TokenShop: ZERC1155TokenShop__factory;
    Membership: Membership__factory;
    ProvaMaster: ProvaMaster__factory;
    USDC: USDC__factory;
    SimpleStorage: SimpleStorage__factory;
    [key: string]: any;
  };
  constructor(public signer?: Signer) {
    if (!signer) throw new Error("");
    const ERC1155IndividualURI =
      Factories.getERC1155IndividualURI(signer);
    const ERC1155TokenShop =
      Factories.getERC1155TokenShop(signer);
    const Membership = Factories.getMembership(signer);
    const ProvaMaster = Factories.getProvaMaster(signer);
    const USDC = Factories.getUSDC(signer);
    const SimpleStorage =
      Factories.getSimpleStorage(signer);
    this.contractFactories = {
      ERC1155IndividualURI,
      ERC1155TokenShop,
      Membership,
      ProvaMaster,
      USDC,
      SimpleStorage,
    };
  }
}
