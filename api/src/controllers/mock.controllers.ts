import { Request, Response } from "express";

/**
 * For MOCK API creation, we need these info
 * body {
 *   endpoint: string
 *   response: unknown
 * }
 * method: GET | POST | PUT | DELETE
 * @param res
 * @returns
 */
export const create = (req: Request, res: Response) => {
  const {} = req.body;
  res.status(200).json({ message: "Mock endpoint created", body: req.body });
};

export const access = (req: Request, res: Response) => {
  const { endpoint, id } = req.params;
  const { method } = req;

  res.status(200).json({ endpoint, id, method });
};
