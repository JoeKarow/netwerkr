import { z } from 'zod'

export const ConversationUncheckedCreateInputObjectSchema = z.object({
	id: z.string()?.optional(),
	twitterConvoId: z.string()?.optional().nullable(),
	interactionsId: z.string()?.optional().nullable(),
})
