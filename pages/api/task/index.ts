// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.method, req.url);

  const { method } = req;
  switch (method) {
    case "GET":
      return res.status(200).json("Get Task ");
    case "POST":
      const { title,des } = req.body;
      return res.status(200).json("Create",);
    default:
      return res.status(200).json("Invalid Method");
  }
};
