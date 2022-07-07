import { z } from 'zod'

export const SocialMediaServiceUncheckedCreateInputObjectSchema = z.object({
	id: z.string()?.optional(),
	name: z.string(),
	urlbase: z.string(),
	createdAt: z.date()?.optional().nullable(),
	updatedAt: z.date()?.optional(),
})
