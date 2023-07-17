import { prisma } from "../../../src/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function createCourt(req, res) {
  try {
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      res.status(401).send("No permissions");
      return;
    }

    const { lat, lng, address, description } = req.body;

    const user = await prisma.users.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!user) {
      res.status(400).send("User not found");
      return;
    }

    const currentDate = new Date();
    const isoDate = currentDate.toISOString();

    try {
      const result = await prisma.courts.create({
        data: {
          latitude: lat,
          longitude: lng,
          number_backboard: 2,
          lights: false,
          full_court: false,
          createdAt: isoDate,
          updatedAt: isoDate,
          address: address,
          description: description,
          userId: user.id,
        },
      });

      res.status(200).json({ result });
    } catch (createError) {
      throw new Error(`Failed to create court: ${createError.message}`);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
