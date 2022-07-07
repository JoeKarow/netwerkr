import { createRouter } from './helpers/createRouter'

import { ContactPhoneFindUniqueSchema } from '../schemas/findUniqueContactPhone.schema'
import { ContactPhoneFindFirstSchema } from '../schemas/findFirstContactPhone.schema'
import { ContactPhoneFindManySchema } from '../schemas/findManyContactPhone.schema'
import { ContactPhoneCreateSchema } from '../schemas/createOneContactPhone.schema'
import { ContactPhoneDeleteOneSchema } from '../schemas/deleteOneContactPhone.schema'
import { ContactPhoneUpdateOneSchema } from '../schemas/updateOneContactPhone.schema'
import { ContactPhoneDeleteManySchema } from '../schemas/deleteManyContactPhone.schema'
import { ContactPhoneUpdateManySchema } from '../schemas/updateManyContactPhone.schema'
import { ContactPhoneUpsertSchema } from '../schemas/upsertOneContactPhone.schema'
import { ContactPhoneAggregateSchema } from '../schemas/aggregateContactPhone.schema'
import { ContactPhoneGroupBySchema } from '../schemas/groupByContactPhone.schema'

export const contactPhonesRouter = createRouter()
	.query('findUniqueContactPhone', {
		input: ContactPhoneFindUniqueSchema,
		async resolve({ ctx, input }) {
			const findUniqueContactPhone = await ctx.prisma.contactphone.findUnique({
				where: input.where,
			})
			return findUniqueContactPhone
		},
	})

	.query('findFirstContactPhone', {
		input: ContactPhoneFindFirstSchema,
		async resolve({ ctx, input }) {
			const findFirstContactPhone = await ctx.prisma.contactphone.findFirst(
				input
			)
			return findFirstContactPhone
		},
	})

	.query('findManyContactPhone', {
		input: ContactPhoneFindManySchema,
		async resolve({ ctx, input }) {
			const findManyContactPhone = await ctx.prisma.contactphone.findMany(input)
			return findManyContactPhone
		},
	})

	.mutation('createOneContactPhone', {
		input: ContactPhoneCreateSchema,
		async resolve({ ctx, input }) {
			const createOneContactPhone = await ctx.prisma.contactphone.create({
				data: input.data,
			})
			return createOneContactPhone
		},
	})

	.mutation('createManyContactPhone', {
		input: ContactPhoneCreateSchema,
		async resolve({ ctx, input }) {
			const createManyContactPhone = await ctx.prisma.contactphone.createMany(
				input
			)
			return createManyContactPhone
		},
	})

	.mutation('deleteOneContactPhone', {
		input: ContactPhoneDeleteOneSchema,
		async resolve({ ctx, input }) {
			const deleteOneContactPhone = await ctx.prisma.contactphone.delete({
				where: input.where,
			})
			return deleteOneContactPhone
		},
	})

	.mutation('updateOneContactPhone', {
		input: ContactPhoneUpdateOneSchema,
		async resolve({ ctx, input }) {
			const updateOneContactPhone = await ctx.prisma.contactphone.update({
				where: input.where,
				data: input.data,
			})
			return updateOneContactPhone
		},
	})

	.mutation('deleteManyContactPhone', {
		input: ContactPhoneDeleteManySchema,
		async resolve({ ctx, input }) {
			const deleteManyContactPhone = await ctx.prisma.contactphone.deleteMany(
				input
			)
			return deleteManyContactPhone
		},
	})

	.mutation('updateManyContactPhone', {
		input: ContactPhoneUpdateManySchema,
		async resolve({ ctx, input }) {
			const updateManyContactPhone = await ctx.prisma.contactphone.updateMany(
				input
			)
			return updateManyContactPhone
		},
	})

	.mutation('upsertOneContactPhone', {
		input: ContactPhoneUpsertSchema,
		async resolve({ ctx, input }) {
			const upsertOneContactPhone = await ctx.prisma.contactphone.upsert({
				where: input.where,
				create: input.create,
				update: input.update,
			})
			return upsertOneContactPhone
		},
	})

	.query('aggregateContactPhone', {
		input: ContactPhoneAggregateSchema,
		async resolve({ ctx, input }) {
			const aggregateContactPhone = await ctx.prisma.contactphone.aggregate(
				input
			)
			return aggregateContactPhone
		},
	})

	.query('groupByContactPhone', {
		input: ContactPhoneGroupBySchema,
		async resolve({ ctx, input }) {
			const groupByContactPhone = await ctx.prisma.contactphone.groupBy({
				where: input.where,
				orderBy: input.orderBy,
				by: input.by,
				having: input.having,
				take: input.take,
				skip: input.skip,
			})
			return groupByContactPhone
		},
	})

	.undefined('findContactPhoneRaw', {
		input: undefined,
		async resolve({ ctx, input }) {
			const findContactPhoneRaw = await ctx.prisma.contactphone.findRaw(input)
			return findContactPhoneRaw
		},
	})

	.undefined('aggregateContactPhoneRaw', {
		input: undefined,
		async resolve({ ctx, input }) {
			const aggregateContactPhoneRaw =
				await ctx.prisma.contactphone.aggregateRaw(input)
			return aggregateContactPhoneRaw
		},
	})
