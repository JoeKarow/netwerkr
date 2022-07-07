import { z } from 'zod'
import { SocialMediaWhereUniqueInputObjectSchema } from './objects/SocialMediaWhereUniqueInput.schema'
import { SocialMediaCreateInputObjectSchema } from './objects/SocialMediaCreateInput.schema'
import { SocialMediaUpdateInputObjectSchema } from './objects/SocialMediaUpdateInput.schema'

export const SocialMediaUpsertSchema = z.object({
	where: SocialMediaWhereUniqueInputObjectSchema,
	create: SocialMediaCreateInputObjectSchema,
	update: SocialMediaUpdateInputObjectSchema,
})
