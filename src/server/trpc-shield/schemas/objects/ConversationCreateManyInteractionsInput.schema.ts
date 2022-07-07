import { z } from 'zod'

export const ConversationCreateManyInteractionsInputObjectSchema = z.object({
	id: z.string()?.optional(),
	twitterConvoId: z.string()?.optional().nullable(),
})
