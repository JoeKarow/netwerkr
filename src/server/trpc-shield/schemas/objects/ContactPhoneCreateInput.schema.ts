import { z } from 'zod'
import { PhoneLabelSchema } from '../enums/PhoneLabel.schema'
import { ContactCreateNestedOneWithoutPhoneInputObjectSchema } from './ContactCreateNestedOneWithoutPhoneInput.schema'

export const ContactPhoneCreateInputObjectSchema = z.object({
	id: z.string()?.optional(),
	number: z.string(),
	label: PhoneLabelSchema,
	primary: z.boolean()?.optional().nullable(),
	contact: ContactCreateNestedOneWithoutPhoneInputObjectSchema,
	createdAt: z.date()?.optional().nullable(),
	updatedAt: z.date()?.optional().nullable(),
})
