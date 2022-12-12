import { IPFSHTTPClient } from "ipfs-http-client";
import { AddResult } from "ipfs-core-types/src/root";
import fs from "fs";
import { basename } from "path";
import { js } from "@zionstate/zionbase/utils";
const ZionRegExp = js.ZionRegExp;
// const check1 = /(\..*)/g;
const check1 = ZionRegExp.fileExtensionWithPoint;
// const check2 = /[\w-_]+(?=\.)/g;
const check2 = ZionRegExp.filenameFromPath;
const ERROR = "There was an error with the name";

interface LogInfos {
  path: string;
  size: number;
  date: Date;
  filename: string;
}

export async function addAndPrintLog(
  ipfs: IPFSHTTPClient,
  filename: string,
  logTargetFolder: string,
  path: string,
  nameExtension: string
) {
  const condition1 = check1.exec(path);

  const file: Buffer = fs.readFileSync(
    condition1 ? path : path + "/" + filename
  );
  const result: AddResult = await ipfs.add(file);
  let log: LogInfos = {
    filename: condition1 ? basename(path) : filename,
    path: result.path,
    size: result.size,
    date: new Date(),
  };
  if (!condition1) {
    let filename1 = basename(path + "/" + filename).match(
      check2
    );
    if (!filename1) throw new Error(ERROR);
    const match = filename1[0];
    if (!match) throw new Error("");
    filename = match;
  }
  const logfilename = filename + nameExtension;
  const filepath = logTargetFolder + logfilename;
  fs.writeFileSync(filepath, JSON.stringify(log));
}
