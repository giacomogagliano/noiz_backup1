import { MongoDb } from "../../built/src/mongo-db/MongoDb.js";
import { config } from "dotenv";
config();

const db = new MongoDb(
  "atlas_cloud",
  process.env.MONGO_ATLAS_CONNECT,
  process.env.MONGO_ATLAS_USER,
  process.env.MONGO_ATLAS_PSWRD
);

await db.connect();
const search = await db.Blog.find({});
console.log(search[0].body);
