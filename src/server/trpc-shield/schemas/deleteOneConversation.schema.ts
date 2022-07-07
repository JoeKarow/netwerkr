import { z } from 'zod'
import { ConversationWhereUniqueInputObjectSchema } from './objects/ConversationWhereUniqueInput.schema'

export const ConversationDeleteOneSchema = z.object({
	where: ConversationWhereUniqueInputObjectSchema,
})
