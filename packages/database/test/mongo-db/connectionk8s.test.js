import mongoose from "mongoose";
import { config } from "dotenv";
config();

const URI = "mongodb://mongodb-db.default.svc.cluster.local";

// console.log(process.env.MONGO_ATLAS_USER);
mongoose.connect(process.env.MONGO_ATLAS_CONNECT, {
  user: process.env.MONGO_ATLAS_USER,
  pass: process.env.MONGO_ATLAS_PSWRD,
});

const db = mongoose.connection;
db.on("error", (error) => {
  console.log("connection error: ", error);
});
db.once("open", () => {
  console.log("Connected successfully");
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date,
});

const User = new Schema({
  name: String,
  surname: String,
});

const UserModel = mongoose.model("User", User);

class UserClass extends UserModel {}

// const user = new UserClass({ name: "cii", surname: "mii" });
// user.save();

const BlogModel = mongoose.model("BlogPost", BlogPost);

async function readAll() {
  return await UserModel.find({});
}

async function clearAll() {
  return await UserModel.deleteMany({});
}

const res = await readAll();
// console.log({
//   collections: db.collections,
//   db: db.db,
//   models: db.models,
//   host: db.host,
//   id: db.id,
//   name: db.name,
//   m: db.plugins,
//   port: db.port,
//   readyState: db.readyState,
//   user: db.user,
// });
console.log(res);

async function create(title) {
  let comment;
  try {
    comment = await BlogModel.create({
      title,
    });
  } catch (error) {
    console.log(error);
  }
  return comment;
}

async function read(title) {
  let blogpost;
  try {
    blogpost = await BlogModel.find({ title });
  } catch (error) {
    console.log(error);
  }
  return blogpost[0];
}

async function update(title) {
  let blogpost, result;
  try {
    blogpost = await BlogModel.find({ title });
    result = blogpost[0];
    if (!blogpost) return 0;
    result.body = "provo ad aggiungere un testo";
    result.save((err) => {
      if (err) console.log(err);
    });
  } catch (error) {
    console.log(error);
  }
  return result;
}

async function delete_(title) {
  let blogposts, result;
  try {
    blogposts = await BlogModel.find({ title });
    result = blogposts[0];
    await result.deleteOne();
  } catch (error) {
    if (error) console.log(error);
  }
  result;
}

async function slow() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(true);
    }, 3000);
  });
}
