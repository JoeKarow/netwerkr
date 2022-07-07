import { z } from 'zod'
import { SocialMediaWhereInputObjectSchema } from './objects/SocialMediaWhereInput.schema'

export const SocialMediaDeleteManySchema = z.object({
	where: SocialMediaWhereInputObjectSchema.optional(),
})
