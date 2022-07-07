import { z } from 'zod'
import { SocialMediaCreateInputObjectSchema } from './SocialMediaCreateInput.schema'
import { SocialMediaUpdateManyInputObjectSchema } from './SocialMediaUpdateManyInput.schema'
import { SocialMediaDeleteManyInputObjectSchema } from './SocialMediaDeleteManyInput.schema'

export const SocialMediaListUpdateEnvelopeInputObjectSchema = z.object({
	set: z
		.union([
			SocialMediaCreateInputObjectSchema,
			z.array(SocialMediaCreateInputObjectSchema),
		])
		?.optional(),
	push: z
		.union([
			SocialMediaCreateInputObjectSchema,
			z.array(SocialMediaCreateInputObjectSchema),
		])
		?.optional(),
	updateMany: SocialMediaUpdateManyInputObjectSchema?.optional(),
	deleteMany: SocialMediaDeleteManyInputObjectSchema?.optional(),
})
