// source
// https://console.neo4j.io/#how-to-connect?language=JavaScript

import { config } from "dotenv";
import neo4j from "neo4j-driver";
import {
  createBrotherReleationQuery,
  createParentReleationQuery,
} from "./lib/createRelationQuery.js";
import { deleteQuery } from "./lib/deleteQuery.js";
import { readQuery } from "./lib/readQuery.js";
import { updateQuery } from "./lib/updateQuery.js";
import { createPerson } from "./lib/createPerson.js";
config();

const run = async () => {
  // const neo4j = import("neo4j-driver");

  const uri = "neo4j+s://a8401046.databases.neo4j.io";
  const user = process.env.NEO4J_USERNAME;
  const password = process.env.NEO4J_PASSWORD;

  const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
  const session = driver.session();

  try {
    await createBrotherReleationQuery(
      { name: "Mia" },
      { name: "Noa" },
      session
    );
  } catch (error) {
    console.error(
      "Something went wrong:\n",
      error.message,
      error.stack.split("\n")[0]
    );
  } finally {
    await session.close();
  }

  // Don't forget to close the driver connection when you're finished with it
  await driver.close();
};

await run();
