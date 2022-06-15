import NextAuth from "next-auth"
import TwitterProvider from 'next-auth/providers/twitter'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"


// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options


const prisma = new PrismaClient()

export default NextAuth( {
    adapter: PrismaAdapter( prisma ),
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        TwitterProvider( {
            clientId: process.env.TWITTER_ID,
            clientSecret: process.env.TWITTER_SECRET,
            version: "2.0",
        } )
    ],
    session: {
        maxAge: 7 * 24 * 60 * 60, // 7 days
        updateAge: 24 * 60 * 60 // 24 hours
    },
    debug: true,
} )

