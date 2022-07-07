import { z } from 'zod'
import { ConversationWhereUniqueInputObjectSchema } from './objects/ConversationWhereUniqueInput.schema'

export const ConversationFindUniqueSchema = z.object({
	where: ConversationWhereUniqueInputObjectSchema,
})
