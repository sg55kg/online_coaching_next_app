import {NextApiRequest, NextApiResponse} from "next";
import {prisma} from "../auth/[...nextauth]";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'POST') {
        // const program = await prisma.program.create({
        //
        // })
    }
}

export default handler