import { NextApiRequest, NextApiResponse } from "next";
import {conn} from '../../utils/PgConnect'
export default async (req: NextApiRequest, res: NextApiResponse) => {
    // const response = await conn.query("select now()");
    // console.log(response);
    const response = await conn.query("SELECT NOW()");
    console.log(response.rows);
        //return res.status(200).send("pong");
};
