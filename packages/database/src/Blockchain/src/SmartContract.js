import { ethers } from "hardhat";

export class TokenShop {
  constructor(dao_address, membership_token, payment_token, gov_token) {
    return this.getContract(
      dao_address,
      membership_token,
      payment_token,
      gov_token
    );
  }
  async getContract(dao_address, membership_token, payment_token, gov_token) {
    const TokenShop = await ethers.getContractFactory("TokenShop");
    const instance = TokenShop.deploy(
      dao_address,
      membership_token,
      payment_token,
      gov_token
    );
    return instance;
  }
}
