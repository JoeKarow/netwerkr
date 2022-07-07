import { z } from 'zod'

export const ConversationCreateWithoutInteractionsInputObjectSchema = z.object({
	id: z.string()?.optional(),
	twitterConvoId: z.string()?.optional().nullable(),
})
