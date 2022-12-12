import mongoose from "mongoose";

let governance = {
  proposal : new mongoose.SchemaType({
    "level": Number,
    "votation_type": String,
  }),
  votationType: new mongoose.SchemaType({
    
  })
  
}