import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { PhoneLabelSchema } from '../enums/PhoneLabel.schema'
import { EnumPhoneLabelFieldUpdateOperationsInputObjectSchema } from './EnumPhoneLabelFieldUpdateOperationsInput.schema'
import { NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema'
import { ContactUpdateOneRequiredWithoutPhoneInputObjectSchema } from './ContactUpdateOneRequiredWithoutPhoneInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'

export const ContactPhoneUpdateInputObjectSchema = z.object({
	number: z
		.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
		?.optional(),
	label: z
		.union([
			PhoneLabelSchema,
			EnumPhoneLabelFieldUpdateOperationsInputObjectSchema,
		])
		?.optional(),
	primary: z
		.union([
			z.boolean(),
			NullableBoolFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
	contact: ContactUpdateOneRequiredWithoutPhoneInputObjectSchema?.optional(),
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
