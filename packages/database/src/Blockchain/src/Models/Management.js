import mongoose from "mongoose";

let generalInfosSchema = new mongoose.Schema({
  name: String,
  created_by: [mongoose.SchemaTypes.ObjectId],
  owners: [mongoose.SchemaTypes.ObjectId],
  created_at: {
    type: Date,
    default: ()=> new Date,
    immutable: true
  },
  created_in: [mongoose.SchemaTypes.ObjectId],
  description: String,
  dead_line: Date,
  priority: String,
  dependencies : {
    has_to_happen_before: [mongoose.SchemaTypes.ObjectId],
    has_to_happen_after: [mongoose.SchemaTypes.ObjectId]
  },
  is_validated: {
    type: Boolean,
    default: false
  }
})

let themeSchema = new mongoose.Schema({
  general_infos: generalInfosSchema,
  ////
  epics: [mongoose.SchemaTypes.ObjectId]
})

let epicSchema = new mongoose.Schema({
  general_infos: generalInfosSchema,
  ////
  type: String,
  tasks: [mongoose.SchemaTypes.ObjectId]
})

let taskSchema = new mongoose.Schema({
  general_infos: generalInfosSchema,
  ////
  interested_users: [mongoose.SchemaTypes.ObjectId],
  status: [String],
  useful_links: [String],
  required_skills: [String],
  reward: Number
})

export const Theme = mongoose.model("Theme", themeSchema)
export const Epic = mongoose.model("Epic", epicSchema)
export const Task = mongoose.model("Task", taskSchema)