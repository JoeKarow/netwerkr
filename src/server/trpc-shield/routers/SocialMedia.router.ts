import { createRouter } from './helpers/createRouter'

import { SocialMediaFindUniqueSchema } from '../schemas/findUniqueSocialMedia.schema'
import { SocialMediaFindFirstSchema } from '../schemas/findFirstSocialMedia.schema'
import { SocialMediaFindManySchema } from '../schemas/findManySocialMedia.schema'
import { SocialMediaCreateSchema } from '../schemas/createOneSocialMedia.schema'
import { SocialMediaDeleteOneSchema } from '../schemas/deleteOneSocialMedia.schema'
import { SocialMediaUpdateOneSchema } from '../schemas/updateOneSocialMedia.schema'
import { SocialMediaDeleteManySchema } from '../schemas/deleteManySocialMedia.schema'
import { SocialMediaUpdateManySchema } from '../schemas/updateManySocialMedia.schema'
import { SocialMediaUpsertSchema } from '../schemas/upsertOneSocialMedia.schema'
import { SocialMediaAggregateSchema } from '../schemas/aggregateSocialMedia.schema'
import { SocialMediaGroupBySchema } from '../schemas/groupBySocialMedia.schema'

export const socialMediasRouter = createRouter()
	.query('findUniqueSocialMedia', {
		input: SocialMediaFindUniqueSchema,
		async resolve({ ctx, input }) {
			const findUniqueSocialMedia = await ctx.prisma.socialmedia.findUnique({
				where: input.where,
			})
			return findUniqueSocialMedia
		},
	})

	.query('findFirstSocialMedia', {
		input: SocialMediaFindFirstSchema,
		async resolve({ ctx, input }) {
			const findFirstSocialMedia = await ctx.prisma.socialmedia.findFirst(input)
			return findFirstSocialMedia
		},
	})

	.query('findManySocialMedia', {
		input: SocialMediaFindManySchema,
		async resolve({ ctx, input }) {
			const findManySocialMedia = await ctx.prisma.socialmedia.findMany(input)
			return findManySocialMedia
		},
	})

	.mutation('createOneSocialMedia', {
		input: SocialMediaCreateSchema,
		async resolve({ ctx, input }) {
			const createOneSocialMedia = await ctx.prisma.socialmedia.create({
				data: input.data,
			})
			return createOneSocialMedia
		},
	})

	.mutation('createManySocialMedia', {
		input: SocialMediaCreateSchema,
		async resolve({ ctx, input }) {
			const createManySocialMedia = await ctx.prisma.socialmedia.createMany(
				input
			)
			return createManySocialMedia
		},
	})

	.mutation('deleteOneSocialMedia', {
		input: SocialMediaDeleteOneSchema,
		async resolve({ ctx, input }) {
			const deleteOneSocialMedia = await ctx.prisma.socialmedia.delete({
				where: input.where,
			})
			return deleteOneSocialMedia
		},
	})

	.mutation('updateOneSocialMedia', {
		input: SocialMediaUpdateOneSchema,
		async resolve({ ctx, input }) {
			const updateOneSocialMedia = await ctx.prisma.socialmedia.update({
				where: input.where,
				data: input.data,
			})
			return updateOneSocialMedia
		},
	})

	.mutation('deleteManySocialMedia', {
		input: SocialMediaDeleteManySchema,
		async resolve({ ctx, input }) {
			const deleteManySocialMedia = await ctx.prisma.socialmedia.deleteMany(
				input
			)
			return deleteManySocialMedia
		},
	})

	.mutation('updateManySocialMedia', {
		input: SocialMediaUpdateManySchema,
		async resolve({ ctx, input }) {
			const updateManySocialMedia = await ctx.prisma.socialmedia.updateMany(
				input
			)
			return updateManySocialMedia
		},
	})

	.mutation('upsertOneSocialMedia', {
		input: SocialMediaUpsertSchema,
		async resolve({ ctx, input }) {
			const upsertOneSocialMedia = await ctx.prisma.socialmedia.upsert({
				where: input.where,
				create: input.create,
				update: input.update,
			})
			return upsertOneSocialMedia
		},
	})

	.query('aggregateSocialMedia', {
		input: SocialMediaAggregateSchema,
		async resolve({ ctx, input }) {
			const aggregateSocialMedia = await ctx.prisma.socialmedia.aggregate(input)
			return aggregateSocialMedia
		},
	})

	.query('groupBySocialMedia', {
		input: SocialMediaGroupBySchema,
		async resolve({ ctx, input }) {
			const groupBySocialMedia = await ctx.prisma.socialmedia.groupBy({
				where: input.where,
				orderBy: input.orderBy,
				by: input.by,
				having: input.having,
				take: input.take,
				skip: input.skip,
			})
			return groupBySocialMedia
		},
	})

	.undefined('findSocialMediaRaw', {
		input: undefined,
		async resolve({ ctx, input }) {
			const findSocialMediaRaw = await ctx.prisma.socialmedia.findRaw(input)
			return findSocialMediaRaw
		},
	})

	.undefined('aggregateSocialMediaRaw', {
		input: undefined,
		async resolve({ ctx, input }) {
			const aggregateSocialMediaRaw = await ctx.prisma.socialmedia.aggregateRaw(
				input
			)
			return aggregateSocialMediaRaw
		},
	})
