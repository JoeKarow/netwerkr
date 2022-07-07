import { z } from 'zod'
import { ConversationUpdateInputObjectSchema } from './objects/ConversationUpdateInput.schema'
import { ConversationWhereUniqueInputObjectSchema } from './objects/ConversationWhereUniqueInput.schema'

export const ConversationUpdateOneSchema = z.object({
	data: ConversationUpdateInputObjectSchema,
	where: ConversationWhereUniqueInputObjectSchema,
})
