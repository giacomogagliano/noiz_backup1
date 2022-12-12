import { expect } from "chai";
import Mocha from "mocha";
import { zionUtil } from "@zionstate_node/zion-util";
import { ZionIpfs } from "../built/src/ZionIpfs.js";

const testRunner = new Mocha({ slow: 1000 });
testRunner.suite.emit("pre-require", global, "nofile", testRunner);
var suiteRun = testRunner.run();
process.on("exit", (code) => {
  process.exit(suiteRun.stats.failures > 0);
});
let log = zionUtil.debuglog("log");

let newZionIpfs = new ZionIpfs();

const delCID1 = "QmbQp9xXLAU81dfcuJYUEbWyQpJ97X78CkDz6gZBojWxvW";
const delCID2 = "QmNzaasZuNuyMf5tsbQV9U1fJsFt7k7BEjL9qztcgowdjR";
const delCID3 = "QmQi8H8VuiAJcUPX2tqxgiKsRYDS5VBWoLYo7a6GF4weuc";
const delCID4 = "QmSbVsrGJLpqyaYurhhEW3jiuGN28faaBxXgVEyoKswt3N";

describe(`ZIONIPFS Class`, () => {
  describe(`cat()`, () => {
    it(`it should return the content of the CID`, async () => {
      let res = newZionIpfs.cat(delCID3);
      log(await res);
      // log(res2);
    }).timeout(8000);
  });
  describe.only(`Method load()`, () => {
    it(`should load the ipfs`, async () => {
      let res = newZionIpfs.listPins();
      log(await res);
    });
  });
});
