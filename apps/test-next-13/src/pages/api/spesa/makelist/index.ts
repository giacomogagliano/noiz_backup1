import { NextApiRequest, NextApiResponse } from "next";
import { counter } from "..";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json(counter);
}