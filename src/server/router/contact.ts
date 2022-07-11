import { t } from '~/server/trpc'
import { Prisma } from '@prisma/client'
import { TRPCError } from '@trpc/server'
import { prisma } from '~/server/prisma'
import { zId } from '~/utils/zodValidation'
import { z } from 'zod'
// import { z } from 'zod'

const defaultContactSelect = Prisma.validator<Prisma.ContactSelect>()({
	id: true,
	firstName: true,
	lastName: true,
	email: true,
	phone: true,
	photo: true,
	socialMedia: true,
	interactions: true,
	onTwitterList: true,
})

const allContactSelect = Prisma.validator<Prisma.ContactSelect>()({
	id: true,
	firstName: true,
	lastName: true,
	email: true,
	phone: true,
	photo: true,
	socialMedia: true,
	onTwitterList: true,
})

const getAllContacts = t.procedure.input(zId).query(async ({ input }) => {
	try {
		const { id } = input
		const contacts = await prisma.contact.findMany({
			where: {
				associatedUserId: id,
			},
			select: allContactSelect,
		})
		return contacts
	} catch (error) {
		throw new TRPCError({
			code: 'NOT_FOUND',
			message: `${error}`,
		})
	}
})

const getContact = t.procedure
	.input(
		z.object({
			id: z.string(),
			associatedUserId: z.string(),
		})
	)
	.query(async ({ input }) => {
		try {
			const { id, associatedUserId } = input
			const contact = await prisma.contact.findFirst({
				where: {
					id,
					associatedUserId,
				},
				select: defaultContactSelect,
			})
			return contact
		} catch (error) {
			throw new TRPCError({
				code: 'NOT_FOUND',
				message: `${error}`,
			})
		}
	})

export const contactRouter = t.router({
	getAllContacts,
	getContact,
})
