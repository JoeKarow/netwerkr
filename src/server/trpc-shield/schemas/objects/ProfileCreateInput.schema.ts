import { z } from 'zod'
import { EmailCreateInputObjectSchema } from './EmailCreateInput.schema'
import { PhoneCreateInputObjectSchema } from './PhoneCreateInput.schema'
import { SocialMediaCreateInputObjectSchema } from './SocialMediaCreateInput.schema'

export const ProfileCreateInputObjectSchema = z.object({
	firstName: z.string(),
	lastName: z.string(),
	email: z
		.union([
			EmailCreateInputObjectSchema,
			z.array(EmailCreateInputObjectSchema),
		])
		?.optional(),
	phone: PhoneCreateInputObjectSchema?.optional().nullable(),
	photo: z.string()?.optional().nullable(),
	socialMedia: z
		.union([
			SocialMediaCreateInputObjectSchema,
			z.array(SocialMediaCreateInputObjectSchema),
		])
		?.optional(),
	createdAt: z.date()?.optional().nullable(),
})
