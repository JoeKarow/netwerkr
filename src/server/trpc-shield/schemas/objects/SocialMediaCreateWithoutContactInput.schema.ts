import { z } from 'zod'
import { SocialMediaServiceCreateNestedOneWithoutSocialMediaInputObjectSchema } from './SocialMediaServiceCreateNestedOneWithoutSocialMediaInput.schema'

export const SocialMediaCreateWithoutContactInputObjectSchema = z.object({
	id: z.string()?.optional(),
	service: SocialMediaServiceCreateNestedOneWithoutSocialMediaInputObjectSchema,
	userId: z.string(),
	displayName: z.string(),
	username: z.string(),
	protected: z.boolean(),
	profileImg: z.string()?.optional().nullable(),
	createdAt: z.date()?.optional().nullable(),
	updatedAt: z.date()?.optional().nullable(),
})
