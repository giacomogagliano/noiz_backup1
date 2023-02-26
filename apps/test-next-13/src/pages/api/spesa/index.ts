import { NextApiRequest, NextApiResponse } from "next";
import { SpesaApplication } from "./Spesa";

export let counter = 0;
export let spesaApp = new SpesaApplication();

function handleAction(req: NextApiRequest, res: NextApiResponse) {
  let respondeCounter = (counter: number) => res.status(200).json(counter);
  if (req.body.action === "plus") counter++ && respondeCounter(counter);
  else if (req.body.action === "minus") counter-- && respondeCounter(counter);
  else res.status(200).json("not recognized");
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    if ("action" in req.body) handleAction(req, res);
    else res.status(200).json("POST");
  } else {
    res.status(200).json(req.body);
  }
}
