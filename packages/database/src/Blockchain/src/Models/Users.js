import mongoose from "mongoose";
import { telegramFromSchema } from "./Telegram.js";

// let userSchema = new mongoose.Schema({
//   tg_infos: telegramFromSchema,
//   created_at : {
//     type: Date,
//     default: ()=> new Date,
//     immutable: true
//   },
//   updated_at : Date,
//   tests: []
// })

// export let User = mongoose.model("User", userSchema)




// const addressSchema = new mongoose.Schema({
//   street: String,
//   city: String
// })

// export let Address = mongoose.model("Address", addressSchema)

// const userSchema = new mongoose.Schema({
//   name: String,
//   age: {
//     type: Number,
//     min: 1,
//     max: 100,
//     validator: v => v % 2 === 0,
//     message: props => `${props.value} is not an even number`
//   },
//   email: {
//     type: String,
//     required: true,
//     lowercase: true
//   },
//   created_at: {
//     type: Date,
//     immutable: true,
//     default: ()=>Date.now 
//   },
//   updated_at: Date,
//   best_friend: mongoose.SchemaTypes.ObjectId, 
//   hobbies: [String],
//   address: addressSchema
// })

// export let User = mongoose.model("User", userSchema)