import { z } from 'zod'
import { EmailLabelSchema } from '../enums/EmailLabel.schema'

export const EmailObjectEqualityInputObjectSchema = z.object({
	email: z.string(),
	primary: z.boolean()?.optional().nullable(),
	label: EmailLabelSchema,
	createdAt: z.date()?.optional().nullable(),
})
