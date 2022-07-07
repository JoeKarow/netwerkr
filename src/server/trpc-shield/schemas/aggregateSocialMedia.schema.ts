import { z } from 'zod'
import { SocialMediaWhereInputObjectSchema } from './objects/SocialMediaWhereInput.schema'
import { SocialMediaOrderByWithRelationInputObjectSchema } from './objects/SocialMediaOrderByWithRelationInput.schema'
import { SocialMediaWhereUniqueInputObjectSchema } from './objects/SocialMediaWhereUniqueInput.schema'

export const SocialMediaAggregateSchema = z.object({
	where: SocialMediaWhereInputObjectSchema.optional(),
	orderBy: SocialMediaOrderByWithRelationInputObjectSchema.optional(),
	cursor: SocialMediaWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
})
