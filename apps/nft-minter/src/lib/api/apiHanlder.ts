import { NextApiRequest, NextApiResponse } from "next";

export interface nextApiHandler {
  <T>(req: NextApiRequest, res: NextApiResponse<T>, data: T): void;
}
export const nextApiHandler: nextApiHandler = (req, res, data) => {
  res.status(200).json(data);
};

export enum NextApiStrategy {
  ram,
  database,
}
export type NextApiStrategiesTypes = keyof typeof NextApiStrategy;

/**
 * Helper class to filter type of storages from which next
 * will retrieve the datas from.
 */
export class NextApiHandler {
  strategy: nextApiHandler;
  constructor(strategy: NextApiStrategiesTypes) {
    if (strategy === "ram") this.strategy = nextApiHandler;
  }
}
