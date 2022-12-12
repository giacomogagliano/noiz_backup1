import mongoose from "mongoose";
import { departmentSchema } from "./accounts";

export const fundingRounds = new mongoose.Schema({
  "name": String,
  "description": String,
  "token_price": Number
})

export const ambassador = new mongoose.Schema({
  "name": String,
  "Department": departmentSchema,
  "Role" : String,
})
