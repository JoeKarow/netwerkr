import { z } from 'zod'

export const ConversationObjectEqualityInputObjectSchema = z.object({
	twitterConvoId: z.string()?.optional().nullable(),
})
