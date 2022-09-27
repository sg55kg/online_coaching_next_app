import {prisma} from "../auth/[...nextauth]";


const getAll = async (req, res) => {

    const users = await prisma.user.findMany()
    return res.status(200).json(users) //test
}

export default getAll