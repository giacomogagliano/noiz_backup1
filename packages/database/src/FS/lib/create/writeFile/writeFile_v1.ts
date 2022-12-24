import fs from "fs";

// TODO #181 @giacomogagliano add a generic
export const writeFile_v1 = async function (
  path: string,
  data: string,
  extension?: string
) {
  fs.writeFileSync(path, data);
  console.log("Written file: " + path);
  extension;
};
