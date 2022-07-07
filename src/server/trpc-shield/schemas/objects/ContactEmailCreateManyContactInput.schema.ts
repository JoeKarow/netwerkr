import { z } from 'zod'
import { EmailLabelSchema } from '../enums/EmailLabel.schema'

export const ContactEmailCreateManyContactInputObjectSchema = z.object({
	id: z.string()?.optional(),
	email: z.string(),
	primary: z.boolean()?.optional().nullable(),
	label: EmailLabelSchema?.optional(),
	createdAt: z.date()?.optional().nullable(),
	updatedAt: z.date()?.optional().nullable(),
})
