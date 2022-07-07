import { z } from 'zod'
import { PhoneLabelSchema } from '../enums/PhoneLabel.schema'

export const PhoneObjectEqualityInputObjectSchema = z.object({
	number: z.string(),
	label: PhoneLabelSchema,
	primary: z.boolean()?.optional().nullable(),
	createdAt: z.date()?.optional().nullable(),
})
