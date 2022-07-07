import { createRouter } from './helpers/createRouter'

import { ContactEmailFindUniqueSchema } from '../schemas/findUniqueContactEmail.schema'
import { ContactEmailFindFirstSchema } from '../schemas/findFirstContactEmail.schema'
import { ContactEmailFindManySchema } from '../schemas/findManyContactEmail.schema'
import { ContactEmailCreateSchema } from '../schemas/createOneContactEmail.schema'
import { ContactEmailDeleteOneSchema } from '../schemas/deleteOneContactEmail.schema'
import { ContactEmailUpdateOneSchema } from '../schemas/updateOneContactEmail.schema'
import { ContactEmailDeleteManySchema } from '../schemas/deleteManyContactEmail.schema'
import { ContactEmailUpdateManySchema } from '../schemas/updateManyContactEmail.schema'
import { ContactEmailUpsertSchema } from '../schemas/upsertOneContactEmail.schema'
import { ContactEmailAggregateSchema } from '../schemas/aggregateContactEmail.schema'
import { ContactEmailGroupBySchema } from '../schemas/groupByContactEmail.schema'

export const contactEmailsRouter = createRouter()
	.query('findUniqueContactEmail', {
		input: ContactEmailFindUniqueSchema,
		async resolve({ ctx, input }) {
			const findUniqueContactEmail = await ctx.prisma.contactemail.findUnique({
				where: input.where,
			})
			return findUniqueContactEmail
		},
	})

	.query('findFirstContactEmail', {
		input: ContactEmailFindFirstSchema,
		async resolve({ ctx, input }) {
			const findFirstContactEmail = await ctx.prisma.contactemail.findFirst(
				input
			)
			return findFirstContactEmail
		},
	})

	.query('findManyContactEmail', {
		input: ContactEmailFindManySchema,
		async resolve({ ctx, input }) {
			const findManyContactEmail = await ctx.prisma.contactemail.findMany(input)
			return findManyContactEmail
		},
	})

	.mutation('createOneContactEmail', {
		input: ContactEmailCreateSchema,
		async resolve({ ctx, input }) {
			const createOneContactEmail = await ctx.prisma.contactemail.create({
				data: input.data,
			})
			return createOneContactEmail
		},
	})

	.mutation('createManyContactEmail', {
		input: ContactEmailCreateSchema,
		async resolve({ ctx, input }) {
			const createManyContactEmail = await ctx.prisma.contactemail.createMany(
				input
			)
			return createManyContactEmail
		},
	})

	.mutation('deleteOneContactEmail', {
		input: ContactEmailDeleteOneSchema,
		async resolve({ ctx, input }) {
			const deleteOneContactEmail = await ctx.prisma.contactemail.delete({
				where: input.where,
			})
			return deleteOneContactEmail
		},
	})

	.mutation('updateOneContactEmail', {
		input: ContactEmailUpdateOneSchema,
		async resolve({ ctx, input }) {
			const updateOneContactEmail = await ctx.prisma.contactemail.update({
				where: input.where,
				data: input.data,
			})
			return updateOneContactEmail
		},
	})

	.mutation('deleteManyContactEmail', {
		input: ContactEmailDeleteManySchema,
		async resolve({ ctx, input }) {
			const deleteManyContactEmail = await ctx.prisma.contactemail.deleteMany(
				input
			)
			return deleteManyContactEmail
		},
	})

	.mutation('updateManyContactEmail', {
		input: ContactEmailUpdateManySchema,
		async resolve({ ctx, input }) {
			const updateManyContactEmail = await ctx.prisma.contactemail.updateMany(
				input
			)
			return updateManyContactEmail
		},
	})

	.mutation('upsertOneContactEmail', {
		input: ContactEmailUpsertSchema,
		async resolve({ ctx, input }) {
			const upsertOneContactEmail = await ctx.prisma.contactemail.upsert({
				where: input.where,
				create: input.create,
				update: input.update,
			})
			return upsertOneContactEmail
		},
	})

	.query('aggregateContactEmail', {
		input: ContactEmailAggregateSchema,
		async resolve({ ctx, input }) {
			const aggregateContactEmail = await ctx.prisma.contactemail.aggregate(
				input
			)
			return aggregateContactEmail
		},
	})

	.query('groupByContactEmail', {
		input: ContactEmailGroupBySchema,
		async resolve({ ctx, input }) {
			const groupByContactEmail = await ctx.prisma.contactemail.groupBy({
				where: input.where,
				orderBy: input.orderBy,
				by: input.by,
				having: input.having,
				take: input.take,
				skip: input.skip,
			})
			return groupByContactEmail
		},
	})

	.undefined('findContactEmailRaw', {
		input: undefined,
		async resolve({ ctx, input }) {
			const findContactEmailRaw = await ctx.prisma.contactemail.findRaw(input)
			return findContactEmailRaw
		},
	})

	.undefined('aggregateContactEmailRaw', {
		input: undefined,
		async resolve({ ctx, input }) {
			const aggregateContactEmailRaw =
				await ctx.prisma.contactemail.aggregateRaw(input)
			return aggregateContactEmailRaw
		},
	})
