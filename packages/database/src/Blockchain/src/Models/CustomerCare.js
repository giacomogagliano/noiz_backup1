import mongoose from "mongoose";

let faqSchema = new mongoose.Schema({
  text: String,
  message: String,
  category: String,
  links: [String],
  created_at : {
    type: Date,
    default: ()=> new Date,
    immutable: true
  },
  update: {
    updated_at: Date,
    updated_by: [mongoose.SchemaTypes.ObjectId]
  }
})