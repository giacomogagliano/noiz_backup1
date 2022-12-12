import { expect } from "chai";
import Mocha from "mocha";
import { zionUtil } from "@zionstate_node/zion-util";

import * as IPFS from "ipfs-http-client";

const testRunner = new Mocha({ slow: 1000 });
testRunner.suite.emit("pre-require", global, "nofile", testRunner);
var suiteRun = testRunner.run();
process.on("exit", (code) => {
  process.exit(suiteRun.stats.failures > 0);
});
let log = zionUtil.debuglog("log");

const create = IPFS.create;

describe(`IPFS`, async () => {
  const ipfs = create({
    host: "127.0.0.1",
    port: 5002,
  });
  log(ipfs.ls());
}).timeout(5000);
