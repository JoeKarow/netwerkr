import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { InteractionSourceSchema } from '../enums/InteractionSource.schema'
import { EnumInteractionSourceFieldUpdateOperationsInputObjectSchema } from './EnumInteractionSourceFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'

export const InteractionsUncheckedUpdateManyInputObjectSchema = z.object({
	contactId: z
		.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
		?.optional(),
	source: z
		.union([
			InteractionSourceSchema,
			EnumInteractionSourceFieldUpdateOperationsInputObjectSchema,
		])
		?.optional(),
	time: z
		.union([z.date(), DateTimeFieldUpdateOperationsInputObjectSchema])
		?.optional(),
	content: z
		.union([z.string(), StringFieldUpdateOperationsInputObjectSchema])
		?.optional(),
	extPostId: z
		.union([
			z.string(),
			NullableStringFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
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
	socialMediaServiceId: z
		.union([
			z.string(),
			NullableStringFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
})
