import { ethers, Signer } from "ethers";
import { types } from "../../../Blockchain";
import type { Class } from "../../../Blockchain";
import {
  erc1155IndividualURIFactory,
  erc1155TokenShopFactory,
  membershipFactory,
  provaMasterFactory,
  simpleStorageFactory,
  usdcFactory,
  propagandaPresaleFactory,
} from "../../../Blockchain/src/Factories";
import {
  Membership__factory,
  ProvaMaster__factory,
  USDC__factory,
  ZERC1155TokenShop__factory,
  SimpleStorage__factory,
  Propaganda_Presale__factory,
} from "../../../Blockchain/src/types/contracts";

export interface INoizContractFactories_v2 {
  name: string;
}

export interface NoizContractFactories_v2 {}

type NoizContractFactory<
  T extends ethers.ContractFactory
> = Class.NoizContractFactory<T>;
// import { NoizContractFactory } from "../classes";

export type ERC1155IndividualURI_Factory =
  types.ZionContractsTypeScript.ERC1155IndividualURI__factory;

export type ERC1155IndividualURI =
  types.ZionContractsTypeScript.ERC1155IndividualURI;

export type ContractFactory = ethers.ContractFactory;

export class NoizContractFactories_v2 {
  newNoizContractFactories: {
    ERC1155IndividualURI: NoizContractFactory<ERC1155IndividualURI_Factory>;
    ERC1155TokenShop: NoizContractFactory<ZERC1155TokenShop__factory>;
    Membership: NoizContractFactory<Membership__factory>;
    ProvaMaster: NoizContractFactory<ProvaMaster__factory>;
    USDC: NoizContractFactory<USDC__factory>;
    SimpleStorage: NoizContractFactory<SimpleStorage__factory>;
    Propaganda_presale: NoizContractFactory<Propaganda_Presale__factory>;
    [key: string]: NoizContractFactory<ContractFactory>;
  };

  contractFactories: {
    ERC1155IndividualURI: ERC1155IndividualURI_Factory;
    ERC1155TokenShop: ZERC1155TokenShop__factory;
    Membership: Membership__factory;
    ProvaMaster: ProvaMaster__factory;
    USDC: USDC__factory;
    SimpleStorage: SimpleStorage__factory;
    Propaganda_presale: Propaganda_Presale__factory;
    [key: string]: ContractFactory;
  };
  constructor(public signer?: Signer) {
    if (!signer) throw new Error("");

    this.newNoizContractFactories = {
      ERC1155IndividualURI: erc1155IndividualURIFactory,
      ERC1155TokenShop: erc1155TokenShopFactory,
      Membership: membershipFactory,
      ProvaMaster: provaMasterFactory,
      SimpleStorage: simpleStorageFactory,
      USDC: usdcFactory,
      Propaganda_presale: propagandaPresaleFactory,
    };

    this.contractFactories = {
      ERC1155IndividualURI:
        erc1155IndividualURIFactory.getContractFactory(
          signer
        ),
      ERC1155TokenShop:
        erc1155TokenShopFactory.getContractFactory(signer),
      Membership:
        membershipFactory.getContractFactory(signer),
      ProvaMaster:
        provaMasterFactory.getContractFactory(signer),
      SimpleStorage:
        simpleStorageFactory.getContractFactory(signer),
      USDC: usdcFactory.getContractFactory(signer),
      Propaganda_presale:
        propagandaPresaleFactory.getContractFactory(
          signer
        ),
    };
  }
}

export type NoizContractFactories_v2Ctor = {
  new (signer?: Signer): NoizContractFactories_v2;
};

export const NoizContractFactories_v2Ctor: NoizContractFactories_v2Ctor =
  NoizContractFactories_v2;

///////////
///////////
///////////
///////////
///////////
///////////
///////////
///////////
///////////
///////////
///////////
///////////
///////////
///////////
///////////
///////////
///////////
///////////
///////////
///////////
///////////
