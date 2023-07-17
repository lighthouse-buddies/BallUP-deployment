import { prisma } from "../../../src/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function createUser(req, res) {
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
        res.status(401).send("No permissions");
        return;
    }

    const { email } = req.body;
    if (!email) {
        res.status(400).send("Email is required");
        return;
    }

    try {
        // Check if a user with the same email already exists
        const count = await prisma.users.count({
            where: { email: email },
        });

        if (count > 0) {
            res.status(200).send("Success");
            return;
        }

        // Create a new user if no user with the same email exists
        const user = await prisma.users.create({
            data: {
                email: email,
                name: email,
            },
        });

        // Handle success
        res.status(200).send("Success");
    } catch (error) {
        // Handle error

        res.status(500).send("Internal Server Error");
    }
}
