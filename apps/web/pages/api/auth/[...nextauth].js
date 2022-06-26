import NextAuth from "next-auth"
import TwitterProvider from 'next-auth/providers/twitter'
import Auth0Provider from 'next-auth/providers/auth0'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
// import { PrismaClient } from '@joekarow/netwerkr-lib/prisma'
import prisma from '../../../prisma'
// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options

// const prisma = new PrismaClient()


export default NextAuth( {
    adapter: PrismaAdapter( prisma ),
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        TwitterProvider( {
            clientId: process.env.TWITTER_ID,
            clientSecret: process.env.TWITTER_SECRET,
            version: "2.0",
            authorization: {
                params: {
                    scope: 'tweet.read users.read list.read list.write offline.access'
                }
            },
        } ),
        Auth0Provider( {
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            issuer: process.env.AUTH0_ISSUER
        } )
    ],
    session: {
        maxAge: 7 * 24 * 60 * 60, // 7 days
        updateAge: 24 * 60 * 60 // 24 hours
    },
    callbacks: {
        async session ( { session, user } ) {
            session.user.id = user.id
            session.user.role = user.role
            return session
        },
        async signIn ( { user, account, profile } ) {
            if ( user.disabled ) return false
            // if ( !user.profileId ) return `/dash/profile/`
            return true

        }
    },
    events: {
        // async createUser ( { user } ) {
        //     user.profileCompleted = false;
        //     console.log( 'create user called' )
        //     console.table( user )
        //     return user
        // }
    },


    debug: true,
} )

