import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

// brand /api/brand
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { name } = req.body;

  const session = await getSession({ req });
  const result = await prisma.brand.create({
    data: {
      name: name,
    },
  });
  res.json(result);
}
