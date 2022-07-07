import { z } from 'zod'
import { SocialMediaWhereInputObjectSchema } from './objects/SocialMediaWhereInput.schema'
import { SocialMediaOrderByWithAggregationInputObjectSchema } from './objects/SocialMediaOrderByWithAggregationInput.schema'
import { SocialMediaScalarWhereWithAggregatesInputObjectSchema } from './objects/SocialMediaScalarWhereWithAggregatesInput.schema'
import { SocialMediaScalarFieldEnumSchema } from './enums/SocialMediaScalarFieldEnum.schema'

export const SocialMediaGroupBySchema = z.object({
	where: SocialMediaWhereInputObjectSchema.optional(),
	orderBy: SocialMediaOrderByWithAggregationInputObjectSchema,
	having: SocialMediaScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(SocialMediaScalarFieldEnumSchema),
})
