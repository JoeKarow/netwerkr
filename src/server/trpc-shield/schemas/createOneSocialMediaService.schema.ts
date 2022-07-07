import { z } from 'zod'
import { SocialMediaServiceCreateInputObjectSchema } from './objects/SocialMediaServiceCreateInput.schema'

export const SocialMediaServiceCreateSchema = z.object({
	data: SocialMediaServiceCreateInputObjectSchema,
})
