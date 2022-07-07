import { z } from 'zod'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { InteractionsUpdateOneWithoutConversationIdInputObjectSchema } from './InteractionsUpdateOneWithoutConversationIdInput.schema'

export const ConversationUpdateInputObjectSchema = z.object({
	twitterConvoId: z
		.union([
			z.string(),
			NullableStringFieldUpdateOperationsInputObjectSchema.nullable(),
		])
		?.optional(),
	Interactions:
		InteractionsUpdateOneWithoutConversationIdInputObjectSchema?.optional(),
})
