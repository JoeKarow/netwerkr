import { z } from 'zod'
import { InteractionSourceSchema } from '../enums/InteractionSource.schema'
import { EnumInteractionSourceFieldUpdateOperationsInputObjectSchema } from './EnumInteractionSourceFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { ConversationUncheckedUpdateManyWithoutInteractionsInputObjectSchema } from './ConversationUncheckedUpdateManyWithoutInteractionsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'

export const InteractionsUncheckedUpdateWithoutContactInputObjectSchema =
	z.object({
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
		conversationId:
			ConversationUncheckedUpdateManyWithoutInteractionsInputObjectSchema?.optional(),
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
