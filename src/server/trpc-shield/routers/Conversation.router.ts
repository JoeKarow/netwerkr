import { createRouter } from './helpers/createRouter'

import { ConversationFindUniqueSchema } from '../schemas/findUniqueConversation.schema'
import { ConversationFindFirstSchema } from '../schemas/findFirstConversation.schema'
import { ConversationFindManySchema } from '../schemas/findManyConversation.schema'
import { ConversationCreateSchema } from '../schemas/createOneConversation.schema'
import { ConversationDeleteOneSchema } from '../schemas/deleteOneConversation.schema'
import { ConversationUpdateOneSchema } from '../schemas/updateOneConversation.schema'
import { ConversationDeleteManySchema } from '../schemas/deleteManyConversation.schema'
import { ConversationUpdateManySchema } from '../schemas/updateManyConversation.schema'
import { ConversationUpsertSchema } from '../schemas/upsertOneConversation.schema'
import { ConversationAggregateSchema } from '../schemas/aggregateConversation.schema'
import { ConversationGroupBySchema } from '../schemas/groupByConversation.schema'

export const conversationsRouter = createRouter()
	.query('findUniqueConversation', {
		input: ConversationFindUniqueSchema,
		async resolve({ ctx, input }) {
			const findUniqueConversation = await ctx.prisma.conversation.findUnique({
				where: input.where,
			})
			return findUniqueConversation
		},
	})

	.query('findFirstConversation', {
		input: ConversationFindFirstSchema,
		async resolve({ ctx, input }) {
			const findFirstConversation = await ctx.prisma.conversation.findFirst(
				input
			)
			return findFirstConversation
		},
	})

	.query('findManyConversation', {
		input: ConversationFindManySchema,
		async resolve({ ctx, input }) {
			const findManyConversation = await ctx.prisma.conversation.findMany(input)
			return findManyConversation
		},
	})

	.mutation('createOneConversation', {
		input: ConversationCreateSchema,
		async resolve({ ctx, input }) {
			const createOneConversation = await ctx.prisma.conversation.create({
				data: input.data,
			})
			return createOneConversation
		},
	})

	.mutation('createManyConversation', {
		input: ConversationCreateSchema,
		async resolve({ ctx, input }) {
			const createManyConversation = await ctx.prisma.conversation.createMany(
				input
			)
			return createManyConversation
		},
	})

	.mutation('deleteOneConversation', {
		input: ConversationDeleteOneSchema,
		async resolve({ ctx, input }) {
			const deleteOneConversation = await ctx.prisma.conversation.delete({
				where: input.where,
			})
			return deleteOneConversation
		},
	})

	.mutation('updateOneConversation', {
		input: ConversationUpdateOneSchema,
		async resolve({ ctx, input }) {
			const updateOneConversation = await ctx.prisma.conversation.update({
				where: input.where,
				data: input.data,
			})
			return updateOneConversation
		},
	})

	.mutation('deleteManyConversation', {
		input: ConversationDeleteManySchema,
		async resolve({ ctx, input }) {
			const deleteManyConversation = await ctx.prisma.conversation.deleteMany(
				input
			)
			return deleteManyConversation
		},
	})

	.mutation('updateManyConversation', {
		input: ConversationUpdateManySchema,
		async resolve({ ctx, input }) {
			const updateManyConversation = await ctx.prisma.conversation.updateMany(
				input
			)
			return updateManyConversation
		},
	})

	.mutation('upsertOneConversation', {
		input: ConversationUpsertSchema,
		async resolve({ ctx, input }) {
			const upsertOneConversation = await ctx.prisma.conversation.upsert({
				where: input.where,
				create: input.create,
				update: input.update,
			})
			return upsertOneConversation
		},
	})

	.query('aggregateConversation', {
		input: ConversationAggregateSchema,
		async resolve({ ctx, input }) {
			const aggregateConversation = await ctx.prisma.conversation.aggregate(
				input
			)
			return aggregateConversation
		},
	})

	.query('groupByConversation', {
		input: ConversationGroupBySchema,
		async resolve({ ctx, input }) {
			const groupByConversation = await ctx.prisma.conversation.groupBy({
				where: input.where,
				orderBy: input.orderBy,
				by: input.by,
				having: input.having,
				take: input.take,
				skip: input.skip,
			})
			return groupByConversation
		},
	})

	.undefined('findConversationRaw', {
		input: undefined,
		async resolve({ ctx, input }) {
			const findConversationRaw = await ctx.prisma.conversation.findRaw(input)
			return findConversationRaw
		},
	})

	.undefined('aggregateConversationRaw', {
		input: undefined,
		async resolve({ ctx, input }) {
			const aggregateConversationRaw =
				await ctx.prisma.conversation.aggregateRaw(input)
			return aggregateConversationRaw
		},
	})
