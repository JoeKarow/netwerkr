import { z } from 'zod'
import { ContactCreateNestedOneWithoutSocialMediaInputObjectSchema } from './ContactCreateNestedOneWithoutSocialMediaInput.schema'

export const SocialMediaCreateWithoutServiceInputObjectSchema = z.object({
	id: z.string()?.optional(),
	contact: ContactCreateNestedOneWithoutSocialMediaInputObjectSchema,
	userId: z.string(),
	displayName: z.string(),
	username: z.string(),
	protected: z.boolean(),
	profileImg: z.string()?.optional().nullable(),
	createdAt: z.date()?.optional().nullable(),
	updatedAt: z.date()?.optional().nullable(),
})
