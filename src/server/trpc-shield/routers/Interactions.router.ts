import { createRouter } from './helpers/createRouter'

import { InteractionsFindUniqueSchema } from '../schemas/findUniqueInteractions.schema'
import { InteractionsFindFirstSchema } from '../schemas/findFirstInteractions.schema'
import { InteractionsFindManySchema } from '../schemas/findManyInteractions.schema'
import { InteractionsCreateSchema } from '../schemas/createOneInteractions.schema'
import { InteractionsDeleteOneSchema } from '../schemas/deleteOneInteractions.schema'
import { InteractionsUpdateOneSchema } from '../schemas/updateOneInteractions.schema'
import { InteractionsDeleteManySchema } from '../schemas/deleteManyInteractions.schema'
import { InteractionsUpdateManySchema } from '../schemas/updateManyInteractions.schema'
import { InteractionsUpsertSchema } from '../schemas/upsertOneInteractions.schema'
import { InteractionsAggregateSchema } from '../schemas/aggregateInteractions.schema'
import { InteractionsGroupBySchema } from '../schemas/groupByInteractions.schema'

export const interactionsRouter = createRouter()
	.query('findUniqueInteractions', {
		input: InteractionsFindUniqueSchema,
		async resolve({ ctx, input }) {
			const findUniqueInteractions = await ctx.prisma.interactions.findUnique({
				where: input.where,
			})
			return findUniqueInteractions
		},
	})

	.query('findFirstInteractions', {
		input: InteractionsFindFirstSchema,
		async resolve({ ctx, input }) {
			const findFirstInteractions = await ctx.prisma.interactions.findFirst(
				input
			)
			return findFirstInteractions
		},
	})

	.query('findManyInteractions', {
		input: InteractionsFindManySchema,
		async resolve({ ctx, input }) {
			const findManyInteractions = await ctx.prisma.interactions.findMany(input)
			return findManyInteractions
		},
	})

	.mutation('createOneInteractions', {
		input: InteractionsCreateSchema,
		async resolve({ ctx, input }) {
			const createOneInteractions = await ctx.prisma.interactions.create({
				data: input.data,
			})
			return createOneInteractions
		},
	})

	.mutation('createManyInteractions', {
		input: InteractionsCreateSchema,
		async resolve({ ctx, input }) {
			const createManyInteractions = await ctx.prisma.interactions.createMany(
				input
			)
			return createManyInteractions
		},
	})

	.mutation('deleteOneInteractions', {
		input: InteractionsDeleteOneSchema,
		async resolve({ ctx, input }) {
			const deleteOneInteractions = await ctx.prisma.interactions.delete({
				where: input.where,
			})
			return deleteOneInteractions
		},
	})

	.mutation('updateOneInteractions', {
		input: InteractionsUpdateOneSchema,
		async resolve({ ctx, input }) {
			const updateOneInteractions = await ctx.prisma.interactions.update({
				where: input.where,
				data: input.data,
			})
			return updateOneInteractions
		},
	})

	.mutation('deleteManyInteractions', {
		input: InteractionsDeleteManySchema,
		async resolve({ ctx, input }) {
			const deleteManyInteractions = await ctx.prisma.interactions.deleteMany(
				input
			)
			return deleteManyInteractions
		},
	})

	.mutation('updateManyInteractions', {
		input: InteractionsUpdateManySchema,
		async resolve({ ctx, input }) {
			const updateManyInteractions = await ctx.prisma.interactions.updateMany(
				input
			)
			return updateManyInteractions
		},
	})

	.mutation('upsertOneInteractions', {
		input: InteractionsUpsertSchema,
		async resolve({ ctx, input }) {
			const upsertOneInteractions = await ctx.prisma.interactions.upsert({
				where: input.where,
				create: input.create,
				update: input.update,
			})
			return upsertOneInteractions
		},
	})

	.query('aggregateInteractions', {
		input: InteractionsAggregateSchema,
		async resolve({ ctx, input }) {
			const aggregateInteractions = await ctx.prisma.interactions.aggregate(
				input
			)
			return aggregateInteractions
		},
	})

	.query('groupByInteractions', {
		input: InteractionsGroupBySchema,
		async resolve({ ctx, input }) {
			const groupByInteractions = await ctx.prisma.interactions.groupBy({
				where: input.where,
				orderBy: input.orderBy,
				by: input.by,
				having: input.having,
				take: input.take,
				skip: input.skip,
			})
			return groupByInteractions
		},
	})

	.undefined('findInteractionsRaw', {
		input: undefined,
		async resolve({ ctx, input }) {
			const findInteractionsRaw = await ctx.prisma.interactions.findRaw(input)
			return findInteractionsRaw
		},
	})

	.undefined('aggregateInteractionsRaw', {
		input: undefined,
		async resolve({ ctx, input }) {
			const aggregateInteractionsRaw =
				await ctx.prisma.interactions.aggregateRaw(input)
			return aggregateInteractionsRaw
		},
	})
