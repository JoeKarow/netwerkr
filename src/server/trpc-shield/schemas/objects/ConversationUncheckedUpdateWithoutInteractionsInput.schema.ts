import { z } from 'zod'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

export const ConversationUncheckedUpdateWithoutInteractionsInputObjectSchema =
	z.object({
		twitterConvoId: z
			.union([
				z.string(),
				NullableStringFieldUpdateOperationsInputObjectSchema.nullable(),
			])
			?.optional(),
	})
