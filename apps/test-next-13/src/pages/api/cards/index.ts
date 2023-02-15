import { NextApiRequest, NextApiResponse } from "next";

export {};

import { CardApi } from "../../../components/Card";

const card1 = new CardApi({
  featureHeading: "Run your private cloud with Nextcloud.",
  paragraph_text: `An entirely self-hosted Google Drive replacement — store your documents, calendar, contacts, photos and videos on your Umbrel
  with Nextcloud instead of Google’s servers.`,
});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CardApi>
) {
  res.status(200).json(card1);
}
