import { z } from 'zod'
import { ContactCreateNestedOneWithoutSocialMediaInputObjectSchema } from './ContactCreateNestedOneWithoutSocialMediaInput.schema'
import { SocialMediaServiceCreateNestedOneWithoutSocialMediaInputObjectSchema } from './SocialMediaServiceCreateNestedOneWithoutSocialMediaInput.schema'

export const SocialMediaCreateInputObjectSchema = z.object({
	id: z.string()?.optional(),
	contact: ContactCreateNestedOneWithoutSocialMediaInputObjectSchema,
	service: SocialMediaServiceCreateNestedOneWithoutSocialMediaInputObjectSchema,
	userId: z.string(),
	displayName: z.string(),
	username: z.string(),
	protected: z.boolean(),
	profileImg: z.string()?.optional().nullable(),
	createdAt: z.date()?.optional().nullable(),
	updatedAt: z.date()?.optional().nullable(),
})
