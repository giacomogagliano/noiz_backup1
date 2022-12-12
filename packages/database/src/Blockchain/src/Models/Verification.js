import mongoose from "mongoose";

const verificationLevelsSchema = new mongoose.Schema({
  levels : [
    String
  ]
})

const verificationLevelSchema = new mongoose.Schema({
  "type" : String,
  "description": String,
  "requirements": []
})