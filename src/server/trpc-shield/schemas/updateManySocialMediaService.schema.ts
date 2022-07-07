import { z } from 'zod'
import { SocialMediaServiceUpdateManyMutationInputObjectSchema } from './objects/SocialMediaServiceUpdateManyMutationInput.schema'
import { SocialMediaServiceWhereInputObjectSchema } from './objects/SocialMediaServiceWhereInput.schema'

export const SocialMediaServiceUpdateManySchema = z.object({
	data: SocialMediaServiceUpdateManyMutationInputObjectSchema,
	where: SocialMediaServiceWhereInputObjectSchema.optional(),
})
