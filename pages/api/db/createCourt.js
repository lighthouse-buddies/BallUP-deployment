import { prisma } from "../../../src/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";


export default async function createCourt(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).send('No permissions');
    return;
  }

  const {
    id,

    lat,
    lng,
    address,
    description,

  } = req.body;
  
  let currDate = new Date();
  const isoDate = currDate.toISOString();

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
        user: {
          connect: {
            email: session.user.email // assuming session contains the user's email
          },
        },
        
      },
    });
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
