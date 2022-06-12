import NextAuth from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "@joekarow/netwerkr-lib/mongodb"
import TwitterProvider from 'next-auth/providers/twitter'
// require( 'dotenv' ).config( {
//     path: '@joekarow/netwerkr-config/.env.local'
// } )

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options

// mongo connected?

export default NextAuth( {
    adapter: MongoDBAdapter( clientPromise ),
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

