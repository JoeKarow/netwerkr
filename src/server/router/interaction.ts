import { t } from '~/server/trpc'
// import { Prisma } from '@prisma/client'
import { TRPCError } from '@trpc/server'
import { prisma } from '~/server/prisma'
import { z } from 'zod'

// const defaultInteractionSelect = Prisma.validator<Prisma.InteractionsSelect>()({
// 	source: true,
// 	sourceSocial: true,
// 	time: true,
// 	content: true,
// 	extPostId: true,
// 	conversation: true,
// })

const getAllInteractions = t.procedure
	.input(
		z.object({
			contactId: z.string(),
			associatedUserId: z.string(),
		})
	)
	.query(async ({ input }) => {
		try {
			const { contactId, associatedUserId } = input
			const queryData = await prisma.contact.findFirst({
				where: {
					id: contactId,
					associatedUserId,
				},
				select: {
					interactions: true,
				},
			})

			return queryData?.interactions
		} catch (error) {
			throw new TRPCError({
				code: 'NOT_FOUND',
				message: `${error}`,
			})
		}
	})

export const interactionsRouter = t.router({
	getAllInteractions,
})
