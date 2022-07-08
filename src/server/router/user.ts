import { t } from '~/server/trpc'
import { Prisma } from '@prisma/client'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'
import { prisma } from '~/server/prisma'

const defaultUserSelect = Prisma.validator<Prisma.UserSelect>()({
	id: true,
	name: true,
	email: true,
	emailVerified: true,
	image: true,
	twitterList: true,
	contacts: false,
	profile: true,
})

export const userRouter = t.router({
	getById: t.procedure
		.input(
			z.object({
				id: z.string(),
			})
		)
		.query(async ({ input }) => {
			const { id } = input
			try {
				const data = await prisma.user.findFirstOrThrow({
					where: { id },
					select: defaultUserSelect,
				})
				return data
			} catch (error) {
				throw new TRPCError({
					code: 'NOT_FOUND',
					message: `${error}`,
				})
			}
		}),
})
