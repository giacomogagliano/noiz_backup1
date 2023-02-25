import { testEnvironment } from "@zionstate/test";
import { lib } from "../../../../utils";
const formatTime_v1 = lib.formatTime;

const { expect, log } = testEnvironment();
expect;
log;

describe("if formatTime_v1 function is correctly exported", () => {
  const regex = /formatTime_v1/g;
  const name = formatTime_v1.name;
  const res = regex.test(name);
  it("shall confirm the existance of a function named formatTime_v1", () => {
    expect(res).to.be.true;
  });
});

describe("functionalities", () => {
  let EXPECTED1 = "00:01:00";
  it(`should return ${EXPECTED1}`, () => {
    let fakepassedtime = 60000;
    let time = new Date(fakepassedtime);
    expect(formatTime_v1(time)).to.be.equal(EXPECTED1);
  });
  let EXPECTED2 = "00:00:09";
  it(`should return ${EXPECTED2}`, () => {
    let fakepassedtime = 9000;
    let time = new Date(fakepassedtime);
    expect(formatTime_v1(time)).to.be.equal(EXPECTED2);
  });
  let EXPECTED3 = "00:00:10";
  it(`should return ${EXPECTED3}`, () => {
    let fakepassedtime = 10000;
    let time = new Date(fakepassedtime);
    expect(formatTime_v1(time)).to.be.equal(EXPECTED3);
  });
  let EXPECTED4 = "00:09:00";
  it(`should return ${EXPECTED4}`, () => {
    let fakepassedtime = 9 * 60 * 1_000;
    let time = new Date(fakepassedtime);
    expect(formatTime_v1(time)).to.be.equal(EXPECTED4);
  });
  let EXPECTED5 = "00:10:00";
  it(`should return ${EXPECTED5}`, () => {
    let fakepassedtime = 10 * 60 * 1_000;
    let time = new Date(fakepassedtime);
    expect(formatTime_v1(time)).to.be.equal(EXPECTED5);
  });
  let EXPECTED6 = "09:00:00";
  it(`should return ${EXPECTED6}`, () => {
    let fakepassedtime = 9 * 60 * 60 * 1_000;
    let time = new Date(fakepassedtime);
    expect(formatTime_v1(time)).to.be.equal(EXPECTED6);
  });
  let EXPECTED7 = "10:00:00";
  it(`should return ${EXPECTED7}`, () => {
    let fakepassedtime = 10 * 60 * 60 * 1_000;
    let time = new Date(fakepassedtime);
    expect(formatTime_v1(time)).to.be.equal(EXPECTED7);
  });
});
