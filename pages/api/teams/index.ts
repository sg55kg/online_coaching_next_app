import {NextApiRequest, NextApiResponse} from "next";
import {prisma} from "../auth/[...nextauth]";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'POST') {
        const { team } = req.body
        console.log('TEAM', team)
        const savedTeam = await prisma.team.create({
            data: team
        })
        res.status(200).json(savedTeam)
    }
}

export default handler