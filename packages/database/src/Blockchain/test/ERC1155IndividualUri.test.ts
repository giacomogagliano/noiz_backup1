// ~/Documents/Projects/zion-network-state/packages/blockchain/test
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { ERC1155IndividualURI__factory } from "../src/types/contracts";
import { zionUtils } from "./utils/test-utils";

let ERC1155IndividualURI: ERC1155IndividualURI__factory,
  creator1: SignerWithAddress,
  creator2: SignerWithAddress,
  creator3: SignerWithAddress,
  _: SignerWithAddress[];

beforeEach("SetUp", async () => {
  await ethers.getSigners();
  ERC1155IndividualURI = (await ethers.getContractFactory(
    "ERC1155IndividualURI"
  )) as ERC1155IndividualURI__factory;
});
