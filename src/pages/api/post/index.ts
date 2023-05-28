import { NextApiRequest, NextApiResponse } from "next";
import { allPostsQuery } from "../../../utils/queries";
import client from "../../../utils/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const query = allPostsQuery();

    const data = await client.fetch(query);

    res.setHeader("Access-Control-Allow-Origin", "*"); // Set the Access-Control-Allow-Origin header to allow all origins
    res.status(200).json(data);
  } else if (req.method === "POST") {
    const doc = req.body;

    client.create(doc).then(() => {
      res.setHeader("Access-Control-Allow-Origin", "*"); // Set the Access-Control-Allow-Origin header to allow all origins
      res.status(200).json("视频已创建"); //video created
    });
  }
}
