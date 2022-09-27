import {NextApiRequest, NextApiResponse} from "next";
import {prisma} from "../auth/[...nextauth]";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'POST') {
        const { coach } = req.body

        const savedCoach = await prisma.coach.create({
            data: coach
        })
        res.status(200).json(savedCoach)
    }
    if(req.method === 'GET') {
        const coaches = await prisma.coach.findMany()
        console.log(coaches)
    }
}

export default handler