import { z } from 'zod'

export const ConversationUncheckedCreateWithoutInteractionsInputObjectSchema =
	z.object({
		id: z.string()?.optional(),
		twitterConvoId: z.string()?.optional().nullable(),
	})
