import { z } from 'zod'

export const SocialMediaWhereUniqueInputObjectSchema = z.object({
	id: z.string()?.optional(),
})
