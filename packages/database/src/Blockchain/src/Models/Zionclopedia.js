import mongoose from "mongoose";

const devLanguages = new mongoose.Schema({
  "title": String,
  "description": String,
  "stack": [String]
})

const devPlatforms = new mongoose.Schema({
  "title": String,
  "description": String
})

const blockchain = new mongoose.Schema({
  
})

export const zionclopediaItemSchema = new mongoose.Schema({
  title: String,
  category: String,
  description: String,
  tags: [String],
  links: [String],
  created_at: {
    type: Date,
    default: ()=> new Date,
    immutable: true
  },
  created_by: [mongoose.SchemaTypes.ObjectId],
  is_validated: {
    type: Boolean,
    default: false
  }
})

export let ZionclopediaItem = mongoose.model("Zionclopedia Item", zionclopediaItemSchema)