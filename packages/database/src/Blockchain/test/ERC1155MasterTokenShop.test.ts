import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { zionUtils } from "./utils/test-utils";
import {
  ZERC1155MasterTokenShop,
  ZERC1155MasterTokenShop__factory,
  Membership,
  Membership__factory,
  ProvaMaster,
  ProvaMaster__factory,
  USDC,
  USDC__factory,
} from "../src/types/contracts/";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

let ZERC1155MasterTokenShop: ZERC1155MasterTokenShop__factory,
  zerc1155masterShop: ZERC1155MasterTokenShop,
  buyer1: SignerWithAddress,
  buyer2: SignerWithAddress,
  buyer3: SignerWithAddress,
  _,
  ProvaMaster: ProvaMaster__factory,
  provaMaster: ProvaMaster,
  prod1: SignerWithAddress,
  prod2: SignerWithAddress,
  prod3: SignerWithAddress,
  Membership: Membership__factory,
  membership: Membership,
  USDC: USDC__factory,
  usdc: USDC;

beforeEach("SetUp", async () => {
  [prod1, prod2, prod3, buyer1, buyer2, buyer3, _] = await ethers.getSigners();
  ProvaMaster = (await ethers.getContractFactory(
    "ProvaMaster"
  )) as ProvaMaster__factory;
  provaMaster = await ProvaMaster.deploy();
  USDC = (await ethers.getContractFactory("USDC")) as USDC__factory;
  usdc = await USDC.deploy();
  Membership = (await ethers.getContractFactory(
    "Membership"
  )) as Membership__factory;
  membership = await Membership.deploy();
  ZERC1155MasterTokenShop = (await ethers.getContractFactory(
    "zERC1155MasterTokenShop"
  )) as ZERC1155MasterTokenShop__factory;
  zerc1155masterShop = await ZERC1155MasterTokenShop.deploy(
    provaMaster.address,
    1,
    prod1.address,
    membership.address,
    provaMaster.address,
    usdc.address,
    10
  );
  let openShop = await zerc1155masterShop.setShopStatus(1);
  const members = [buyer1, buyer2, buyer3];
  await provaMaster.setTokenShop(zerc1155masterShop.address);
  members.forEach(async (member) => {
    await membership.mint(member.address);
    await usdc.mint(member.address, 1000);
  });
  const SHAREID = 1;
  await provaMaster.safeTransferFrom(
    prod1.address,
    prod2.address,
    SHAREID,
    200, /// dividend 1 ////////////////////////////////////////////
    "0x00"
  );
  await provaMaster.safeTransferFrom(
    prod1.address,
    prod3.address,
    SHAREID,
    100, /// dividend 2 ////////////////////////////////////////////
    "0x00"
  );
  members.forEach(async (member) => {
    await usdc.connect(member).approve(zerc1155masterShop.address, 10);
    await zerc1155masterShop.connect(member).buyTokens("0x00");
  });
});

describe.only("Master Token Shop", () => {
  it("Should show prices of transactions", async () => {
    zionUtils.logDeploymentGasCost(
      provaMaster,
      "ProvaMaster:: gas required to deploy the contract:"
    );
    await zionUtils.getGasUsed(
      await zerc1155masterShop.setShopStatus(1),
      "ERC1155MasterShop:: gas used to open shop:"
    );
    await zionUtils.getGasUsed(
      await zerc1155masterShop.connect(prod2).dividend(),
      "ERC1155MasterShop:: gas used to call dividen():"
    );
    await zionUtils.getGasUsed(
      await provaMaster
        .connect(prod2)
        .safeTransferFrom(prod2.address, prod3.address, 1, 50, "0x00"),
      "ProvaMaster:: gas used to transfer share tokens:"
    );
    await zionUtils.getGasUsed(
      await zerc1155masterShop.connect(prod1).withdrawRaisedCapital(1),
      "ERC1155MasterShop:: gas used to withdraw capital:"
    );
    await zionUtils.getGasUsed(
      await usdc.connect(buyer1).approve(zerc1155masterShop.address, 10),
      "ERC20:: gas use to approve token"
    );
    await zionUtils.getGasUsed(
      await zerc1155masterShop.connect(buyer1).buyTokens("0x00"),
      "ERC1155MasterShop:: gas used to buy tokens:"
    );
  });
  it("Should return raised capital 30 USCD", async () => {
    await zerc1155masterShop.connect(prod2).dividend(); /// dividend 3 /////////////////////////////////////////////////////////////////////////////////////////
    expect(
      (
        await zerc1155masterShop.totalCapitalAt(
          (
            await zerc1155masterShop.connect(prod3).getCurrentDividendId()
          ).toNumber()
        )
      ).toNumber()
    ).to.be.equal(30);
  }),
    it("Should let prod1 claim 10usdc", async () => {
      await zerc1155masterShop.connect(prod2).dividend(); /// dividend 3 /////////////////////////////////////////////////////////////////////////////////////////
      expect(
        (
          await zerc1155masterShop.totalCapitalAt(
            (
              await zerc1155masterShop.connect(prod3).getCurrentDividendId()
            ).toNumber()
          )
        ).toNumber()
      ).to.be.equal(30);
      await zerc1155masterShop.withdrawRaisedCapital(10);
      expect((await usdc.balanceOf(prod1.address)).toNumber()).to.be.equal(10);
    }),
    it("Should not let prod2 withdraw 7 dollars", async () => {
      await zerc1155masterShop.connect(prod2).dividend(); /// dividend 3 /////////////////////////////////////////////////////////////////////////////////////////
      await expect(zerc1155masterShop.connect(prod2).withdrawRaisedCapital(7))
        .to.be.reverted;
    }),
    it("Should let prod2 transfer 50 shares to prod3", async () => {
      await provaMaster
        .connect(prod2)
        .safeTransferFrom(prod2.address, prod3.address, 1, 50, "0x00");
      expect(
        (await provaMaster.balanceOf(prod2.address, 1)).toNumber()
      ).to.be.equal(150);
    }),
    it("Should return share of prod1, prod2, prod3 with 700,200,100 respectively", async () => {
      expect(
        (await zerc1155masterShop.getRaisedCapital()).toNumber()
      ).to.be.equal(30);
      await zerc1155masterShop.connect(prod2).dividend(); /// dividend 3 /////////////////////////////////////////////////////////////////////////////////////////
      expect(
        (
          await zerc1155masterShop.totalCapitalAt(
            (
              await zerc1155masterShop.connect(prod3).getCurrentDividendId()
            ).toNumber()
          )
        ).toNumber()
      ).to.be.equal(30);
      expect(
        (await provaMaster.balanceOfAt(prod1.address, 1, 3)).toNumber()
      ).to.be.equal(700);
      expect(
        (await provaMaster.balanceOfAt(prod2.address, 1, 3)).toNumber()
      ).to.be.equal(200);
      expect(
        (await provaMaster.balanceOfAt(prod3.address, 1, 3)).toNumber()
      ).to.be.equal(100);
    }),
    it("Should return 700,200,100 at dividend 3 and 700,150,150 at dividend 4, as prod2 sends 50 shares to prod3", async () => {
      expect(
        (await zerc1155masterShop.getRaisedCapital()).toNumber()
      ).to.be.equal(30);
      await zerc1155masterShop.connect(prod2).dividend(); /// dividend 3 /////////////////////////////////////////////////////////////////////////////////////////
      await provaMaster
        .connect(prod2)
        .safeTransferFrom(prod2.address, prod3.address, 1, 50, "0x00"); /// dividend 4 ////////////////////////////////////////////
      expect(
        (await provaMaster.balanceOfAt(prod1.address, 1, 3)).toNumber()
      ).to.be.equal(700);
      expect(
        (await provaMaster.balanceOfAt(prod2.address, 1, 3)).toNumber()
      ).to.be.equal(200);
      expect(
        (await provaMaster.balanceOfAt(prod3.address, 1, 3)).toNumber()
      ).to.be.equal(100);
      expect(
        (
          await provaMaster.balanceOfAt(
            prod1.address,
            1,
            (
              await zerc1155masterShop.connect(prod3).getCurrentDividendId()
            ).toNumber()
          )
        ).toNumber()
      ).to.be.equal(700);
      expect(
        (
          await provaMaster.balanceOfAt(
            prod2.address,
            1,
            (
              await zerc1155masterShop.connect(prod3).getCurrentDividendId()
            ).toNumber()
          )
        ).toNumber()
      ).to.be.equal(150);
      expect(
        (
          await provaMaster.balanceOfAt(
            prod3.address,
            1,
            (
              await zerc1155masterShop.connect(prod3).getCurrentDividendId()
            ).toNumber()
          )
        ).toNumber()
      ).to.be.equal(150);
    }),
    it("Should return 0,0,30,30 at dividend 1,2,3,4 for the value of the total capital", async () => {
      await zerc1155masterShop.connect(prod2).dividend(); /// dividend 3 /////////////////////////////////////////////////////////////////////////////////////////
      await provaMaster
        .connect(prod2)
        .safeTransferFrom(prod2.address, prod3.address, 1, 50, "0x00"); /// dividend 4 ////////////////////////////////////////////
      expect(
        (await zerc1155masterShop.totalCapitalAt(1)).toNumber()
      ).to.be.equal(0);
      expect(
        (await zerc1155masterShop.totalCapitalAt(2)).toNumber()
      ).to.be.equal(0);
      expect(
        (await zerc1155masterShop.totalCapitalAt(3)).toNumber()
      ).to.be.equal(30);
      expect(
        (
          await zerc1155masterShop.totalCapitalAt(
            (
              await zerc1155masterShop.connect(prod3).getCurrentDividendId()
            ).toNumber()
          )
        ).toNumber()
      ).to.be.equal(30);
    }),
    it("3 tokens are bought at 10usdc, it should return 0,0,30,30,60 at dividends 1,2,3,4,5", async () => {
      await zerc1155masterShop.connect(prod2).dividend(); /// dividend 3 /////////////////////////////////////////////////////////////////////////////////////////
      await provaMaster
        .connect(prod2)
        .safeTransferFrom(prod2.address, prod3.address, 1, 50, "0x00"); /// dividend 4 ////////////////////////////////////////////
      await usdc.connect(buyer1).approve(zerc1155masterShop.address, 10);
      await zerc1155masterShop.connect(buyer1).buyTokens("0x00");
      await usdc.connect(buyer2).approve(zerc1155masterShop.address, 10);
      await zerc1155masterShop.connect(buyer2).buyTokens("0x00");
      await usdc.connect(buyer3).approve(zerc1155masterShop.address, 10);
      await zerc1155masterShop.connect(buyer3).buyTokens("0x00");
      await zerc1155masterShop.connect(prod2).dividend(); /// dividend 5 /////////////////////////////////////////////////////////////////////////////////////////
      expect(
        (await zerc1155masterShop.totalCapitalAt(1)).toNumber()
      ).to.be.equal(0);
      expect(
        (await zerc1155masterShop.totalCapitalAt(2)).toNumber()
      ).to.be.equal(0);
      expect(
        (await zerc1155masterShop.totalCapitalAt(3)).toNumber()
      ).to.be.equal(30);
      expect(
        (await zerc1155masterShop.totalCapitalAt(4)).toNumber()
      ).to.be.equal(30);
      expect(
        (
          await zerc1155masterShop.totalCapitalAt(
            (
              await zerc1155masterShop.connect(prod3).getCurrentDividendId()
            ).toNumber()
          )
        ).toNumber()
      ).to.be.equal(60);
    }),
    it("Should return the right balance of shares for prod1, prod2, prod3 after various dividends and share tokens transfer", async () => {
      await zerc1155masterShop.connect(prod2).dividend(); /// dividend 3 /////////////////////////////////////////////////////////////////////////////////////////
      await provaMaster
        .connect(prod2)
        .safeTransferFrom(prod2.address, prod3.address, 1, 50, "0x00"); /// dividend 4 ////////////////////////////////////////////
      await zerc1155masterShop.connect(prod2).dividend(); /// dividend 5 /////////////////////////////////////////////////////////////////////////////////////////
      expect(
        (await provaMaster.balanceOfAt(prod1.address, 1, 3)).toNumber()
      ).to.be.equal(700);
      expect(
        (await provaMaster.balanceOfAt(prod2.address, 1, 3)).toNumber()
      ).to.be.equal(200);
      expect(
        (await provaMaster.balanceOfAt(prod3.address, 1, 3)).toNumber()
      ).to.be.equal(100);
      expect(
        (await provaMaster.balanceOfAt(prod1.address, 1, 4)).toNumber()
      ).to.be.equal(700);
      expect(
        (await provaMaster.balanceOfAt(prod2.address, 1, 4)).toNumber()
      ).to.be.equal(150);
      expect(
        (await provaMaster.balanceOfAt(prod3.address, 1, 4)).toNumber()
      ).to.be.equal(150);
      expect(
        (
          await provaMaster.balanceOfAt(
            prod1.address,
            1,
            (
              await zerc1155masterShop.connect(prod3).getCurrentDividendId()
            ).toNumber()
          )
        ).toNumber()
      ).to.be.equal(700);
      expect(
        (
          await provaMaster.balanceOfAt(
            prod2.address,
            1,
            (
              await zerc1155masterShop.connect(prod3).getCurrentDividendId()
            ).toNumber()
          )
        ).toNumber()
      ).to.be.equal(150);
      expect(
        (
          await provaMaster.balanceOfAt(
            prod3.address,
            1,
            (
              await zerc1155masterShop.connect(prod3).getCurrentDividendId()
            ).toNumber()
          )
        ).toNumber()
      ).to.be.equal(150);
    }),
    it("Should return 30,60,90 as total capital at dividends 4,5,6", async () => {
      await zerc1155masterShop.connect(prod2).dividend(); /// dividend 3 /////////////////////////////////////////////////////////////////////////////////////////
      await provaMaster
        .connect(prod2)
        .safeTransferFrom(prod2.address, prod3.address, 1, 50, "0x00"); /// dividend 4 ////////////////////////////////////////////
      await usdc.connect(buyer1).approve(zerc1155masterShop.address, 10);
      await zerc1155masterShop.connect(buyer1).buyTokens("0x00");
      await usdc.connect(buyer2).approve(zerc1155masterShop.address, 10);
      await zerc1155masterShop.connect(buyer2).buyTokens("0x00");
      await usdc.connect(buyer3).approve(zerc1155masterShop.address, 10);
      await zerc1155masterShop.connect(buyer3).buyTokens("0x00");
      await zerc1155masterShop.connect(prod2).dividend(); /// dividend 5 /////////////////////////////////////////////////////////////////////////////////////////
      await usdc.connect(buyer1).approve(zerc1155masterShop.address, 10);
      await zerc1155masterShop.connect(buyer1).buyTokens("0x00");
      await usdc.connect(buyer2).approve(zerc1155masterShop.address, 10);
      await zerc1155masterShop.connect(buyer2).buyTokens("0x00");
      await usdc.connect(buyer3).approve(zerc1155masterShop.address, 10);
      await zerc1155masterShop.connect(buyer3).buyTokens("0x00");
      await zerc1155masterShop.connect(prod2).dividend(); /// dividend 6 /////////////////////////////////////////////////////////////////////////////////////////
      expect(
        (await zerc1155masterShop.totalCapitalAt(4)).toNumber()
      ).to.be.equal(30);
      expect(
        (await zerc1155masterShop.totalCapitalAt(5)).toNumber()
      ).to.be.equal(60);
      expect(
        (
          await zerc1155masterShop.totalCapitalAt(
            (
              await zerc1155masterShop.connect(prod3).getCurrentDividendId()
            ).toNumber()
          )
        ).toNumber()
      ).to.be.equal(90);
    }),
    it("let prod1 withdraw 1usdc. prod2 2 usda and should not let prod3 withdraw 14 as his available balance is 13", async () => {
      await zerc1155masterShop.connect(prod2).dividend(); /// dividend 3 /////////////////////////////////////////////////////////////////////////////////////////
      await provaMaster
        .connect(prod2)
        .safeTransferFrom(prod2.address, prod3.address, 1, 50, "0x00"); /// dividend 4 ////////////////////////////////////////////
      await usdc.connect(buyer1).approve(zerc1155masterShop.address, 10);
      await zerc1155masterShop.connect(buyer1).buyTokens("0x00");
      await usdc.connect(buyer2).approve(zerc1155masterShop.address, 10);
      await zerc1155masterShop.connect(buyer2).buyTokens("0x00");
      await usdc.connect(buyer3).approve(zerc1155masterShop.address, 10);
      await zerc1155masterShop.connect(buyer3).buyTokens("0x00");
      await zerc1155masterShop.connect(prod2).dividend(); /// dividend 5 /////////////////////////////////////////////////////////////////////////////////////////
      await usdc.connect(buyer1).approve(zerc1155masterShop.address, 10);
      await zerc1155masterShop.connect(buyer1).buyTokens("0x00");
      await usdc.connect(buyer2).approve(zerc1155masterShop.address, 10);
      await zerc1155masterShop.connect(buyer2).buyTokens("0x00");
      await usdc.connect(buyer3).approve(zerc1155masterShop.address, 10);
      await zerc1155masterShop.connect(buyer3).buyTokens("0x00");
      await zerc1155masterShop.connect(prod2).dividend(); /// dividend 6 /////////////////////////////////////////////////////////////////////////////////////////
      await zerc1155masterShop.connect(prod1).withdrawRaisedCapital(1);
      await zerc1155masterShop.connect(prod2).withdrawRaisedCapital(2);
      await zerc1155masterShop.connect(prod3).withdrawRaisedCapital(3);
      await zerc1155masterShop.connect(prod3).withdrawRaisedCapital(7);
      await expect(zerc1155masterShop.connect(prod3).withdrawRaisedCapital(4))
        .to.be.reverted;
    });
});
