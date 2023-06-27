import { NextApiResponse, NextApiRequest } from "next";

import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    await serverAuth(req, res);

    const movieCount = await prismadb.movie.count();
    const randomIntex = Math.floor(Math.random() * movieCount);

    const randomMovie = await prismadb.movie.findMany({
      take: 1,
      skip: randomIntex,
    });
    return res.status(200).json(randomMovie[0]);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
