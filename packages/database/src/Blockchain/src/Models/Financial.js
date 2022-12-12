import mongoose from "mongoose";

export let generalFinancialInfos = new mongoose.Schema({
  amount: Number,
  currency: String,
  date: Date,
  method: String,
  zTokenPrice: Number,
  
})

export let depositSchema = new mongoose.Schema({
  general_financial_infos = generalFinancialInfos,
  ////
  from: [mongoose.SchemaTypes.ObjectId]
})

export let withdrawalSchema = new mongoose.Schema({
  general_financial_infos = generalFinancialInfos,
  ////
  to: [mongoose.SchemaTypes.ObjectId]
})

export const Deposit =mongoose.model("Depostit", depositSchema)
export const Withdrawal =mongoose.model("Withdrawal", withdrawalSchema)