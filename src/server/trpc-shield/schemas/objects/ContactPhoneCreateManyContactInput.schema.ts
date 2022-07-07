import { z } from 'zod'
import { PhoneLabelSchema } from '../enums/PhoneLabel.schema'

export const ContactPhoneCreateManyContactInputObjectSchema = z.object({
	id: z.string()?.optional(),
	number: z.string(),
	label: PhoneLabelSchema,
	primary: z.boolean()?.optional().nullable(),
	createdAt: z.date()?.optional().nullable(),
	updatedAt: z.date()?.optional().nullable(),
})
