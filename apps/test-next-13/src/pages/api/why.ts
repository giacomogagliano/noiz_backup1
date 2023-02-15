import type { NextApiRequest, NextApiResponse } from "next";

const heading = `De-google yourself.`;
const paragraph_a = `All of our interactions on the internet today are mediated by a few companies who offer “free” services in exchange for storing our data on their servers to spy on us.`;
const paragraph_b = `Running a personal server fundamentally changes that. You and your family’s photos, videos, files, notes, passwords — everything, have nothing to do with someone else’s computer. They’re a part of your private life, and now they can all be stored by you, on your personal server.`;
const videoHref = "https://www.youtube.com/watch?v=kmSs2YLChng&t=11s";
const iconSrc = "https://i.imgur.com/trXdlO5.png";
const videoSrc = "https://i.imgur.com/JFknZrb.mp4";

export type WhyData = {
  heading: string;
  paragraph: { a: string; b: string };
  videoHref: string;
  iconSrc: string;
  videoSrc: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<WhyData>
) {
  res.status(200).json({
    heading,
    videoHref,
    iconSrc,
    videoSrc,
    paragraph: { a: paragraph_a, b: paragraph_b },
  });
}
