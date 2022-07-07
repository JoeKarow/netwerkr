import { z } from 'zod'

export const SocialMediaServiceWhereUniqueInputObjectSchema = z.object({
	id: z.string()?.optional(),
	name: z.string()?.optional(),
})
