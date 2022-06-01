import type { NextApiRequest, NextApiResponse } from "next";

export default async function Data(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch(
    "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product"
  );

  res.status(200).json(await response.json());
}
