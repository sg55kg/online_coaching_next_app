import {NextApiRequest, NextApiResponse} from "next";
import {prisma} from "../../auth/[...nextauth]";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'GET') {
        const { name }: Partial<{name: string}> = req.query
        const coaches = await prisma.user.findMany({
            where: {
                name: {
                    search: name
                },
                userType: 'COACH'
            }
        })
        res.status(200).json(coaches)
    }
}

export default handler