import { z } from 'zod'
import { EmailLabelSchema } from '../enums/EmailLabel.schema'
import { ContactCreateNestedOneWithoutEmailInputObjectSchema } from './ContactCreateNestedOneWithoutEmailInput.schema'

export const ContactEmailCreateInputObjectSchema = z.object({
	id: z.string()?.optional(),
	email: z.string(),
	primary: z.boolean()?.optional().nullable(),
	label: EmailLabelSchema?.optional(),
	contact: ContactCreateNestedOneWithoutEmailInputObjectSchema,
	createdAt: z.date()?.optional().nullable(),
	updatedAt: z.date()?.optional().nullable(),
})
