import { z } from 'zod'
import { EmailObjectEqualityInputObjectSchema } from './EmailObjectEqualityInput.schema'
import { PhoneObjectEqualityInputObjectSchema } from './PhoneObjectEqualityInput.schema'
import { SocialMediaObjectEqualityInputObjectSchema } from './SocialMediaObjectEqualityInput.schema'

export const ProfileObjectEqualityInputObjectSchema = z.object({
	firstName: z.string(),
	lastName: z.string(),
	email: z.array(EmailObjectEqualityInputObjectSchema),
	phone: PhoneObjectEqualityInputObjectSchema?.optional().nullable(),
	photo: z.string()?.optional().nullable(),
	socialMedia: z.array(SocialMediaObjectEqualityInputObjectSchema),
	createdAt: z.date()?.optional().nullable(),
})
