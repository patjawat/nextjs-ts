import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  //   console.log(req.query);
  const { method } = req;
  switch (method) {
    case "GET":
      return res.status(200).json("Get Task ");
    case "PUT":
      return res.status(200).json("put");
      case "DELETE":
        return res.status(200).json("delete");
    default:
      return res.status(404).json("Method not allow");
  }
};
