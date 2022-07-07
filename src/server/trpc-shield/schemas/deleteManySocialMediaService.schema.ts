import { z } from 'zod'
import { SocialMediaServiceWhereInputObjectSchema } from './objects/SocialMediaServiceWhereInput.schema'

export const SocialMediaServiceDeleteManySchema = z.object({
	where: SocialMediaServiceWhereInputObjectSchema.optional(),
})
