import type { NextApiRequest, NextApiResponse } from "next";

import { allUsersQuery } from "./../../utils/queries";
import client from "../../utils/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const doc = req.body;

  client.createIfNotExists(doc).then(() => {
    res.status(200).json("登陆成功"); //login successful
  });
}
