import { prisma } from "../auth/[...nextauth]";

const handler = async (req, res) => {
    if(req.method === 'GET') {
        const {email} = req.query
        console.log(email)
        const user = await prisma.user.findFirst({
            where: {
                email: email
            }
        })
        if (user) {
            console.log(user)
            res.status(200).json(user)
        } else {
            res.status(404)
        }
    }
    if(req.method === 'PUT') {

        const { email }: Partial<{email: string}> = req.query
        const { user } = req.body

        const updatedUser = await prisma.user.update({
            where: { email: email },
            data: user
        })

        res.status(200).json(updatedUser)
    }
}

export default handler