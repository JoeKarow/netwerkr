import { z } from 'zod'
import { EmailLabelSchema } from '../enums/EmailLabel.schema'

export const EmailCreateInputObjectSchema = z.object({
	email: z.string(),
	primary: z.boolean()?.optional().nullable(),
	label: EmailLabelSchema?.optional(),
	createdAt: z.date()?.optional().nullable(),
})
