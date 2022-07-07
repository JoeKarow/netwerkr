import { z } from 'zod'
import { ProfileCreateInputObjectSchema } from './ProfileCreateInput.schema'
import { ProfileUpdateManyInputObjectSchema } from './ProfileUpdateManyInput.schema'
import { ProfileDeleteManyInputObjectSchema } from './ProfileDeleteManyInput.schema'

export const ProfileListUpdateEnvelopeInputObjectSchema = z.object({
	set: z
		.union([
			ProfileCreateInputObjectSchema,
			z.array(ProfileCreateInputObjectSchema),
		])
		?.optional(),
	push: z
		.union([
			ProfileCreateInputObjectSchema,
			z.array(ProfileCreateInputObjectSchema),
		])
		?.optional(),
	updateMany: ProfileUpdateManyInputObjectSchema?.optional(),
	deleteMany: ProfileDeleteManyInputObjectSchema?.optional(),
})
