import { createRouter } from './helpers/createRouter'

import { ContactFindUniqueSchema } from '../schemas/findUniqueContact.schema'
import { ContactFindFirstSchema } from '../schemas/findFirstContact.schema'
import { ContactFindManySchema } from '../schemas/findManyContact.schema'
import { ContactCreateSchema } from '../schemas/createOneContact.schema'
import { ContactDeleteOneSchema } from '../schemas/deleteOneContact.schema'
import { ContactUpdateOneSchema } from '../schemas/updateOneContact.schema'
import { ContactDeleteManySchema } from '../schemas/deleteManyContact.schema'
import { ContactUpdateManySchema } from '../schemas/updateManyContact.schema'
import { ContactUpsertSchema } from '../schemas/upsertOneContact.schema'
import { ContactAggregateSchema } from '../schemas/aggregateContact.schema'
import { ContactGroupBySchema } from '../schemas/groupByContact.schema'

export const contactsRouter = createRouter()
	.query('findUniqueContact', {
		input: ContactFindUniqueSchema,
		async resolve({ ctx, input }) {
			const findUniqueContact = await ctx.prisma.contact.findUnique({
				where: input.where,
			})
			return findUniqueContact
		},
	})

	.query('findFirstContact', {
		input: ContactFindFirstSchema,
		async resolve({ ctx, input }) {
			const findFirstContact = await ctx.prisma.contact.findFirst(input)
			return findFirstContact
		},
	})

	.query('findManyContact', {
		input: ContactFindManySchema,
		async resolve({ ctx, input }) {
			const findManyContact = await ctx.prisma.contact.findMany(input)
			return findManyContact
		},
	})

	.mutation('createOneContact', {
		input: ContactCreateSchema,
		async resolve({ ctx, input }) {
			const createOneContact = await ctx.prisma.contact.create({
				data: input.data,
			})
			return createOneContact
		},
	})

	.mutation('createManyContact', {
		input: ContactCreateSchema,
		async resolve({ ctx, input }) {
			const createManyContact = await ctx.prisma.contact.createMany(input)
			return createManyContact
		},
	})

	.mutation('deleteOneContact', {
		input: ContactDeleteOneSchema,
		async resolve({ ctx, input }) {
			const deleteOneContact = await ctx.prisma.contact.delete({
				where: input.where,
			})
			return deleteOneContact
		},
	})

	.mutation('updateOneContact', {
		input: ContactUpdateOneSchema,
		async resolve({ ctx, input }) {
			const updateOneContact = await ctx.prisma.contact.update({
				where: input.where,
				data: input.data,
			})
			return updateOneContact
		},
	})

	.mutation('deleteManyContact', {
		input: ContactDeleteManySchema,
		async resolve({ ctx, input }) {
			const deleteManyContact = await ctx.prisma.contact.deleteMany(input)
			return deleteManyContact
		},
	})

	.mutation('updateManyContact', {
		input: ContactUpdateManySchema,
		async resolve({ ctx, input }) {
			const updateManyContact = await ctx.prisma.contact.updateMany(input)
			return updateManyContact
		},
	})

	.mutation('upsertOneContact', {
		input: ContactUpsertSchema,
		async resolve({ ctx, input }) {
			const upsertOneContact = await ctx.prisma.contact.upsert({
				where: input.where,
				create: input.create,
				update: input.update,
			})
			return upsertOneContact
		},
	})

	.query('aggregateContact', {
		input: ContactAggregateSchema,
		async resolve({ ctx, input }) {
			const aggregateContact = await ctx.prisma.contact.aggregate(input)
			return aggregateContact
		},
	})

	.query('groupByContact', {
		input: ContactGroupBySchema,
		async resolve({ ctx, input }) {
			const groupByContact = await ctx.prisma.contact.groupBy({
				where: input.where,
				orderBy: input.orderBy,
				by: input.by,
				having: input.having,
				take: input.take,
				skip: input.skip,
			})
			return groupByContact
		},
	})

	.undefined('findContactRaw', {
		input: undefined,
		async resolve({ ctx, input }) {
			const findContactRaw = await ctx.prisma.contact.findRaw(input)
			return findContactRaw
		},
	})

	.undefined('aggregateContactRaw', {
		input: undefined,
		async resolve({ ctx, input }) {
			const aggregateContactRaw = await ctx.prisma.contact.aggregateRaw(input)
			return aggregateContactRaw
		},
	})
