import { z } from 'zod'
import { SocialMediaServiceWhereUniqueInputObjectSchema } from './objects/SocialMediaServiceWhereUniqueInput.schema'
import { SocialMediaServiceCreateInputObjectSchema } from './objects/SocialMediaServiceCreateInput.schema'
import { SocialMediaServiceUpdateInputObjectSchema } from './objects/SocialMediaServiceUpdateInput.schema'

export const SocialMediaServiceUpsertSchema = z.object({
	where: SocialMediaServiceWhereUniqueInputObjectSchema,
	create: SocialMediaServiceCreateInputObjectSchema,
	update: SocialMediaServiceUpdateInputObjectSchema,
})
