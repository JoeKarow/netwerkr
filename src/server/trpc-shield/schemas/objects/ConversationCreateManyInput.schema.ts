import { z } from 'zod'

export const ConversationCreateManyInputObjectSchema = z.object({
	id: z.string()?.optional(),
	twitterConvoId: z.string()?.optional().nullable(),
	interactionsId: z.string()?.optional().nullable(),
})
