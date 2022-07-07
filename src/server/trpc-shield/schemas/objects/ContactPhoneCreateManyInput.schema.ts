import { z } from 'zod'
import { PhoneLabelSchema } from '../enums/PhoneLabel.schema'

export const ContactPhoneCreateManyInputObjectSchema = z.object({
	id: z.string()?.optional(),
	number: z.string(),
	label: PhoneLabelSchema,
	primary: z.boolean()?.optional().nullable(),
	contactId: z.string(),
	createdAt: z.date()?.optional().nullable(),
	updatedAt: z.date()?.optional().nullable(),
})
