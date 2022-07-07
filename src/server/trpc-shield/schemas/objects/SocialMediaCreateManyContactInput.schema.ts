import { z } from 'zod'

export const SocialMediaCreateManyContactInputObjectSchema = z.object({
	id: z.string()?.optional(),
	userId: z.string(),
	displayName: z.string(),
	username: z.string(),
	protected: z.boolean(),
	profileImg: z.string()?.optional().nullable(),
	createdAt: z.date()?.optional().nullable(),
	updatedAt: z.date()?.optional().nullable(),
	socialMediaServiceId: z.string(),
})
