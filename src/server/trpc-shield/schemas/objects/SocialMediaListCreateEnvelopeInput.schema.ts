import { z } from 'zod'
import { SocialMediaCreateInputObjectSchema } from './SocialMediaCreateInput.schema'

export const SocialMediaListCreateEnvelopeInputObjectSchema = z.object({
	set: z
		.union([
			SocialMediaCreateInputObjectSchema,
			z.array(SocialMediaCreateInputObjectSchema),
		])
		?.optional(),
})
