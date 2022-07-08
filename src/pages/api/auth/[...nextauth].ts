import NextAuth, { type NextAuthOptions } from 'next-auth'
import TwitterProvider from 'next-auth/providers/twitter'

// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '~/server/db/client'

export const authOptions: NextAuthOptions = {
	// Configure one or more authentication providers
	adapter: PrismaAdapter(prisma),
	providers: [
		TwitterProvider({
			clientId: process.env.TWITTER_ID as string,
			clientSecret: process.env.TWITTER_SECRET as string,
			version: '2.0',
			authorization: {
				params: {
					scope: 'tweet.read users.read list.read list.write offline.access',
				},
			},
		}),
		// ...add more providers here
	],
	session: {
		maxAge: 7 * 24 * 60 * 60, // 7 days
		updateAge: 24 * 60 * 60, // 24 hours
	},
	callbacks: {
		async session({ session, user }) {
			session.user.id = user.id
			session.user.role = user.role
			return session
		},
		async signIn({ user, account, profile }) {
			if (user.disabled) return false
			// if ( !user.profileId ) return `/dash/profile/`
			return true
		},
	},
	events: {
		// async createUser ( { user } ) {
		//     user.profileCompleted = false;
		//     console.log( 'create user called' )
		//     console.table( user )
		//     return user
		// }
	},
}

export default NextAuth(authOptions)
