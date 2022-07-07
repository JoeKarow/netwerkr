import { z } from 'zod'
import { InteractionSourceSchema } from '../enums/InteractionSource.schema'
import { EnumInteractionSourceFieldUpdateOperationsInputObjectSchema } from './EnumInteractionSourceFieldUpdateOperationsInput.schema'
import { SocialMediaServiceUpdateOneWithoutInteractionsInputObjectSchema } from './SocialMediaServiceUpdateOneWithoutInteractionsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { ConversationUpdateManyWithoutInteractionsInputObjectSchema } from './ConversationUpdateManyWithoutInteractionsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'

export const InteractionsUpdateWithoutContactInputObjectSchema = z.object({
	source: z
		.union([
			InteractionSourceSchema,
			EnumInteractionSourceFieldUpdateOperationsInputObjectSchema,
		])
		?.optional(),
	sourceSocial:
		SocialMediaServiceUpdateOneWithoutInteractionsInputObjectSchema?.optional(),
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
	conversationId:
		ConversationUpdateManyWithoutInteractionsInputObjectSchema?.optional(),
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
