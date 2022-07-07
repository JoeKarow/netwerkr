import { z } from 'zod'
import { SocialMediaUpdateManyMutationInputObjectSchema } from './objects/SocialMediaUpdateManyMutationInput.schema'
import { SocialMediaWhereInputObjectSchema } from './objects/SocialMediaWhereInput.schema'

export const SocialMediaUpdateManySchema = z.object({
	data: SocialMediaUpdateManyMutationInputObjectSchema,
	where: SocialMediaWhereInputObjectSchema.optional(),
})
