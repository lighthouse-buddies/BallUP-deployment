import { prisma } from "../../../src/prisma";

export default async function getMyCourts(req, res) {
    const { userId } = req.body;
   

    const result = await prisma.court.findMany({
        where: {
            userId: userId
        }
    })

    res.json(result);
}