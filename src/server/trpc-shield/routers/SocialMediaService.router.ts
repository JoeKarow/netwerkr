import { createRouter } from './helpers/createRouter'

import { SocialMediaServiceFindUniqueSchema } from '../schemas/findUniqueSocialMediaService.schema'
import { SocialMediaServiceFindFirstSchema } from '../schemas/findFirstSocialMediaService.schema'
import { SocialMediaServiceFindManySchema } from '../schemas/findManySocialMediaService.schema'
import { SocialMediaServiceCreateSchema } from '../schemas/createOneSocialMediaService.schema'
import { SocialMediaServiceDeleteOneSchema } from '../schemas/deleteOneSocialMediaService.schema'
import { SocialMediaServiceUpdateOneSchema } from '../schemas/updateOneSocialMediaService.schema'
import { SocialMediaServiceDeleteManySchema } from '../schemas/deleteManySocialMediaService.schema'
import { SocialMediaServiceUpdateManySchema } from '../schemas/updateManySocialMediaService.schema'
import { SocialMediaServiceUpsertSchema } from '../schemas/upsertOneSocialMediaService.schema'
import { SocialMediaServiceAggregateSchema } from '../schemas/aggregateSocialMediaService.schema'
import { SocialMediaServiceGroupBySchema } from '../schemas/groupBySocialMediaService.schema'

export const socialMediaServicesRouter = createRouter()
	.query('findUniqueSocialMediaService', {
		input: SocialMediaServiceFindUniqueSchema,
		async resolve({ ctx, input }) {
			const findUniqueSocialMediaService =
				await ctx.prisma.socialmediaservice.findUnique({ where: input.where })
			return findUniqueSocialMediaService
		},
	})

	.query('findFirstSocialMediaService', {
		input: SocialMediaServiceFindFirstSchema,
		async resolve({ ctx, input }) {
			const findFirstSocialMediaService =
				await ctx.prisma.socialmediaservice.findFirst(input)
			return findFirstSocialMediaService
		},
	})

	.query('findManySocialMediaService', {
		input: SocialMediaServiceFindManySchema,
		async resolve({ ctx, input }) {
			const findManySocialMediaService =
				await ctx.prisma.socialmediaservice.findMany(input)
			return findManySocialMediaService
		},
	})

	.mutation('createOneSocialMediaService', {
		input: SocialMediaServiceCreateSchema,
		async resolve({ ctx, input }) {
			const createOneSocialMediaService =
				await ctx.prisma.socialmediaservice.create({ data: input.data })
			return createOneSocialMediaService
		},
	})

	.mutation('createManySocialMediaService', {
		input: SocialMediaServiceCreateSchema,
		async resolve({ ctx, input }) {
			const createManySocialMediaService =
				await ctx.prisma.socialmediaservice.createMany(input)
			return createManySocialMediaService
		},
	})

	.mutation('deleteOneSocialMediaService', {
		input: SocialMediaServiceDeleteOneSchema,
		async resolve({ ctx, input }) {
			const deleteOneSocialMediaService =
				await ctx.prisma.socialmediaservice.delete({ where: input.where })
			return deleteOneSocialMediaService
		},
	})

	.mutation('updateOneSocialMediaService', {
		input: SocialMediaServiceUpdateOneSchema,
		async resolve({ ctx, input }) {
			const updateOneSocialMediaService =
				await ctx.prisma.socialmediaservice.update({
					where: input.where,
					data: input.data,
				})
			return updateOneSocialMediaService
		},
	})

	.mutation('deleteManySocialMediaService', {
		input: SocialMediaServiceDeleteManySchema,
		async resolve({ ctx, input }) {
			const deleteManySocialMediaService =
				await ctx.prisma.socialmediaservice.deleteMany(input)
			return deleteManySocialMediaService
		},
	})

	.mutation('updateManySocialMediaService', {
		input: SocialMediaServiceUpdateManySchema,
		async resolve({ ctx, input }) {
			const updateManySocialMediaService =
				await ctx.prisma.socialmediaservice.updateMany(input)
			return updateManySocialMediaService
		},
	})

	.mutation('upsertOneSocialMediaService', {
		input: SocialMediaServiceUpsertSchema,
		async resolve({ ctx, input }) {
			const upsertOneSocialMediaService =
				await ctx.prisma.socialmediaservice.upsert({
					where: input.where,
					create: input.create,
					update: input.update,
				})
			return upsertOneSocialMediaService
		},
	})

	.query('aggregateSocialMediaService', {
		input: SocialMediaServiceAggregateSchema,
		async resolve({ ctx, input }) {
			const aggregateSocialMediaService =
				await ctx.prisma.socialmediaservice.aggregate(input)
			return aggregateSocialMediaService
		},
	})

	.query('groupBySocialMediaService', {
		input: SocialMediaServiceGroupBySchema,
		async resolve({ ctx, input }) {
			const groupBySocialMediaService =
				await ctx.prisma.socialmediaservice.groupBy({
					where: input.where,
					orderBy: input.orderBy,
					by: input.by,
					having: input.having,
					take: input.take,
					skip: input.skip,
				})
			return groupBySocialMediaService
		},
	})

	.undefined('findSocialMediaServiceRaw', {
		input: undefined,
		async resolve({ ctx, input }) {
			const findSocialMediaServiceRaw =
				await ctx.prisma.socialmediaservice.findRaw(input)
			return findSocialMediaServiceRaw
		},
	})

	.undefined('aggregateSocialMediaServiceRaw', {
		input: undefined,
		async resolve({ ctx, input }) {
			const aggregateSocialMediaServiceRaw =
				await ctx.prisma.socialmediaservice.aggregateRaw(input)
			return aggregateSocialMediaServiceRaw
		},
	})
