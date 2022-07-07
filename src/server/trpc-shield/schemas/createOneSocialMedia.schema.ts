import { z } from 'zod'
import { SocialMediaCreateInputObjectSchema } from './objects/SocialMediaCreateInput.schema'

export const SocialMediaCreateSchema = z.object({
	data: SocialMediaCreateInputObjectSchema,
})
