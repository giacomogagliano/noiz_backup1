import mongoose from "mongoose";

export let messageSchema = new mongoose.Schema({
  text: String,
  callbacks: [String],
  description: String
})

export let commandSchema = new mongoose.Schema({
  command: String,
  descrition: String
})

export let Message = mongoose.model("Message", messageSchema)

export let jokeSchema = new mongoose.Schema({
  title: String,
  text: String
})

export let Joke = mongoose.model("Joke", jokeSchema)

export let colmoSchema = new mongoose.Schema({
  title: String,
  domanda: String,
  risposta: String
})

export let Colmo = mongoose.model("Colmo", colmoSchema)