import { z } from 'zod'

export const SocialMediaServiceWhereUniqueInputObjectSchema = z
	.object({
		id: z.string(),
		name: z.string(),
	})
	.partial()
