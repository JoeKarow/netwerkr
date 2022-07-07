import { z } from 'zod'
import { ProfileCreateInputObjectSchema } from './ProfileCreateInput.schema'

export const ProfileListCreateEnvelopeInputObjectSchema = z.object({
	set: z
		.union([
			ProfileCreateInputObjectSchema,
			z.array(ProfileCreateInputObjectSchema),
		])
		?.optional(),
})
