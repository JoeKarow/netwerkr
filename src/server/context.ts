// src/server/router/context.ts
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from '@prisma/client'
import * as trpc from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'
import {
	unstable_getServerSession as getServerSession,
	Session,
} from 'next-auth'
import { authOptions as nextAuthOptions } from '~/pages/api/auth/[...nextauth]'
import { prisma } from '~/server/prisma'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CreateContextOptions {
	session: Session | null
	prisma: PrismaClient
}

export async function createContextInner(_opts: CreateContextOptions) {
	return {}
}

export type Context = trpc.inferAsyncReturnType<typeof createContextInner>

export const createContext = async (
	opts?: trpcNext.CreateNextContextOptions
): Promise<Context> => {
	if (!opts) return await createContextInner({ session: null, prisma })

	const { req, res } = opts

	const session =
		req && res && (await getServerSession(req, res, nextAuthOptions))

	return await createContextInner({ session, prisma })
}
