import { z } from 'zod'

export const ConversationCreateInputObjectSchema = z.object({
	twitterConvoId: z.string()?.optional().nullable(),
})
