import { prisma } from "../../../src/prisma";

export default async function deleteCourt(req, res) {
    const { markerId } = req.query;

    try {
        const deleteCourt = await prisma.court.delete({
            where: {
                id: markerId
            }
          })
        res.json(deleteCourt);
    } catch (error) {
        res.status(400).send(error.message);
    }
}