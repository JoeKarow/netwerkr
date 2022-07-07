import { z } from 'zod'

export const SocialMediaServiceCreateManyInputObjectSchema = z.object({
	id: z.string()?.optional(),
	name: z.string(),
	urlbase: z.string(),
})
