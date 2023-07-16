import { prisma } from "../../../../src/prisma";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]";

export default async function deleteCourt(req, res) {
    const session = await getServerSession(req, res, authOptions)
    if (!session) {
      res.status(401).send('No permissions')
      return
    }
    
    const { markerId } = req.query;

    try {
        const deleteCourt = await prisma.courts.delete({
            where: {
                id: markerId,
            },
          })
        res.json(deleteCourt);
    } catch (error) {
        res.status(400).send(error.message);
    }
}