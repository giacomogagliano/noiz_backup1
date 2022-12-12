import { IPFS } from "@zionstate/database";
import { config } from "dotenv";
config();

const IPFS_ID = process.env.IPFS_ID;
const ipfs = IPFS.Class.ZionIpfs("http");

const gIpfs = new ipfs();
const pins = await gIpfs.listPins();

console.log(pins.map((pin) => pin.cid));
