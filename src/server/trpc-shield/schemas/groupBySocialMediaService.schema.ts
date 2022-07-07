import { z } from 'zod'
import { SocialMediaServiceWhereInputObjectSchema } from './objects/SocialMediaServiceWhereInput.schema'
import { SocialMediaServiceOrderByWithAggregationInputObjectSchema } from './objects/SocialMediaServiceOrderByWithAggregationInput.schema'
import { SocialMediaServiceScalarWhereWithAggregatesInputObjectSchema } from './objects/SocialMediaServiceScalarWhereWithAggregatesInput.schema'
import { SocialMediaServiceScalarFieldEnumSchema } from './enums/SocialMediaServiceScalarFieldEnum.schema'

export const SocialMediaServiceGroupBySchema = z.object({
	where: SocialMediaServiceWhereInputObjectSchema.optional(),
	orderBy: SocialMediaServiceOrderByWithAggregationInputObjectSchema,
	having:
		SocialMediaServiceScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(SocialMediaServiceScalarFieldEnumSchema),
})
