import { ethers, Signer } from "ethers";
import { Factories, types } from "../../Blockchain";
// import {
//   erc1155IndividualURIFactory,
//   erc1155TokenShopFactory,
//   membershipFactory,
//   provaMasterFactory,
//   simpleStorageFactory,
//   usdcFactory,
// } from "../../Blockchain/src/Factories";
import {
  Membership__factory,
  ProvaMaster__factory,
  USDC__factory,
  ZERC1155TokenShop__factory,
  SimpleStorage__factory,
} from "../../Blockchain/src/types/contracts";
// import { NoizContractFactory } from "../classes";

export type ERC1155IndividualURI_Factory =
  types.ZionContractsTypeScript.ERC1155IndividualURI__factory;

export type ERC1155IndividualURI =
  types.ZionContractsTypeScript.ERC1155IndividualURI;

export type ContractFactory = ethers.ContractFactory;

// TODO #38 mettere questi codici nelle cartelle delle classi non nei tipi
export class ZionContractFactories {
  // newContractFactories: {
  //   ERC1155IndividualURI: ERC1155IndividualURI_Factory;
  //   ERC1155TokenShop: ZERC1155TokenShop__factory;
  //   Membership: Membership__factory;
  //   ProvaMaster: ProvaMaster__factory;
  //   USDC: USDC__factory;
  //   SimpleStorage: SimpleStorage__factory;
  //   [key: string]: ContractFactory;
  // };

  // newNoizContractFactories: {
  //   ERC1155IndividualURI: NoizContractFactory<ERC1155IndividualURI_Factory>;
  //   ERC1155TokenShop: NoizContractFactory<ZERC1155TokenShop__factory>;
  //   Membership: NoizContractFactory<Membership__factory>;
  //   ProvaMaster: NoizContractFactory<ProvaMaster__factory>;
  //   USDC: NoizContractFactory<USDC__factory>;
  //   SimpleStorage: NoizContractFactory<SimpleStorage__factory>;
  //   [key: string]: NoizContractFactory<ContractFactory>;
  // };

  contractFactories: {
    ERC1155IndividualURI: ERC1155IndividualURI_Factory;
    ERC1155TokenShop: ZERC1155TokenShop__factory;
    Membership: Membership__factory;
    ProvaMaster: ProvaMaster__factory;
    USDC: USDC__factory;
    SimpleStorage: SimpleStorage__factory;
    [key: string]: ContractFactory;
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

    // this.newNoizContractFactories = {
    //   ERC1155IndividualURI: erc1155IndividualURIFactory,
    //   ERC1155TokenShop: erc1155TokenShopFactory,
    //   Membership: membershipFactory,
    //   ProvaMaster: provaMasterFactory,
    //   SimpleStorage: simpleStorageFactory,
    //   USDC: usdcFactory,
    // };

    // this.newContractFactories = {
    //   ERC1155IndividualURI:
    //     erc1155IndividualURIFactory.getContractFactory(
    //       signer
    //     ),
    //   ERC1155TokenShop:
    //     erc1155TokenShopFactory.getContractFactory(signer),
    //   Membership:
    //     membershipFactory.getContractFactory(signer),
    //   ProvaMaster:
    //     provaMasterFactory.getContractFactory(signer),
    //   SimpleStorage:
    //     simpleStorageFactory.getContractFactory(signer),
    //   USDC: usdcFactory.getContractFactory(signer),
    // };
  }
}
