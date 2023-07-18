import { prisma } from "../../../src/prisma";

export default async function getAllCourts(req, res) {
    

    const result = await prisma.court.findMany({
        
      })

    res.json(result);
}