import { z } from 'zod'

export const ConversationWhereUniqueInputObjectSchema = z.object({
	id: z.string()?.optional(),
})
