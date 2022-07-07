import { z } from 'zod'

export const SocialMediaCreateInputObjectSchema = z.object({
	userId: z.string(),
	displayName: z.string(),
	username: z.string(),
	protected: z.boolean(),
	profileImg: z.string()?.optional().nullable(),
	createdAt: z.date()?.optional().nullable(),
})
