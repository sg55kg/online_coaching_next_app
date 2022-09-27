import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import { PrismaClient } from '@prisma/client'
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const prisma = new PrismaClient()

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],

})