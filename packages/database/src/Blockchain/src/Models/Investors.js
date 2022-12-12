import mongoose from "mongoose";

let blockchainAddressSchema = new mongoose.Schema({
  bc: String,
  public_address: String
})

let interstSchema = new mongoose.Schema({
  amount: Number,
  currency: {
    type: Number,
    default: "EUR"
  },
  is_recurrent: Boolean,
  message: String,
  created_at: Date,
  updated_at: Date
})

let investorSchema = new mongoose.Schema({
  user: [mongoose.SchemaTypes.ObjectId],
  first_name: String,
  last_name: String,
  emails: [],
  bc_addresses: [blockchainAddressSchema],
  deposit: [mongoose.SchemaTypes.ObjectId],
  withdrawal: [mongoose.SchemaTypes.ObjectId],
  interest: interstSchema
})

export let Investor = mongoose.model("Investor", investorSchema)