////
import { NoizContractFactory } from "../Class";
import { ERC1155IndividualURI__factory } from "../types/contracts";
import { ZERC1155TokenShop__factory } from "../types/contracts";
import { Membership__factory } from "../types/contracts";
import { ProvaMaster__factory } from "../types/contracts";
import { SimpleStorage__factory } from "../types/contracts";
import { Propaganda_Presale__factory } from "../types/contracts";
import { USDC__factory } from "../types/contracts";
////
import erc1155IndUri from "./ERC1155IndividualUri.sol/ERC1155IndividualURI.json";
import erc155TokenShop from "./ERC1155TokenShop.sol/ERC1155TokenShop.json";
import membership from "./Membership.sol/Membership.json";
import provaMaster from "./ProvaMaster.sol/ProvaMaster.json";
import simpleStorage from "./SimpleStorage.sol/SimpleStorage.json";
import usdc from "./USDC.sol/USDC.json";
import propaganda_presale from "./Propaganda_Presale.sol/Propaganda_Presale.json";

export * from "./getERC1155IndividualUri__factory";
export * from "./getERC1155TokenShop__factory";
export * from "./getMembership__factory";
export * from "./getProvaMaster__factory";
export * from "./getUSDC__factory";
export * from "./getSimpleStorage__factory";

export const erc1155IndividualURIFactory =
  new NoizContractFactory<ERC1155IndividualURI__factory>(erc1155IndUri);

export const erc1155TokenShopFactory =
  new NoizContractFactory<ZERC1155TokenShop__factory>(erc155TokenShop);

export const membershipFactory = new NoizContractFactory<Membership__factory>(
  membership
);

export const provaMasterFactory = new NoizContractFactory<ProvaMaster__factory>(
  provaMaster
);

export const simpleStorageFactory =
  new NoizContractFactory<SimpleStorage__factory>(simpleStorage);

export const usdcFactory = new NoizContractFactory<USDC__factory>(usdc);

export const propagandaPresaleFactory =
  new NoizContractFactory<Propaganda_Presale__factory>(propaganda_presale);
