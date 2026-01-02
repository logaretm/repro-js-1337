import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Simulate some async work
    await new Promise((resolve) => setTimeout(resolve, 100));

    throw new Error("Pages Router: API POST handler error");
  }

  if (req.method === "GET") {
    throw new Error("Pages Router: API GET handler error");
  }

  res.status(405).json({ error: "Method not allowed" });
}

