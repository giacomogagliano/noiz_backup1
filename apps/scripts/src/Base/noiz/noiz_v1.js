#!/usr/bin/env node
import { exec } from "child_process";

export const noiz_v1 = "noiz_v1";

const PLATFORM = process.platform;
const DARWIN = "darwin";
const WIN32 = "win32";

const STEP1 = "./steps/";
const STEP2 = "./steps/";
const STEP3 = "./steps/";

const MESSAGE =
  PLATFORM === DARWIN
    ? "you are a good user"
    : PLATFORM === WIN32
    ? "you are a bad user"
    : "fuck you";

console.log(MESSAGE);
exec('"sh hello.sh"');
