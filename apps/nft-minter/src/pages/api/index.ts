import { NextApiRequest, NextApiResponse } from "next";
import { LandingProps } from "..";

const data: LandingProps = {
  slug: "underlords",
  name: "The Underlords", // used for Token long name
  shortname: "Underlords", // used for sorter displays
  description: [
    "The Underlords are Resistance. They are fighting back to bring the power back in the Under Worlds.",
    "It is a project built by Nate, John and Giacomo with the support of the Avriality Team, the Zion Community and <invetors who wants to be added here need to buy at least 200 tokens>",
    `Long ago, the Intergalactic Empire (IGE) was erected to conquer or terraform all known galaxies in this universe. The IGE has been manipulating us using a technology that they control which allows them to freely access the multiverse and edit our universe to their liking.

    They have been our overlords, and we, to them, are nothing but livestock. Their reign has been unquestionable and their acts of violence gone unpunished — until now. The citizens of the IGE have suffered this oppression long enough!

    Freedom Fighters! If we don't take the multiverse back, our universe is lost! This is a call to action. Will you stand with us and resist the cruelties and war crimes of our oppressors?`,
  ],
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<[LandingProps]>
) {
  // const handler = new NextApiHandler("ram");
  res.send([data]);
  // handler.strategy(req, res, database);
}
