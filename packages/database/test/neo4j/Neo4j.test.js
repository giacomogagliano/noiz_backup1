import { config } from "dotenv";
import { Config } from "../../built/src/neo4j/Neo4j.js";
config();

const URI = "neo4j+s://a8401046.databases.neo4j.io";
const USER = process.env.NEO4J_USERNAME;
const PASSWORD = process.env.NEO4J_PASSWORD;

const neoconfig = new Config(URI, USER, PASSWORD).getInstance();
console.log(neoconfig);
