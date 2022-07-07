import { z } from 'zod'
import { ConversationCreateInputObjectSchema } from './objects/ConversationCreateInput.schema'

export const ConversationCreateSchema = z.object({
	data: ConversationCreateInputObjectSchema,
})
