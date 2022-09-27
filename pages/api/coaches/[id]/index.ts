import {NextApiRequest, NextApiResponse} from "next";
import {prisma} from "../../auth/[...nextauth]";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'GET') {
        const { id }: Partial<any> = req.query
        console.log(id)
        const coach = await prisma.coach.findUnique({
            where: {
                userId: id
            },
            include: {
                teams: true,
                athletes: true
            }
        })
        res.status(200).json(coach)
    }
}

export default handler