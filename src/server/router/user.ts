import { t } from '~/server/trpc'
import { Prisma } from '@prisma/client'
import { TRPCError } from '@trpc/server'
import { prisma } from '~/server/prisma'
import { zId, zUserProfile } from '~/utils/zodValidation'
import { z } from 'zod'

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

const getById = t.procedure.input(zId).query(async ({ input }) => {
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
})

const userProfileSelect = Prisma.validator<Prisma.UserSelect>()({
	profile: true,
})

const getUserProfile = t.procedure.input(zId).query(async ({ input }) => {
	const { id } = input
	try {
		const data = await prisma.user.findFirstOrThrow({
			where: { id },
			select: userProfileSelect,
		})
		const { profile } = data

		return profile
	} catch (error) {
		throw new TRPCError({
			code: 'NOT_FOUND',
			message: `${error}`,
		})
	}
})

const updateProfile = t.procedure
	.input(
		z.object({
			id: z.string(),
			profile: zUserProfile,
		})
	)
	.mutation(async ({ input }) => {
		try {
			const { id, profile } = input
			await prisma.user.update({
				where: { id },
				data: {
					profile,
				},
			})
		} catch (error) {
			throw new TRPCError({
				code: 'BAD_REQUEST',
				message: `${error}`,
			})
		}
	})

export const userRouter = t.router({
	getById,
	getUserProfile,
	updateProfile,
})
