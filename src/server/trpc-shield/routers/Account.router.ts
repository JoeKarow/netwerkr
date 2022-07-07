import { createRouter } from './helpers/createRouter'

import { AccountFindUniqueSchema } from '../schemas/findUniqueAccount.schema'
import { AccountFindFirstSchema } from '../schemas/findFirstAccount.schema'
import { AccountFindManySchema } from '../schemas/findManyAccount.schema'
import { AccountCreateSchema } from '../schemas/createOneAccount.schema'
import { AccountDeleteOneSchema } from '../schemas/deleteOneAccount.schema'
import { AccountUpdateOneSchema } from '../schemas/updateOneAccount.schema'
import { AccountDeleteManySchema } from '../schemas/deleteManyAccount.schema'
import { AccountUpdateManySchema } from '../schemas/updateManyAccount.schema'
import { AccountUpsertSchema } from '../schemas/upsertOneAccount.schema'
import { AccountAggregateSchema } from '../schemas/aggregateAccount.schema'
import { AccountGroupBySchema } from '../schemas/groupByAccount.schema'

export const accountsRouter = createRouter()
	.query('findUniqueAccount', {
		input: AccountFindUniqueSchema,
		async resolve({ ctx, input }) {
			const findUniqueAccount = await ctx.prisma.account.findUnique({
				where: input.where,
			})
			return findUniqueAccount
		},
	})

	.query('findFirstAccount', {
		input: AccountFindFirstSchema,
		async resolve({ ctx, input }) {
			const findFirstAccount = await ctx.prisma.account.findFirst(input)
			return findFirstAccount
		},
	})

	.query('findManyAccount', {
		input: AccountFindManySchema,
		async resolve({ ctx, input }) {
			const findManyAccount = await ctx.prisma.account.findMany(input)
			return findManyAccount
		},
	})

	.mutation('createOneAccount', {
		input: AccountCreateSchema,
		async resolve({ ctx, input }) {
			const createOneAccount = await ctx.prisma.account.create({
				data: input.data,
			})
			return createOneAccount
		},
	})

	.mutation('createManyAccount', {
		input: AccountCreateSchema,
		async resolve({ ctx, input }) {
			const createManyAccount = await ctx.prisma.account.createMany(input)
			return createManyAccount
		},
	})

	.mutation('deleteOneAccount', {
		input: AccountDeleteOneSchema,
		async resolve({ ctx, input }) {
			const deleteOneAccount = await ctx.prisma.account.delete({
				where: input.where,
			})
			return deleteOneAccount
		},
	})

	.mutation('updateOneAccount', {
		input: AccountUpdateOneSchema,
		async resolve({ ctx, input }) {
			const updateOneAccount = await ctx.prisma.account.update({
				where: input.where,
				data: input.data,
			})
			return updateOneAccount
		},
	})

	.mutation('deleteManyAccount', {
		input: AccountDeleteManySchema,
		async resolve({ ctx, input }) {
			const deleteManyAccount = await ctx.prisma.account.deleteMany(input)
			return deleteManyAccount
		},
	})

	.mutation('updateManyAccount', {
		input: AccountUpdateManySchema,
		async resolve({ ctx, input }) {
			const updateManyAccount = await ctx.prisma.account.updateMany(input)
			return updateManyAccount
		},
	})

	.mutation('upsertOneAccount', {
		input: AccountUpsertSchema,
		async resolve({ ctx, input }) {
			const upsertOneAccount = await ctx.prisma.account.upsert({
				where: input.where,
				create: input.create,
				update: input.update,
			})
			return upsertOneAccount
		},
	})

	.query('aggregateAccount', {
		input: AccountAggregateSchema,
		async resolve({ ctx, input }) {
			const aggregateAccount = await ctx.prisma.account.aggregate(input)
			return aggregateAccount
		},
	})

	.query('groupByAccount', {
		input: AccountGroupBySchema,
		async resolve({ ctx, input }) {
			const groupByAccount = await ctx.prisma.account.groupBy({
				where: input.where,
				orderBy: input.orderBy,
				by: input.by,
				having: input.having,
				take: input.take,
				skip: input.skip,
			})
			return groupByAccount
		},
	})

	.undefined('findAccountRaw', {
		input: undefined,
		async resolve({ ctx, input }) {
			const findAccountRaw = await ctx.prisma.account.findRaw(input)
			return findAccountRaw
		},
	})

	.undefined('aggregateAccountRaw', {
		input: undefined,
		async resolve({ ctx, input }) {
			const aggregateAccountRaw = await ctx.prisma.account.aggregateRaw(input)
			return aggregateAccountRaw
		},
	})
