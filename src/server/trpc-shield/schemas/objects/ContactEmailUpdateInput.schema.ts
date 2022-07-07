import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema'
import { EmailLabelSchema } from '../enums/EmailLabel.schema'
import { EnumEmailLabelFieldUpdateOperationsInputObjectSchema } from './EnumEmailLabelFieldUpdateOperationsInput.schema'
import { ContactUpdateOneRequiredWithoutEmailInputObjectSchema } from './ContactUpdateOneRequiredWithoutEmailInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'

export const ContactEmailUpdateInputObjectSchema = z.object({
	email: z
		.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
		?.optional(),
	primary: z
		.union([
			z.boolean(),
			NullableBoolFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
	label: z
		.union([
			EmailLabelSchema,
			EnumEmailLabelFieldUpdateOperationsInputObjectSchema,
		])
		?.optional(),
	contact: ContactUpdateOneRequiredWithoutEmailInputObjectSchema?.optional(),
	createdAt: z
		.union([
			z.date(),
			NullableDateTimeFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
	updatedAt: z
		.union([
			z.date(),
			NullableDateTimeFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
})