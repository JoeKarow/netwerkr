import { z } from 'zod'
import { InteractionsCreateNestedOneWithoutConversationIdInputObjectSchema } from './InteractionsCreateNestedOneWithoutConversationIdInput.schema'

export const ConversationCreateInputObjectSchema = z.object({
	id: z.string()?.optional(),
	twitterConvoId: z.string()?.optional().nullable(),
	Interactions:
		InteractionsCreateNestedOneWithoutConversationIdInputObjectSchema?.optional(),
})
