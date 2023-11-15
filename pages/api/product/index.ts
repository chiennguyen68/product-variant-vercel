import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

// product /api/product
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { title, price } = req.body;

  const session = await getSession({ req });
  const result = await prisma.product.create({
    data: {
      title: title,
      price: price,
      // author: { connect: { email: session?.user?.email } },
    },
  });
  res.json(result);
}
