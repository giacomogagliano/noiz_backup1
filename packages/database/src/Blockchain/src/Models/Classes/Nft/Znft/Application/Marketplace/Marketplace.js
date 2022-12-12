import { Application } from "../Application";
import { AMM } from "./_extensions/AMM";
import { Auction } from "./_extensions/Auction";
import { BondingCurve } from "./_extensions/BondingCurve";
import { Limit } from "./_extensions/Limit";

export class Marketplace extends Application, AMM, Auction, BondingCurve, Limit, OTC{
  constructor(){

  }
  createMarketplace()
  setMarketplace()
  deleteMarketplace()
}