import { prisma } from "../../../src/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function updateCourt(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).send('No permissions');
    return;
  }

  let {
    // userId, 
    markerId,
    address,
    description,

  } = req.body;
  // markerId = parseInt(markerId);
  let currDate = new Date();
  const isoDate = currDate.toISOString();

  try {
    const updateCourt = await prisma.courts.update({
      where: {
        // userId: userId,
        id: markerId,  // Parse the markerId as integer
      },
      data: {
        address: address,
        description: description,
        updatedAt: isoDate
      }
    });

    res.status(200).json({ updateCourt });

  } catch (error) {
    res.status(400).send(error.message);
    console.error(error);
  }
}
