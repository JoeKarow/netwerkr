import { z } from 'zod'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

export const ConversationUncheckedUpdateManyWithoutConversationIdInputObjectSchema =
	z.object({
		twitterConvoId: z
			.union([
				z.string(),
				NullableStringFieldUpdateOperationsInputObjectSchema.nullable(),
			])
			?.optional(),
	})
