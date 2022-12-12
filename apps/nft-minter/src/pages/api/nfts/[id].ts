import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { join } from "path";
import { js } from "@zionstate/utils";

// TODO do a better export of this package
const check = js.ZionRegexp.ZionRegExp.fileExtensionWithPoint;

const databasePath = "database";
const contentPath = "content";
const metadataFolder = "metadata";
const cropped = "_cropped";

const imageSource = join(process.cwd(), databasePath, contentPath, cropped);
const metadataSource = join(
  process.cwd(),
  databasePath,
  contentPath,
  metadataFolder
);

const middlewareLogger = (file: any) => {
  console.log(file);
  return file;
};

/**
 * Function which handles the query. As it is a dynamic api,
 * which we defined by naming the file with the name within
 * the [<filename>] square brackets. To handle this type of
 * functions we can build a middleware manager which injects
 * the code in within the scope of this function.
 * @param req
 * @param res
 */
export default function handler(
  req: NextApiRequest & { query: { id: string } },
  res: NextApiResponse
) {
  const imagesBasePath = fs
    // read files in source
    // retrieve the list of fileNames
    .readdirSync(imageSource)
    // filters our somefiles which are in the folder now
    // files starting with pfp3a
    .filter((file) => file[0] === "0")
    // filters out .json files by keeping only jpgs
    .filter((file) => file.match(check)[0] === ".jpg")
    // maps the paths so that the queried ID matches with
    // the image ID
    .map((file) => join(imageSource, file));

  const metadatas = fs
    .readdirSync(metadataSource)
    .map((filename) => fs.readFileSync(join(metadataSource, filename)))
    .map((buffer) => buffer.toString())
    .map((string) => JSON.parse(string));
  res.send(metadatas[req.query.id]);
}
