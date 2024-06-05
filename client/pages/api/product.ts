import { NextApiRequest, NextApiResponse } from "next";
import productsData from "../../../server/db";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(productsData);
};
