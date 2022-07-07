import { z } from 'zod'
import { InteractionSourceSchema } from '../enums/InteractionSource.schema'
import { EnumInteractionSourceFieldUpdateOperationsInputObjectSchema } from './EnumInteractionSourceFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { ConversationListUpdateEnvelopeInputObjectSchema } from './ConversationListUpdateEnvelopeInput.schema'
import { ConversationCreateInputObjectSchema } from './ConversationCreateInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'

export const InteractionsUpdateInputObjectSchema = z.object({
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
	conversation: z
		.union([
			ConversationListUpdateEnvelopeInputObjectSchema,
			ConversationCreateInputObjectSchema,
			z.array(ConversationCreateInputObjectSchema),
		])
		?.optional(),
	createdAt: z
		.union([
			z.date(),
			NullableDateTimeFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
})
