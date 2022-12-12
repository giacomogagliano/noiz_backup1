import { NextApiRequest, NextApiResponse } from "next";

export interface simpleHandler {
  <T>(req: NextApiRequest, res: NextApiResponse<T>, data: T): void;
}
export const simpleHandler: simpleHandler = (req, res, data) => {
  res.status(200).json(data);
};
