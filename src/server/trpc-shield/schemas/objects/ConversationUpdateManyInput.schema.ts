import { z } from 'zod'
import { ConversationWhereInputObjectSchema } from './ConversationWhereInput.schema'
import { ConversationUpdateInputObjectSchema } from './ConversationUpdateInput.schema'

export const ConversationUpdateManyInputObjectSchema = z.object({
	where: ConversationWhereInputObjectSchema,
	data: ConversationUpdateInputObjectSchema,
})
