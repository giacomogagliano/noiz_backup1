import mongoose from "mongoose";
import { telegramFromSchema } from "./Telegram.js";

let userSchema = new mongoose.Schema({
  name: String,
  slug: String,
  tg_infos: telegramFromSchema,
  created_at : {
    type: Date,
    default: ()=> new Date,
    immutable: true
  },
  updated_at : Date,
  tests: [mongoose.SchemaTypes.ObjectId]
})
export let User = mongoose.model("User", userSchema)

export class Chat{
  constructor(telegramChat_id){
    this.name
    this.chat_info = telegramChat_id
    this.created_at
    this.tests
  }
  async saveToDB(){
    return await ChatDoc.create(this)
  }
  async existsBy_id(){
    return new Promise(async(res, rej)=>{
      await ChatDoc.exists({_id:this._id}) ?
      res(true) :
      res(false)
    })
  }
  log(){
    return console.log(this)
  }
  async getDoc(){
    return ChatDoc.findOne({_id:this._id})
  }
}
export let chatSchema = new mongoose.Schema({
  name: String,
  chat_info: mongoose.SchemaTypes.ObjectId,
  created_at : {
    type: Date,
    default: ()=> new Date,
    immutable: true
  },
  tests: [mongoose.SchemaTypes.ObjectId]
})
chatSchema.loadClass(Chat)
export let ChatDoc = mongoose.model("Chat", chatSchema)

// let userSchema = new mongoose.Schema({
//   tg_infos: telegramFromSchema,
//   created_at : {
//     type: Date,
//     default: ()=> new Date,
//     immutable: true
//   },
//   updated_at : Date,
//   tests: [mongoose.SchemaTypes.ObjectId]
// })
// export let User = mongoose.model("User", userSchema)

const accountSchema = new mongoose.Schema({
  "name": String,
  "slug": String,
  "type": String,
  "address": {},
  "ip": [String],
  "telgram": {},
  "audius": {},
  "playlists": [],
  "bc_addresses" : [{
    "chain": String, "address": Number
  }]
})

const accountType = new mongoose.Schema({
  "name": String,
  "description": String,
  "features":[]
})

const departmentSchema = new mongoose.Schema({
  "title": String,
  "members": [String],
})

const roleSchema = new mongoose.Schema({
  "title": String,
  "department": departmentSchema
})

const addressSchema = new mongoose.Schema({
  "Street": String,
  "City": String,
  "postal_code": String
})

const anagraficSchema = new mongoose.Schema({
  "first_name": String,
  "last_name": String,
  "address": addressSchema
})

const memberSchema = new mongoose.Schema({
  "anagrafic" : anagraficSchema,
  "role": roleSchema,
  "teams": [],
})


// class Person {
//   set name(name) {
//       const tokens = name.split(' ');
//       this.firstName = tokens[0];
//       this.lastName = tokens[1];
//   }

//   get name() {
//       return `${this.firstName} ${this.lastName}`;
//   }

//   // static findByLastName(lastName) {
//   //     return this.find({ lastName: new RegExp(lastName, 'i') });
//   // }

//   use(){
//     return this.name
//   }
// }
// const personSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String
// });

// personSchema.loadClass(Person);

// const alex = new Person({ name: 'Alex Jones' });



// Person.findByLastName('Shah')
//     .then(docs => console.log(docs))
//     .catch(err => console.log(err));
